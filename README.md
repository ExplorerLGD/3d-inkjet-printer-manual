# 3D Inkjet Printer Manual

This repository contains the source files for a MkDocs site using Material for MkDocs.

Do not preview the manual by opening this README. Use MkDocs:

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open:

```text
http://127.0.0.1:8000/
```

GitHub Pages should be configured with `Build and deployment` set to `GitHub Actions`. The workflow in `.github/workflows/deploy.yml` builds the site and publishes the generated `site/` artifact.
