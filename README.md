# 3D Inkjet Printer Manual

这是一个基于 MkDocs 的用户手册网站仓库。

## 已完成初始化

- 添加 `mkdocs.yml` 项目配置
- 创建 `docs/` 文档目录和首页
- 增加 GitHub Actions 自动部署到 `gh-pages`

## 本地预览

```bash
pip install mkdocs
mkdocs serve
```

打开浏览器访问 `http://127.0.0.1:8000` 查看本地预览。

## 发布部署

将内容推送到 `main` 分支后，GitHub Actions 会自动构建并发布到 `gh-pages` 分支。

若要手动构建：

```bash
mkdocs build
```
