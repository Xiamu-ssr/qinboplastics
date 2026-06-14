#!/usr/bin/env node
// 读取世界 GeoJSON，对亚洲区域网格做点在陆地判断，烘焙点阵 → assets/js/map-data.js
const fs = require('fs');
const path = require('path');

const world = JSON.parse(fs.readFileSync(path.join(__dirname, 'world.geojson'), 'utf8'));

// 投影区域（含中东/东南亚/东亚）
const LON_MIN = 45, LON_MAX = 150, LAT_MIN = -12, LAT_MAX = 53;
const W = 1280, H = Math.round(W * (LAT_MAX - LAT_MIN) / (LON_MAX - LON_MIN)); // 等距圆柱
const STEP = 0.82; // 网格密度（度）

function project(lon, lat) {
  const x = (lon - LON_MIN) / (LON_MAX - LON_MIN) * W;
  const y = (LAT_MAX - lat) / (LAT_MAX - LAT_MIN) * H;
  return [x, y];
}

// 射线法：点是否在单个 polygon(含洞) 内
function inRing(lon, lat, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0], yi = ring[i][1];
    const xj = ring[j][0], yj = ring[j][1];
    const intersect = ((yi > lat) !== (yj > lat)) &&
      (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}
function inPolygon(lon, lat, poly) {
  if (!inRing(lon, lat, poly[0])) return false;     // 外环
  for (let k = 1; k < poly.length; k++) if (inRing(lon, lat, poly[k])) return false; // 洞
  return true;
}

// 预筛区域内的国家（按 bbox 与投影区相交），并展开成 polygon 列表 + bbox
const polys = [];
for (const f of world.features) {
  const g = f.geometry;
  if (!g) continue;
  const list = g.type === 'Polygon' ? [g.coordinates]
            : g.type === 'MultiPolygon' ? g.coordinates : [];
  for (const poly of list) {
    // 计算该 polygon 外环 bbox
    let mnx = 180, mny = 90, mxx = -180, mxy = -90;
    for (const [x, y] of poly[0]) {
      if (x < mnx) mnx = x; if (x > mxx) mxx = x;
      if (y < mny) mny = y; if (y > mxy) mxy = y;
    }
    // 与投影区相交才保留
    if (mxx < LON_MIN || mnx > LON_MAX || mxy < LAT_MIN || mny > LAT_MAX) continue;
    polys.push({ poly, bbox: [mnx, mny, mxx, mxy] });
  }
}
console.error(`区域内 polygon 数: ${polys.length}`);

const dots = [];
for (let lat = LAT_MAX; lat >= LAT_MIN; lat -= STEP) {
  for (let lon = LON_MIN; lon <= LON_MAX; lon += STEP) {
    let hit = false;
    for (const { poly, bbox } of polys) {
      if (lon < bbox[0] || lon > bbox[2] || lat < bbox[1] || lat > bbox[3]) continue;
      if (inPolygon(lon, lat, poly)) { hit = true; break; }
    }
    if (hit) {
      const [x, y] = project(lon, lat);
      dots.push([Math.round(x * 10) / 10, Math.round(y * 10) / 10]);
    }
  }
}
console.error(`陆地点阵: ${dots.length} 个 (网格 ${STEP}°)`);

const out = `/* 自动生成，勿手改。源：scripts/geo/gen_dots.js + Natural Earth 110m */
window.QB_MAP_DATA = {
  viewBox: [${W}, ${H}],
  proj: { lonMin: ${LON_MIN}, lonMax: ${LON_MAX}, latMin: ${LAT_MIN}, latMax: ${LAT_MAX} },
  dots: ${JSON.stringify(dots)}
};
`;
const outPath = path.join(__dirname, '..', '..', 'assets', 'js', 'map-data.js');
fs.writeFileSync(outPath, out);
console.error(`已写入 ${outPath} (${(out.length / 1024).toFixed(1)} KB)`);
