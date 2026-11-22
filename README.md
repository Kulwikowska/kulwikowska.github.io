# MF Crystal Care

Landing page for MF Crystal Care – Home Service (cleaning and Hungarian home food) in Fuengirola, Benalmádena and Mijas.
Live: https://crystalcare.es/

Next.js 15 (static export), TypeScript. Languages: ES / EN / HU.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Update content

- Dish of the day, phone, areas, gallery list: `src/content/site.ts`
- Texts per language: `src/i18n/es.ts`, `en.ts`, `hu.ts`

## Photos

Put originals in `raw/gallery/` (collage `<id>.jpg` or `<id>-before.jpg` + `<id>-after.jpg`) or `raw/food/`, then:

```bash
npm run images     # writes optimised WebP files to public/
```

`raw/` is not committed.

## Deploy

Every push to `main` builds and publishes to GitHub Pages (`.github/workflows/deploy.yml`).
