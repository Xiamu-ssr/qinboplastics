#!/usr/bin/env node
// 读取世界 GeoJSON，投影并简化为国家轮廓 SVG path → assets/js/map-data.js
// 渲染时填充国家形状，可按 ISO_A2 点亮整个国家。
const fs = require('fs');
const path = require('path');
const world = JSON.parse(fs.readFileSync(path.join(__dirname, 'world.geojson'), 'utf8'));

const LON_MIN = 45, LON_MAX = 150, LAT_MIN = -12, LAT_MAX = 53;
const W = 1280, H = Math.round(W * (LAT_MAX - LAT_MIN) / (LON_MAX - LON_MIN));

function project(lon, lat) {
  const x = (lon - LON_MIN) / (LON_MAX - LON_MIN) * W;
  const y = (LAT_MAX - lat) / (LAT_MAX - LAT_MIN) * H;
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}
// 简化：丢弃与上一点距离 < eps 像素的点（保留环首尾）
function simplifyRing(pts, eps) {
  if (pts.length < 4) return pts;
  const out = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) {
    const a = out[out.length - 1], b = pts[i];
    if (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) >= eps) out.push(b);
  }
  out.push(pts[pts.length - 1]);
  return out;
}

const EPS = 1.2; // 像素简化阈值
const countries = [];
for (const f of world.features) {
  const g = f.geometry; if (!g) continue;
  const p = f.properties;
  const iso = p.ISO_A2 && p.ISO_A2 !== '-99' ? p.ISO_A2 : (p.ADM0_A3 || p.NAME);
  const name = p.NAME || p.ADMIN || iso;
  const list = g.type === 'Polygon' ? [g.coordinates]
            : g.type === 'MultiPolygon' ? g.coordinates : [];
  let d = '', kept = false;
  for (const poly of list) {
    // bbox 过滤：外环与投影区相交才保留
    let mnx = 180, mny = 90, mxx = -180, mxy = -90;
    for (const [x, y] of poly[0]) { if (x<mnx)mnx=x; if(x>mxx)mxx=x; if(y<mny)mny=y; if(y>mxy)mxy=y; }
    if (mxx < LON_MIN || mnx > LON_MAX || mxy < LAT_MIN || mny > LAT_MAX) continue;
    // 跳过极小岛屿（投影后 bbox < 3px）
    const [px0, py0] = project(mnx, mxy), [px1, py1] = project(mxx, mny);
    if (Math.abs(px1 - px0) < 3 && Math.abs(py1 - py0) < 3) continue;
    for (const ring of poly) {
      const proj = ring.map(([lo, la]) => project(lo, la));
      const s = simplifyRing(proj, EPS);
      if (s.length < 3) continue;
      d += 'M' + s.map(pt => pt[0] + ' ' + pt[1]).join('L') + 'Z';
    }
    kept = true;
  }
  if (kept && d) countries.push({ id: iso, name, d });
}
countries.sort((a, b) => a.id < b.id ? -1 : 1);
console.error('国家数:', countries.length);

const out = `/* 自动生成，勿手改。源：scripts/geo/gen_countries.js + Natural Earth 110m */
window.QB_MAP_DATA = {
  viewBox: [${W}, ${H}],
  proj: { lonMin: ${LON_MIN}, lonMax: ${LON_MAX}, latMin: ${LAT_MIN}, latMax: ${LAT_MAX} },
  countries: ${JSON.stringify(countries)}
};
`;
const outPath = path.join(__dirname, '..', '..', 'assets', 'js', 'map-data.js');
fs.writeFileSync(outPath, out);
console.error('已写入', outPath, (out.length / 1024).toFixed(1) + ' KB');
