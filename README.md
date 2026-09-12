# Zuyao Xu · Personal Homepage

基于 Astro、Svelte 与 shadcn-svelte 的个人学术主页，采用默认 neutral 黑白主题，支持中文 / English、深浅色切换、论文 / 获奖 / 动态切换和简历下载。

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
- `public/resume-zh.pdf`、`public/resume-en.pdf`：公开下载的中英文简历；更新简历后同步替换。

2026-09-12 更新：补充 IMC 2026 录用成果、GhostCite / ATP Poster、CVE-2025-8677、CNVD 证明、XMap 获奖和近期竞赛经历。论文条目标明正式论文、Poster 或预印本状态。

组件采用与原项目 Svelte 4 / Tailwind 3 兼容的 shadcn-svelte 官方分支，保留原有技术栈。首次访问默认为浅色，之后记住用户的主题选择。
