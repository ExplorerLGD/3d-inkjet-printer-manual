# 3D Inkjet Printer Manual

这是 3D 喷墨打印机产品使用手册的静态页面原型。

## 打开方式

直接用浏览器打开 `index.html` 即可预览页面，不需要安装依赖或启动服务。

## GitHub Pages

这个仓库可以直接作为 GitHub Pages 静态站点发布：

1. 打开仓库的 `Settings`。
2. 进入 `Pages`。
3. `Build and deployment` 选择 `Deploy from a branch`。
4. `Branch` 选择 `main`，目录选择 `/root`。
5. 保存后访问 GitHub Pages 生成的站点地址。

仓库根目录已包含 `index.html` 和 `.nojekyll`，不需要额外构建步骤。

## 文件结构

- `.nojekyll`：让 GitHub Pages 按静态文件直接发布
- `index.html`：页面结构和手册内容
- `styles.css`：页面样式
- `script.js`：目录高亮、搜索和移动端菜单交互
