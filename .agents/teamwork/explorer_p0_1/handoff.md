# Handoff Report: Explorer P0-1 (FICHA-CRO-01)

## 1. Observation
- Command: `grep_search(Query="680650993")` executed across the entire repository `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main`.
  - Result:
    - `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\app\empresas\page.jsx` at line 266:
      ```jsx
      href="https://wa.me/34680650993?text=Hola%20Ángel,%20solicitamos%20presupuesto%20para%20un%20evento%20de%20empresa"
      ```
    - `c:\Users\angel\Desktop\ANGEL RUIZ WORLD\AngelRuizWorld-main\app\particulares\bodas\page.jsx` at line 225:
      ```jsx
      href="https://wa.me/34680650993?text=Hola%20Ángel,%20queremos%20consultar%20disponibilidad%20para%20nuestra%20boda"
      ```
- Command: `grep_search(Query="680")` and `grep_search(Query="650993")` across the repository.
  - Matches for `680`:
    - `skills-lock.json` lines 212 & 344 (sha256 hash strings).
    - `public/logos/chatgpt.svg` line 1 (SVG coordinate `6.6802`).
    - `public/marinagodar/index.backup-v1.html` line 153 (`height:clamp(380px,75vh,680px)`).
    - `app/empresas/page.jsx:266` (phone number).
    - `app/particulares/bodas/page.jsx:225` (phone number).
  - No other matches found.
- Manual inspection of candidate files from dispatch instructions:
  - `app/contacto/page.jsx`: Line 66 contains `"telephone": "+34648055636"`. Delegates visual card to `DigitalCard.jsx`.
  - `app/contacto/DigitalCard.jsx`: Line 180 contains `href="https://wa.me/34648055636"` and line 191 contains `648 055 636`.
  - `app/api/vcard/route.js`: Line 11 contains `'TEL;TYPE=CELL,VOICE,pref:+34648055636'`.
  - `app/mago-close-up-madrid/page.jsx`: Line 117 contains `"telephone": "+34648055636"` and line 181 contains `"telephone": "+34648055636"`. Contact button invokes `ContactButtonClient` -> `ContactFormModal` (`components/Modals.jsx:183`), which links to `https://wa.me/34648055636`.
  - `components/WhatsAppButton.jsx`, `components/Navbar.jsx`, `components/Footer.jsx`, `components/MobileBookingDrawer.jsx`, `components/LiquidGlassForm.jsx`, `components/CorporateInlineForm.jsx`, `components/ChristmasUrgencyBanner.jsx`: All point directly to `https://wa.me/34648055636`.
  - `public/llms.txt:3`, `public/llms-full.txt:14`, `public/AGENTS.md:49`: All state `+34 648 055 636` / `https://wa.me/34648055636`.

## 2. Logic Chain
1. Step 1: The user request and backlog `FICHA-CRO-01` state that the secondary WhatsApp number `34680650993` is leaking high-value leads and must be replaced by the official number `34648055636`.
2. Step 2: Global ripgrep search for `680650993`, `650993`, and `680` demonstrates that only two files in the codebase have this phone number: `app/empresas/page.jsx` (line 266) and `app/particulares/bodas/page.jsx` (line 225).
3. Step 3: Detailed inspection of `app/contacto/page.jsx`, `DigitalCard.jsx`, `app/mago-close-up-madrid/page.jsx`, `app/api/vcard/route.js`, and all global contact components demonstrates that they are already properly configured with `34648055636`.
4. Step 4: Consequently, modifying only `app/empresas/page.jsx:266` and `app/particulares/bodas/page.jsx:225` achieves 100% eradication of `34680650993` and unifies WhatsApp links across the entire project.

## 3. Caveats
- No caveats. The investigation was exhaustive across all source files, schemas, and public assets in the repository.

## 4. Conclusion
To complete `FICHA-CRO-01`, the executor must apply the following two single-line replacements:

1. `app/empresas/page.jsx`:
   Line 266:
   Replace:
   ```jsx
   href="https://wa.me/34680650993?text=Hola%20Ángel,%20solicitamos%20presupuesto%20para%20un%20evento%20de%20empresa"
   ```
   With:
   ```jsx
   href="https://wa.me/34648055636?text=Hola%20Ángel,%20solicitamos%20presupuesto%20para%20un%20evento%20de%20empresa"
   ```

2. `app/particulares/bodas/page.jsx`:
   Line 225:
   Replace:
   ```jsx
   href="https://wa.me/34680650993?text=Hola%20Ángel,%20queremos%20consultar%20disponibilidad%20para%20nuestra%20boda"
   ```
   With:
   ```jsx
   href="https://wa.me/34648055636?text=Hola%20Ángel,%20queremos%20consultar%20disponibilidad%20para%20nuestra%20boda"
   ```

## 5. Verification Method
1. Independent verification command:
   ```powershell
   git grep -n "680650993"
   ```
   Expected result: 0 occurrences found across the repository.
2. Verify target lines post-replacement:
   - `git grep -n "34648055636" app/empresas/page.jsx` -> line 266 is present.
   - `git grep -n "34648055636" app/particulares/bodas/page.jsx` -> line 225 is present.
3. Build check:
   ```powershell
   npm run build
   ```
   Expected result: Exit code 0, 140 static routes generated cleanly.
