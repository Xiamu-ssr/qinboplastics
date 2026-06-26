# 秦帛塑料 (qinboplastics) — Agent Handoff

> 写给未来任何接手的 agent（Codex / Claude Code / 别的）。这份文档是从 2026-06-14 那个 91MB 长 session + 6/22 "梳理项目" session 反推出来的"意志"，目的是让你不用再翻历史就能直接续上。

## 这是什么项目

上海/海口 **秦帛新材料** 的塑料原材料 B2B 官网：

- 域名 `qinboplastics.com`（.com 海外站，未备案）
- **业务**：PP / PE / ABS / POM / PA / PC / POE / EVA 等通用/工程/特种工程/改性塑料，按 **具体牌号**（R370Y、PP 4220、CYCOLOY C6600 这种）展示和销售，不是按大类
- **栈**：**纯 HTML/CSS/JS，无构建步骤**，GitHub Actions 增量同步到阿里云 OSS
- **页面**：首页 / 产品中心 / 国内外贸易 / 关于秦帛 / 联系我们（+ `en/` 英文镜像 5 个页面）
- **多语言**：13 种（zh/en/ja/ko/ru/es/ar/fr/de/pt/vi/id/tr），阿语自动 RTL，**中英文是 SEO 重点页**，其他语言偏体验
- **视觉**：明亮 / 暗黑双主题。明亮 = 经典 QB logo（橙色 + 蓝），暗黑 = 蓝色 QB logo。logo 是 `qb` 两字母的合体（从 `/Users/xiamu/Desktop/秦帛/公司经典logo.jpg` 反推的）
- **特色页**：
  - 国内外贸易：世界地图沙盘（点阵 → 国家轮廓，45 国逐个点亮）+ 52 家真实客户三行弹幕墙
  - 联系我们：真·横版销售名片，5 位业务员，自动无缝滚动
  - 关于秦帛：基于公司手册，8 仓物流 + 理念 + 资质 + 经销品牌

## 关键事实源（不要乱改）

| 数据 | 来源 |
|---|---|
| 仓库地图 8 仓数据 | `/Users/xiamu/Desktop/秦帛/历史合作客户`（只取国家和省份/直辖市） |
| 合作客户列表 | 优先捞 **知名生产商/工厂**；和秦帛一样的经销商 **不放**；tavily 调研：`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` |
| 产品图片 | 参考 `https://mall.21cp.com`（中塑在线），用浏览器插件 chrome:control-chrome 拿，不爬虫 |
| 产品物性表 | `assets/js/product-grade-props.js` + `...-k26.js`（这两个加了 ~4000 行物性数据） |
| Logo 设计 | `/Users/xiamu/Desktop/秦帛/公司经典logo.jpg`（业务员发来的，1:1 复原） |
| 客户真实数据 | 区分"国家 + 省份/直辖市"，不要伪造销售数据 |

## SEO 现状（你接手时这里的痛点）

- 已做：sitemap、robots、canonical、hreflang、Open Graph、JSON-LD Organization、英文独立页、**Google/Bing/百度三平台已验证**
- **问题**：到现在（2026-06-26）**谷歌搜"秦帛"仍搜不到**（图片能搜到），Bing/百度也搜不到
- 已知短板：**未备案，国内访问慢**，README 里写了
- 业务员说法：长尾词太宽泛、提交已 2 周还没索引——可能要主动 ping / 检查 robots / 提交 sitemap 二次

## 用户在历史 session 里反复强调的"约束"

1. **产品不是 PP，而是 R370Y**——产品中心是按 **具体牌号** 分的，不是按塑料大类。下面还有一层（料号层级）。当时参考 `mall.21cp.com` 一个具体牌号详情页 `699574399287930880.html`。
2. **首页"6 个大类"和"产品中心 4 大类"冲突**——按"栏目顺序"铺首页区块；首页 = 其他栏目的精简合集，国内外贸易的沙盘+客户动效要复制一份到首页。
3. **栏目顺序**：首页 / 产品中心 / 国内外贸易 / 关于秦帛 / 联系我们（"关于秦帛"是改名后的）。
4. **沙盘粗糙 + 无 hover**：要做精细世界地图 + 国家 hover 高亮。
5. **合作客户**：只放 **生产商/工厂**；**经销商不放**。
6. **手机端适配差**（业务员反馈）：首页搜索框和语言选择被压扁/超出边界；产品中心每条数据溢出移动端——要一页一页看。
7. **首页底部"联系销售部"区块**：直接复用 **联系我们页的轮播名片组件**，代码复用更优雅。
8. **数据可信度**：
   - 产品图片是否对应型号、资料口径可信度多少 → 写到代码/数据里，**不要显示在网站**
   - 物性表不完整可能是 Kimi Code 填错了 → 接手时要核对
9. **主题色**：
   - 明亮 = logo 经典色（橙 + 蓝），但橘色太亮，取 logo 色和原主题色的中间值
   - 暗黑 = 沿用以前的蓝色，**logo 也保持不变**（暗黑模式不要换 logo）

## 工程约定（commit message 风格）

```
<type>(scope): 中文一句话

type: feat / fix / polish / style / docs / i18n / refactor
scope: products / trade / about / contact / i18n / theme / deploy
```

示例（看历史 commit 就懂）：
- `feat(products): 产品卡片牌号前置`
- `feat(trade): 沙盘改造 — 国家轮廓填充地图(45国)`
- `docs: update README [skip ci]`（README 走 `[skip ci]`，不触发部署）
- `style: refine theme colors and logos`

## 部署

GitHub Actions → 阿里云 OSS 海外 bucket → 静态托管。**README 改动用 `[skip ci]` 标签**。其他 push 自动同步。

## 接手时先看这几个文件

- `README.md` — 项目门面
- `assets/js/products.js` + `product-grade-props.js` + `product-grade-props-k26.js` — 产品数据
- `assets/js/clients.js` — 客户数据
- `assets/js/map-data.js` — 沙盘数据（36.6KB，45 国）
- `assets/i18n/*.json` — 13 语言字典
- `.github/workflows/` — 部署流
- `index.html` / `products.html` / `trade.html` / `about.html` / `contact.html` + `en/*`

## 用户的工作风格（你可能想知道的）

- 中文交流，技术问题会直接说"为什么要这么做"——会被挑战
- 喜欢"反问 → 让 agent 自己找 → 改"的节奏
- 视觉敏感：颜色稍微发暗 / logo 不对 / 移动端溢出都能看出来
- 会主动发公司素材（logo/历史客户/手册）放在 `/Users/xiamu/Desktop/秦帛/`，按那里为准
- 会用浏览器插件（`chrome:control-chrome`）让 agent 看真实页面（in-app browser `http://127.0.0.1:4173/`）
- 接受不了"我看不到就放弃"——上次 agent 一上来就"我没有跨 session 记忆"被驳回了
- 重视交付：每个改动要能跑能看，做完会自己验证再合
