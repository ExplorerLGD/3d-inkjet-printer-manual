# 3D Inkjet Printer Manual

这是 3D 喷墨打印机产品使用手册。当前页面保留“概述”入口，使用 MkDocs 和 Material for MkDocs 构建。

语言版本采用独立 Markdown 页面：

- `docs/index.md`：中文版本
- `docs/en/index.md`：English version

## 打开方式

直接用浏览器打开 `index.html` 即可预览页面，不需要安装依赖或启动服务。

## GitHub Pages

这个仓库使用 GitHub Actions 构建并发布到 GitHub Pages：

1. 打开仓库的 `Settings`。
2. 进入 `Pages`。
3. `Build and deployment` 选择 `GitHub Actions`。
4. 提交并推送到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并发布站点。

本地预览：

```bash
pip install -r requirements.txt
mkdocs serve
```

如果仓库名不是 `3d-inkjet-printer-manual`，需要同步修改 `mkdocs.yml` 里的 `extra.alternate.link` 路径。

## 文件结构

- `mkdocs.yml`：MkDocs 和 Material 主题配置
- `docs/index.md`：中文概述页
- `docs/en/index.md`：英文概述页
- `requirements.txt`：构建依赖
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署工作流
