# 秦帛新材料官网

> 官网：[https://www.qinboplastics.com](https://www.qinboplastics.com)

上海秦帛新材料 / 海口秦帛新材料企业官网。项目是纯静态站点，无构建步骤，当前通过 GitHub Actions 增量同步到阿里云 OSS。

## 当前状态

- 站点形态：HTML + CSS + JavaScript，直接由 OSS 静态托管。
- 线上域名：`https://www.qinboplastics.com`
- 主要页面：首页、产品中心、国内外贸易、关于秦帛、联系我们。
- 语言策略：中文和英文为 SEO 重点页面；其他语言由前端 i18n 自动切换。
- 品牌视觉：经典 QB logo，明亮模式使用橙色强调，暗黑模式使用蓝色版 QB logo 与蓝色强调。
- SEO 基础：已包含 `sitemap.xml`、`robots.txt`、canonical、hreflang、Open Graph、结构化数据，以及百度验证文件。

## 主要能力

### 首页

- 首屏包含品牌介绍、产品搜索、热门材料入口和语言切换。
- 内容顺序按栏目组织：产品中心、国内外贸易、合作客户、关于秦帛、联系销售。
- 底部 CTA 直接复用销售名片轮播组件，客户无需再跳转一次才能看到联系方式。

### 产品中心

- 产品按“具体牌号”展示，而不是只按 PP、ABS 等材料大类展示。
- 支持两套筛选口径：
  - 四大材料体系：通用塑料、工程塑料、特种工程塑料、改性塑料。
  - 行业材料族：PP、PE、ABS、POM、PA、PC、PC/ABS、POE、EVA 等。
- 每个产品卡片支持缩略图、原图、供应品牌、应用标签和关键物性信息。
- 列表使用缩略图，降低 OSS 流量和移动端加载压力。

### 国内外贸易

- 沙盘展示双基地、仓储节点、国内合作省份、境外合作区域。
- 合作客户对外展示精选公司，底层数据可保留更完整的区域覆盖信息。
- 仓储节点包含上海、浙江、江苏、海口等业务覆盖点。

### 联系我们

- 销售名片由 `assets/js/main.js` 统一渲染。
- 首页 CTA 和联系页复用同一个名片组件，避免重复维护。
- 电话可直接拨号，微信号可点击复制。

### 多语言

- 语言文件位于 `assets/i18n/<lang>.json`。
- 当前包含 13 种语言：`zh`、`en`、`ja`、`ko`、`ru`、`es`、`ar`、`fr`、`de`、`pt`、`vi`、`id`、`tr`。
- 加载优先级：URL 参数 / 本地选择 / 浏览器语言 / 中文默认。
- 阿拉伯语自动切换 RTL。
- 中英文有独立页面与 SEO 标记，其他语言主要服务前端访问体验。

## 目录结构

```text
qinboplastics/
├── index.html                  # 首页
├── products.html               # 产品中心
├── trade.html                  # 国内外贸易
├── about.html                  # 关于秦帛
├── contact.html                # 联系我们
├── en/                         # 英文 SEO 页面
├── sitemap.xml
├── robots.txt
├── baidu_verify_codeva-KuJZnrnD3y.html
├── assets/
│   ├── css/style.css           # 全站样式、响应式、明亮/暗黑主题
│   ├── js/main.js              # 导航、主题、名片组件、首页交互
│   ├── js/i18n.js              # 多语言加载与自动判断
│   ├── js/products.js          # 产品中心渲染、搜索、筛选、分页
│   ├── js/map.js               # 国内外贸易沙盘
│   ├── data/products.js        # 产品牌号基础数据
│   ├── data/product-grade-props*.js
│   │                           # 产品关键物性数据
│   ├── data/product-brand-images.js
│   │                           # 产品图片映射
│   ├── data/clients.js         # 合作客户与区域覆盖数据
│   ├── i18n/                   # 13 语言 JSON
│   └── img/
│       ├── logo-classic.png
│       ├── logo-classic-blue.png
│       ├── favicon.ico
│       ├── favicon-512.png
│       ├── apple-touch-icon.png
│       └── photos/
│           ├── real/           # 原图、实拍图、站点主视觉
│           └── thumbs/         # 列表缩略图
├── scripts/                    # 批量补 i18n、截图、检查脚本
├── tmp/                        # 调研临时文件，不参与部署
├── DEPLOY.md                   # OSS 部署说明
└── .github/workflows/deploy.yml
```

## 本地预览

```bash
cd /Users/xiamu/Code/qinboplastics
python3 -m http.server 4173
```

浏览器访问：

```text
http://127.0.0.1:4173/
```

## 维护说明

### 修改产品

常用文件：

- `assets/data/products.js`：牌号、分类、品牌、描述、标签。
- `assets/data/product-grade-props.js`、`assets/data/product-grade-props-k26.js`：关键物性信息。
- `assets/data/product-brand-images.js`：牌号或品牌图片映射。
- `assets/img/photos/real/`：原图。
- `assets/img/photos/thumbs/`：列表缩略图。

维护原则：

- 官网对外只展示适合客户阅读的信息，不展示内部调研工具、置信度、数据来源争议等字样。
- 图片无法确认到具体牌号时，优先使用同品牌/同系列料袋图，避免把明显错误型号图放到具体产品上。
- 列表页优先使用缩略图，详情或需要放大时再用原图。

### 修改文案

- HTML 中可直接维护中文基础文案。
- 需要多语言切换的文本必须加 `data-i18n="key"`。
- 新增 key 后同步补齐 `assets/i18n/*.json`。
- 中英文是重点语言，其他语言可保持较稳妥的通用表达。

### 修改主题或 logo

- 主题变量在 `assets/css/style.css` 顶部。
- 主题切换逻辑在 `assets/js/main.js`。
- 明亮模式 logo 使用 `assets/img/logo-classic.png`，暗黑模式 logo 使用 `assets/img/logo-classic-blue.png`；favicon 同步在 `assets/img/favicon.ico`、`assets/img/favicon-512.png`、`assets/img/apple-touch-icon.png`。

### SEO 与站长平台

- Google Search Console、Bing Webmaster Tools、百度搜索资源平台均已完成站点验证。
- sitemap 地址：`https://www.qinboplastics.com/sitemap.xml`
- 百度验证文件：`baidu_verify_codeva-KuJZnrnD3y.html`
- 公司名“秦帛新材料 / Qinbo New Materials”是当前最核心的 SEO 词。
- 产品牌号可作为长尾词补充，但不要为了堆关键词牺牲页面可信度。

## 部署

部署由 `.github/workflows/deploy.yml` 管理。

- push 到 `main` 默认会触发部署到 OSS。
- 手动部署可在 GitHub Actions 中运行 `Deploy to Aliyun OSS`。
- workflow 只上传站点需要的文件：HTML、`assets/`、`en/`、`sitemap.xml`、`robots.txt`、百度验证文件。
- `tmp/`、脚本、README 等维护资料不会被上传到 OSS。

文档类提交如果不希望触发部署，请在 commit message 中加：

```text
[skip ci]
```

例如：

```bash
git commit -m "docs: update README [skip ci]"
```

## 域名与备案

当前站点使用 `.com` 域名和海外 OSS Bucket。没有大陆备案也可以被 Google、Bing、百度收录；备案不是搜索引擎收录的硬性条件。

限制是：未备案域名不能接入中国大陆 CDN，国内访问速度和百度抓取稳定性可能不如备案 + 国内 CDN 的方案。后续如果以国内搜索排名和访问速度为重点，可以再考虑备案、国内 Bucket 和国内 CDN。

## 提交前检查

常用检查命令：

```bash
node --check assets/js/main.js
node --check assets/js/i18n.js
node --check assets/js/products.js
node --check assets/js/map.js
git diff --check
```

前端视觉改动建议至少检查：

- 首页桌面端和手机端。
- 产品中心列表、筛选、详情弹窗。
- 国内外贸易沙盘。
- 联系页名片轮播。
- 明亮/暗黑主题切换。
