# AGENTS.md

使用中文回复。

## 文档同步规则

本仓库使用 MkDocs 和 Material for MkDocs 构建中英文产品手册。

中文文档位于：

- `docs/zh/`

英文文档位于：

- `docs/en/`

当用户修改任一语言文档，并要求同步另一种语言时，必须执行双向同步：

- 修改中文文档后，同步更新对应英文文档。
- 修改英文文档后，同步更新对应中文文档。

路径应保持一一对应：

- `docs/zh/index.md` <-> `docs/en/index.md`
- `docs/zh/installation/sd-card.md` <-> `docs/en/installation/sd-card.md`
- 后续新增页面也应按相同目录结构同步。

同步时需要遵守：

1. 保留 Markdown 结构，包括标题层级、列表、表格、代码块、引用和 admonition。
2. 不翻译代码块中的代码、命令、配置字段、文件名和路径。
3. 产品名、软件名、协议名和专有名词应保持准确一致。
4. 若新增或删除页面，需要同步检查并更新 `mkdocs.yml` 和 `mkdocs.en.yml` 的导航。
5. 同步完成后运行构建检查：

```bash
python -m mkdocs build --strict
python -m mkdocs build --strict -f mkdocs.en.yml
```

如构建失败，需要先修复文档或配置问题。
