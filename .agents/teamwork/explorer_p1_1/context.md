# Explorer P1-1 Task Assignment

Working Directory: `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\.agents\teamwork\explorer_p1_1`

Target Tasks:
1. **FICHA-GEO-01 (`app/robots.js`)**:
   - Inspect AI crawlers in `app/robots.js`.
   - Verify addition of `GoogleOther`, `Amazonbot`, `FacebookBot`, `Diffbot`.
   - Verify addition of `'/panel'` to `disallow: ['/admin', '/api', '/panel']`.
2. **FICHA-GEO-02 (`public/llms.txt` & `public/.well-known/llms.txt`)**:
   - Inspect both files and compare differences.
   - Verify inclusion of `https://angelruiz.world/empresas/mago-cenas-empresa-madrid`, `https://angelruiz.world/contacto`, and Key Facts table.
   - Verify blockquote header length < 200 chars.
   - Formulate unified content ensuring both files match 100%.
3. **FICHA-SEO-04 (`app/sitemap.js`)**:
   - Inspect line 61. Check `/particulares` (which has 307 redirect).
   - Formulate replacement with `/contacto` (priority 0.75, image `/images/foto-bio.webp`).
   - Verify clean build and sitemap generation.

Write findings to `analysis.md` and complete `handoff.md`.
