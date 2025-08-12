# Finansguiden.se

Byggt och förvaltat av Value Unlimited.

## Teknisk översikt
- Vite + React + TypeScript
- Tailwind CSS + shadcn-ui

## Utveckling lokalt
1. Installera Node.js (LTS)
2. Installera beroenden: `npm i`
3. Starta dev-server: `npm run dev` (standardport 8080)

## Bygg & deploy
- Bygg: `npm run build`
- Statiska filer serveras från `public/`
- SPA-fallback hanteras via `public/.htaccess`
- SEO-filer genereras av `scripts/generate-seo-files.mjs`

## Kontakt
hej@finansguiden.se

