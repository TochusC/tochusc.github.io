# Zuyao Xu

基于 Astro、Svelte 与 shadcn-svelte 的个人学术主页，采用默认 neutral 黑白主题，支持中文 / English、深浅色切换、论文 / 获奖 / 动态切换和简历下载。

2026-09-29 界面更新：默认显示英文，右上角通过“文/A”图标切换中文正文；浏览器标签标题和顶部名称统一为 `Zuyao Xu`，Research / Awards / News / Projects 导航和徽章标签始终使用英文。会议、奖项与技术成果徽章及当前导航使用主题色强调（浅色模式为黑底白字，深色模式反转以保持对比）。多会议录用拆分为独立徽章，便于窄屏阅读。

2026-09-29 成果更新：新增 CVE-2026-19668 的中英文成果卡片与动态（BIND 9 DNSSEC 资源耗尽，CVSS 3.1 5.3，中危），附 ISC 官方公告，注明与 Xiang Li 共同报告并获致谢；依据工作区证明记录，将原 CNVD-2025-03948296 更正为 CNNVD-2025-03948296。

2026-09-29 介绍与 IETF 更新：首页加入第一人称中英文简介；新增独立的 IETF 成果区，展示 ATP 个人 Internet-Draft `draft-li-atp-02` 共同作者经历，以及在维也纳参加 IETF 126 Hackathon 的 ATP 互通演示经历。两项成果同步加入 News，并链接至 IETF 官方记录。

## 本地运行

```sh
npm ci
npm run dev
```

## 检查与构建

```sh
npm run check
npx svelte-check --tsconfig ./tsconfig.json
npm run build
npm run preview
```

静态产物位于 `dist/`，站点地址配置为 `https://tochusc.github.io`。

## 内容维护

- `src/lib/data.ts`：教育、论文、获奖、动态与联系方式。
- `src/components/Profile.svelte`：主页结构、技术成果、学生工作及双语介绍。
- `src/styles/global.css`：shadcn 默认黑白主题变量。
- `src/components/ui/`：可编辑的 shadcn-svelte 组件；来源和许可证见 `SHADCN.md` 及目录内许可证。
- `public/resume_zuyao_ch.pdf`、`public/resume_zuyao_en.pdf`：公开下载的中英文简历；页面按所选语言下载对应版本，更新简历后同步替换。

2026-09-12 更新：补充 IMC 2026 录用成果、GhostCite / ATP Poster、CVE-2025-8677、CNVD 证明、XMap 获奖和近期竞赛经历。论文条目标明正式论文、Poster 或预印本状态。

组件采用与原项目 Svelte 4 / Tailwind 3 兼容的 shadcn-svelte 官方分支，保留原有技术栈。首次访问默认为浅色，之后记住用户的主题选择。

2026-10-10 布局更新：沿用原版黑白主题、1600px 三栏比例、头像介绍区、卡片、徽章、图标与标题分割线。取消单屏高度限制、各区域的独立滚动与短窗口压缩，由浏览器进行整页自然滚动。桌面三栏随整页滚动，各栏末尾到达视口底部后停留，较长的栏继续滚动；高度随内容、标签页、语言和窗口大小自动更新，页面始终只有一个滚动区域。Research / Awards / News / Projects 标签页保留，面板高度随内容展开；桌面 IETF 区初始位于右栏顶部，与头像区对齐，手机按原顺序纵向排列。头像使用 `public/portrait-suit-autolevel.png`，完整显示原比例。中英文简历分别对应 `resume_zuyao_ch.pdf` 与 `resume_zuyao_en.pdf`。

开源项目：`src/lib/projects.ts` 维护精选项目、简介与 Star 数量；数字为标注日期的 GitHub API 快照。新增“开源”标签页，项目卡片链接至对应仓库。

## 自定义域名

主站地址为 `https://zuyaoxu.art/`，由 GitHub Pages 托管。仓库 Settings → Pages 的自定义域名设为 `zuyaoxu.art`，发布方式为 GitHub Actions，证书由 GitHub 自动管理；`www.zuyaoxu.art` 配置到同一站点后跳转到主地址。

DNS 建议：根域名使用 GitHub Pages 官方 A 记录（`185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`）或支持的 ALIAS / ANAME；`www` 使用 CNAME 指向 `tochusc.github.io`。目前 DNS 服务商将根域名和 www 均配置为 CNAME 指向 `tochusc.github.io`。

本项目使用自定义 Actions 发布；仓库内的 CNAME 文件不会代替 GitHub Pages 设置中的域名绑定。更新内容后推送 main，由 `.github/workflows/deploy.yml` 构建部署。此前准备的独立服务器部署文件仅保留在本地备用，不参与 GitHub Pages 部署。

## 页面与图文内容

- 首页保留紧凑概览、原有内容标签页和整页滚动。图片仅作静态展示，不提供点击跳转或放大；标题链接至论文或 GitHub 原始来源，PDF、DOI 等链接紧随标题显示。首页采用左图右文的紧凑布局，窄屏自动上下排列。
- 顶部导航为 Home、Research、Projects、Blog。`src/components/SiteHeader.svelte` 统一导航、语言和主题；语言与主题选择在页面之间保留。
- `src/lib/portfolio.ts` 维护论文、项目的稳定路径、双语介绍、分节内容及配图来源。原始论文元数据仍在 `src/lib/data.ts`，项目元数据在 `src/lib/projects.ts`。
- `public/media/research/` 放论文原图；`public/media/projects/` 放公开仓库截图。图片仅作静态展示。论文原图按原比例展示，不修改数据与图例；ATP 使用论文中的正式架构图。
- 论文作者列表仅加粗 Zuyao Xu / 许祖耀，不显示作者贡献或顺位说明。
- `src/pages/sitemap.xml.ts` 自动包含首页、栏目、各详情页和已发布的 Blog 文章。

### 发布 Blog

在 `src/content/blog/` 添加 Markdown 文件。文章支持日期、语言、标签、草稿状态、目录与代码高亮。`writing-guide.md` 是不会发布的写作说明，首页与站点地图也不包含草稿。

```yaml
---
title: "文章标题"
description: "简短摘要"
date: 2026-10-30
lang: zh
tags: [Research, Notes]
draft: true
---
```

正文使用 Markdown。图片放在 `public/media/blog/`，以 `/media/blog/文件名` 引用。准备好后将 `draft` 改为 `false`；运行本地预览检查，再推送 GitHub 发布。中英文文章可分别保存为独立文件。

### 图文列表与组合预览

Research 和 Projects 栏目每行展示一项，桌面左图右文，手机上下排列。`WorkDetail.preview` 指向组合预览；`images` 保留各张原图和来源，预览图片不提供点击交互。首页图片也使用这些预览，采用左图右文布局。GhostCite 使用完整框架图，折线图原图保存在图片素材中；Ollama 使用 Version Turnover（Figure 5）；CAIRN 与 Proof-of-Agentness 均使用 Figure 1。ATP 的新 arXiv 版本合并到原有条目，不重复列出。

`python3 scripts/compose-previews.py` 使用 Pillow 重新生成 `public/media/previews/` 并更新对应元数据。脚本只裁去空白外边缘，按比例放入图框；不裁切坐标轴、图例或截图内容。论文预览选用同一论文中的方法与结果图，ATP 选用 arXiv 论文的架构与结果图。
