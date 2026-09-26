# irenaposlusna.cz

Osobní web finanční poradkyně Ireny Poslušné. Statický web v Astro, hostovaný zdarma na GitHub Pages.

## Kde co je

| Co | Soubor |
|---|---|
| Kontakty, adresa, ČNB, IČO, Formspree, odkaz na recenze | `src/data/site.ts` |
| Časté otázky (FAQ) | `src/data/site.ts` (pole `faq`) |
| Texty stránek | `src/pages/*.astro` |
| Články na blog | `src/content/blog/*.md` (nový článek = nový soubor) |
| Barvy, písma, vzhled | `src/styles/global.css` |
| Fotky | `public/img/` (originály v `src-assets/`, mimo git) |
| Hlavička, patička, CTA blok, kroky | `src/components/` |

## Vývoj

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # výstup do dist/
```

Nasazení: `npm run deploy` sestaví web a nahraje složku `dist/` do větve `gh-pages`, ze které GitHub Pages servíruje web (náhled https://konias12479.github.io, po připojení domény https://irenaposlusna.cz). Zdrojové soubory jsou ve větvi `main` (po změně: `git add -A && git commit -m "..." && git push`). GitHub Actions nepoužíváme, přihlášení GitHub CLI nemá oprávnění `workflow`.

## Před spuštěním na doméně doplnit v `src/data/site.ts`

- `cnbNumber` – evidenční číslo v registru ČNB (od eDO compliance)
- `ico` – IČO Ireny
- `formspreeId` – po založení účtu na formspree.io (bez něj formulář otevře e-mailového klienta)
- `reviewsUrl` – odkaz na Google recenze po založení Firemního profilu

A nechat compliance eDO schválit: stránky `/pravni-informace/`, `/ochrana-osobnich-udaju/`, sekci „Jak jsem placená" na úvodu a FAQ.

## Nasazení domény

1. Vytvořit soubor `public/CNAME` s obsahem `irenaposlusna.cz` a spustit `npm run deploy`. V repozitáři na GitHubu: Settings → Pages → Custom domain `irenaposlusna.cz`, zaškrtnout Enforce HTTPS.
2. U registrátora domény nastavit DNS:
   - `A` záznamy pro `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` pro `www` → `<github-user>.github.io`
3. Po propagaci (do 24 h) ověřit https://irenaposlusna.cz.
4. Ve Webnode nastavit přesměrování staré subdomény, nebo ji vypnout.
5. Google Search Console: přidat doménu, odeslat `https://irenaposlusna.cz/sitemap-index.xml`.

## Analytika

Web záměrně nemá cookies ani Google Analytics (bez souhlasové lišty). Pro měření návštěvnosti bez cookies lze později přidat Cloudflare Web Analytics nebo Plausible.

## Poznámky k obsahu

- Články na blogu jsou návrhy k odsouhlasení Irenou, před zveřejněním zkontrolovat fakta (částky, lhůty).
- Formulace „tisícům klientů" ponechána na přání Petra (26. 9. 2026).
- Slovo „nezávislá" se na webu záměrně nepoužívá (vázaná zástupkyně).
