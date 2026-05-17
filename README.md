# 3D Inkjet Printer Manual

This repository contains the source files for a MkDocs site using Material for MkDocs.

The Chinese and English sites are built separately:

- `mkdocs.yml` builds `docs/zh` to `site`
- `mkdocs.en.yml` builds `docs/en` to `site/en`

Do not preview the manual by opening this README. Use MkDocs:

```bash
pip install -r requirements.txt
mkdocs serve
```

To preview the English site locally:

```bash
mkdocs serve -f mkdocs.en.yml --dev-addr 127.0.0.1:8001
```

Then open:

```text
http://127.0.0.1:8000/
```

GitHub Pages should be configured with `Build and deployment` set to `GitHub Actions`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes the generated `site/` artifact.
