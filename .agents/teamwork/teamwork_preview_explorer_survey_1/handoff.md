# Handoff Report — Explorer 1: Codebase Reconnaissance & Tech Stack Architecture

## 1. Observation

### 1.1 Tech Stack & Dependencies
- **Runtime & Environment**:
  - Node.js runtime: `v24.14.0` (verified via `node -v`).
  - OS: Windows 11 / Windows PowerShell environment.
- **Framework & Core Libraries** (`package.json:15-37, 38-46`):
  - Framework: **Next.js 14.2.35** (`"next": "^14.2.35"`) utilizing the **App Router** (`app/` directory).
  - React: **18.3.1** (`"react": "^18.3.1"`, `"react-dom": "^18.3.1"`).
  - TypeScript: **5.9.3** (`"typescript": "^5.9.3"`), with path mapping `"@/*": ["./*"]` configured in `tsconfig.json:22`.
  - Styling: **Tailwind CSS 3.4.19** with `@tailwindcss/typography` 0.5.19, PostCSS 8.5.26, and Autoprefixer 10.4.27.
  - Markdown Engine: `gray-matter` (4.0.3), `remark` (15.0.1), `remark-gfm` (4.0.1), `remark-html` (16.0.1).
  - UI, Motion & 3D: `framer-motion` (12.38.0), `three` (0.184.0), `@react-three/fiber` (8.18.0), `@react-three/drei` (9.122.0), `lenis` (1.3.26), `lucide-react` (1.8.0), `canvas-confetti` (1.9.4).
  - Image Optimization: `sharp` (0.35.3), `next/image` with AVIF/WebP enabled in `next.config.js:10`.
  - Analytics & Telemetry: `@vercel/analytics` (2.0.1), custom `components/PageViewTracker.jsx`.
  - Testing / AST Tooling: No test suite (`jest`, `vitest`, `playwright`) or DOM parser (`cheerio`, `jsdom`, `tsx`) is declared in `package.json`. Node.js 24 has native ESM, regex, JSON, and filesystem support.

### 1.2 Build Toolchain & Output Behavior
- Build command: `npm run build` executes `next build`.
- Target output directory: `.next/`.
- In a test build run with existing `.next` cache, webpack cache corruption occurred:
  ```
  <w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT: no such file or directory, stat '...\.next\cache\webpack\client-production\9.pack'
  Error: Cannot find module '...\.next\server\middleware-manifest.json'
  ```
- When cleaned via `powershell -Command "Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue; npm run build"`, the build completed with **Exit code 0**:
  - Prerendered **132 static routes** (74 blog posts, 15 locality pages, service pages, and legal pages).
  - 4 Dynamic API routes: `/api/admin/auth`, `/api/contact`, `/api/indexnow`, `/api/metrics`.
  - First load shared JS size: `87.9 kB`.

### 1.3 Strict Zero-AggregateRating Compliance
- A search using `git grep -i "aggregaterating"` across the repository revealed:
  - Exactly **0 occurrences** in active application source files (`app/`, `components/`, `lib/`, `content/`, `public/`, `scripts/`).
  - Occurrences are exclusively located in prompt instructions, agent skills documentation (`.agents/skills/`), and historic audit documentation (`AUDITORIA-SEO.md`, `CLAUDE.md`, `GEMINI.md`).
  - `AUDITORIA-SEO.md:36`: `"~~AggregateRating~~: Eliminado por completo. Descartado intencionadamente por causar problemas graves de indexación en Google Search Console. Baneo permanente en schemas JSON-LD."`
  - Strict rule `GEMINI.md` mandates zero `AggregateRating` in all structured data.

### 1.4 Architecture & Directory Layout
```
AngelRuizWorld-main/
├── app/                              # Next.js 14 App Router
│   ├── layout.jsx                    # Root Layout: Fonts, global metadata, root JSON-LD schema
│   ├── page.jsx                      # Homepage with Hero, QuickEventSelector, FAQs, local links
│   ├── globals.css                   # Tailwind directives, color tokens, luxury theme
│   ├── deferred.css                  # Non-critical CSS
│   ├── robots.js                     # Dynamic robots.txt with dedicated AI_BOTS rules
│   ├── sitemap.js                    # Dynamic XML sitemap (static, locations, 74 blog posts)
│   ├── manifest.js                   # Web app manifest
│   ├── not-found.jsx                 # Custom 404 page
│   ├── blog/
│   │   ├── page.jsx                  # Blog hub listing (BlogListingClient.jsx)
│   │   ├── [slug]/page.jsx           # Dynamic SSG blog post (generateStaticParams, BlogPosting)
│   │   └── mago-conferenciante-...   # Static post directory
│   ├── empresas/                     # Corporate Hub & sub-services
│   │   ├── page.jsx                  # Corporate services hub
│   │   ├── mago-cenas-empresa-madrid
│   │   ├── mago-conferenciante-madrid
│   │   ├── mago-ferias-congresos-madrid
│   │   ├── mago-para-restaurantes-madrid
│   │   └── mago-team-building-madrid
│   ├── particulares/                 # Private events Hub & sub-services
│   │   ├── page.jsx                  # Private services hub
│   │   ├── bodas/                    # High-conversion wedding landing
│   │   ├── comuniones/
│   │   ├── eventos/
│   │   ├── fiestas-cumpleanos-madrid/
│   │   └── despedidas-soltera-madrid/
│   ├── mago-[localidad]/             # 15 Local SEO landing pages (Alcobendas, Alcorcón, etc.)
│   │   └── page.jsx                  # Renders LocationPageTemplate.jsx
│   ├── contratar-mago-madrid/        # High-intent pricing and format guide
│   ├── sobre-mi/, valoraciones/      # Authority, bio, reviews
│   └── api/                          # Next.js API route handlers
├── components/                       # 34 React Components
│   ├── Navbar.jsx                    # Site navigation with drawer and service links
│   ├── Footer.jsx                    # Site footer with dynamic WhatsApp CTAs & geo links
│   ├── LocationPageTemplate.jsx      # Generic rendering engine for the 15 locality pages
│   ├── BusinessSchema.jsx            # Schema.org structured data component
│   └── HomeClient.jsx, etc.
├── content/blog/                     # 74 Markdown blog articles with YAML frontmatter
├── lib/
│   ├── locations.js                  # 73KB dataset configuring 15 localities (slug, coords, FAQs)
│   ├── blog.js                       # gray-matter + remark parser for blog SSG
│   ├── kvStore.js, tracker.js, utils.ts
├── public/                           # Static assets, images (.webp), 3D assets (.glb)
│   ├── llms.txt                      # Summary for AI search engines (ChatGPT, Perplexity)
│   ├── llms-full.txt                 # Extended knowledge base for LLMs
│   └── AGENTS.md                     # Machine-readable instructions for autonomous web agents
├── scripts/                          # Existing scripts (convert_images.js, seo_optimizer.js, etc.)
└── next.config.js                    # Next.js configuration (redirects, rewrites, headers)
```

### 1.5 Head, Layout & Metadata Architecture
- **Title Templating**:
  - `app/layout.jsx:10` defines:
    ```javascript
    title: {
      default: 'Mago en Madrid | Ángel Ruiz · Bodas y Empresas',
      template: '%s | Ángel Ruiz'
    }
    ```
  - **Critical Rule for Individual Pages**: Pages must either:
    1. Provide a title WITHOUT `| Ángel Ruiz` if using template inheritance, OR
    2. Use `title: { absolute: '...' }` to bypass the template and avoid redundant brand repetition (e.g. `app/empresas/page.jsx:14`: `title: { absolute: 'Mago para Empresas en Madrid ➜ Cenas y Eventos' }`).
- **Structured Data (JSON-LD)**:
  - Injected directly into pages using `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }} />`.
  - Root Layout (`app/layout.jsx:93-330`) embeds global schemas:
    - `@type: ["EntertainmentBusiness", "ProfessionalService"]` (id: `#organization`) with address, geo coords (Torrelodones), phone, areaServed, hasOfferCatalog (services and prices: 300€-750€).
    - `@type: "WebSite"` (id: `#website`).
    - `@type: "Person"` (id: `#person`) with alumniOf (Dani DaOrtiz), knowsAbout.
    - `@type: "ItemList"` (id: `#site-navigation`) with SiteNavigationElement.
  - Page-specific schemas:
    - `app/blog/[slug]/page.jsx`: `@type: "BlogPosting"`, `@type: "FAQPage"`, `@type: "BreadcrumbList"`.
    - `app/empresas/page.jsx`: `@type: "Service"`, `@type: "FAQPage"`.
    - Localities (`LocationPageTemplate.jsx`): Localized `EntertainmentBusiness` / `ProfessionalService`.

### 1.6 Existing AI & GEO Engine Integrations
- `app/robots.js` allows full crawling to 16 AI engines:
  `'GPTBot'`, `'OAI-SearchBot'`, `'ChatGPT-User'`, `'ClaudeBot'`, `'Claude-Web'`, `'anthropic-ai'`, `'PerplexityBot'`, `'Perplexity-User'`, `'Google-Extended'`, `'Applebot-Extended'`, `'meta-externalagent'`, `'CCBot'`, `'cohere-ai'`, `'YouBot'`, `'DuckAssistBot'`.
- `public/llms.txt` and `public/llms-full.txt` are served and linked via `<link rel="alternate" type="text/markdown" href="/llms.txt" />` in `app/layout.jsx:339-341`.

---

## 2. Logic Chain

1. **Step 1: Identifying Framework Constraints**
   - Direct observation of `package.json` and directory structure demonstrates this is a **Next.js 14 App Router** application with SSG static rendering for 132 routes.
   - Any script or automation must interact with Next.js conventions: page files must be `page.jsx` or `layout.jsx`, metadata must be exported as `export const metadata = { ... }`, and static generation functions must use `generateStaticParams()`.

2. **Step 2: Determining How Pages and Content Are Rendered**
   - The site contains two main content modalities:
     - **Programmatic Markdown Posts** (`content/blog/*.md`): 74 files read by `lib/blog.js` using `gray-matter` and `remark`. Metadata changes or new content clusters can be added/edited directly in Markdown frontmatter and body.
     - **Programmatic Localities** (`lib/locations.js`): 15 municipalities configured in an array of objects rendered through `components/LocationPageTemplate.jsx`. Adding or improving local SEO content can be executed cleanly by modifying `lib/locations.js`.
     - **Hardcoded Landing Pages** (`app/empresas/page.jsx`, `app/particulares/bodas/page.jsx`, etc.): React JSX components with structured Tailwind CSS.

3. **Step 3: Determining Safety & Style Preservation Guardrails**
   - The project uses Tailwind CSS v3 with a bespoke luxury dark-gold design (`bg-surface-0`, `text-gold-50`, `font-[Cinzel]`, `text-[#d4a853]`).
   - Any content or metadata change must NOT touch CSS styling classes unless strictly following the existing palette.
   - To avoid visual regressions, modifications should focus on:
     1. Metadata (`metadata.title`, `metadata.description`, `metadata.keywords`, `metadata.openGraph`).
     2. JSON-LD structured schemas (`FAQPage`, `Service`, `BreadcrumbList`, `SpeakableSpecification`).
     3. Copywriting within existing semantic HTML tags (`<p>`, `<h2>`, `<details>/<summary>` FAQs).
     4. High-conversion anchor texts and internal cross-linking.
     5. Public AI artifacts (`public/llms.txt`, `public/llms-full.txt`).

4. **Step 4: Build Stability & Verification Pipeline**
   - Observation 1.2 confirmed that `npm run build` succeeds cleanly (exit code 0) when `.next` cache is cleared or rebuilt.
   - Therefore, the orchestrator script (`scripts/seo-geo-pipeline.js`) must:
     - Automatically verify 0 occurrences of `AggregateRating` via regex scan across `.js`, `.jsx`, `.md`, `.json`.
     - Execute a clean build validation (`npx rimraf .next` or clean build before `npm run build`) to guarantee 100% test passing.

---

## 3. Caveats

- **External Packages**: The project does not currently include CLI utility packages such as `commander`, `chalk`, `cheerio`, or `inquirer` in `package.json`. The pipeline orchestrator can be written using pure modern Node.js 24 standard libraries (`node:fs`, `node:path`, `node:child_process`, `node:readline`) and existing project dependencies (`gray-matter`).
- **Dynamic API Routes**: The 4 API routes (`/api/...`) rely on server runtime or environment variables (`.env.local`). Static build does not execute these APIs; it compiles them without error.
- **Windows File System Locking**: Next.js builds on Windows occasionally conflict with webpack pack-cache files if interrupted. Deleting or ensuring clean `.next` directory creation prevents this.

---

## 4. Conclusion

The repository is a mature, highly optimized **Next.js 14 App Router** website with a fast static compilation pipeline (132 static pages generated in ~40 seconds).

Key operational parameters for the 3-agent SEO/GEO optimization pipeline:
1. **Target modification surfaces**:
   - `content/blog/*.md` (74 posts): Frontmatter SEO fields, FAQ schemas, body internal links.
   - `lib/locations.js` (15 localities): Localized search queries, FAQs, and semantic keywords.
   - `app/layout.jsx` & specific landing pages (`app/empresas/`, `app/particulares/`): Head metadata and JSON-LD schemas.
   - `public/llms.txt` and `public/llms-full.txt`: Generative AI engine discovery files.
2. **Strict Guardrail**: Zero `AggregateRating` anywhere.
3. **Verification Command**:
   - Regex scan: `git grep -i "aggregaterating"` must return 0 results in source files.
   - Clean build: `npm run build` must exit with code 0.

---

## 5. Verification Method

To independently verify the observations and conclusions in this report:

1. **Verify Node version**:
   ```powershell
   node -v
   # Expects: v24.14.0 or >= 18.17.0
   ```
2. **Verify Zero AggregateRating in codebase**:
   ```powershell
   git grep -i "aggregaterating" -- app/ components/ lib/ content/ public/ scripts/
   # Expects: 0 lines returned
   ```
3. **Verify Clean Build**:
   ```powershell
   powershell -Command "Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue; npm run build"
   # Expects: Exit code 0, 132/132 static pages generated
   ```
4. **Inspect Route Count & Dynamic Manifest**:
   Check `.next/routes-manifest.json` after build to confirm 132 prerendered static pages and 4 API endpoints.
