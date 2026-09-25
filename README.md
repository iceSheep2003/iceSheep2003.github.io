# ice.Sheep's Blog

基于 Astro 与 Yukina 构建的个人博客和开发者档案，部署于 GitHub Pages。

## 本地开发

```bash
pnpm install
pnpm dev
```

文章位于 `src/contents/posts/`，个人档案内容位于 `src/data/profile.ts`。

## 检查与构建

```bash
pnpm astro check
pnpm build
```

推送到 `main` 后，GitHub Actions 会自动构建并部署站点。

## 致谢

站点主题基于 [Yukina](https://github.com/WhitePaper233/yukina)，遵循其 MIT 许可协议。
