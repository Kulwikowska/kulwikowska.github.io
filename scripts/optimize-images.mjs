// Turns raw photos into small WebP files for the site.
//
// raw/gallery/<id>.<ext>            a before/after collage -> split in half (see SPLIT below)
// raw/gallery/<id>-before.<ext>     or separate before/after photos
// raw/gallery/<id>-after.<ext>
// raw/food/<name>.<ext>             dish photos -> public/food/<name>.webp
//
// Usage: npm run images

import fs from 'node:fs/promises'
import path from 'node:path'

import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const RAW = path.join(ROOT, 'raw')
const OUT = path.join(ROOT, 'public')
const EXT = /\.(jpe?g|png|webp|heic|heif|tiff?)$/i

// How each collage is laid out: 'h' = before left / after right, 'v' = before top / after bottom.
const SPLIT = { bedroom: 'h', living: 'v', kitchen: 'h', kitchen2: 'h' }
const WIDTH = { living: 1600 }
const DEFAULT_WIDTH = 1100

async function files(dir) {
  try {
    return (await fs.readdir(dir)).filter((f) => EXT.test(f))
  } catch {
    return []
  }
}

// Trim the white collage gutters/borders around a half.
async function trimmed(input) {
  const buf = await sharp(input).rotate().toBuffer()
  try {
    return await sharp(buf).trim({ background: '#ffffff', threshold: 30 }).toBuffer()
  } catch {
    return buf
  }
}

async function save(input, outFile, width) {
  await fs.mkdir(path.dirname(outFile), { recursive: true })
  await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(outFile)
  const { size } = await fs.stat(outFile)
  console.log(`  ${path.relative(ROOT, outFile)}  ${(size / 1024).toFixed(0)} KB`)
}

async function gallery() {
  const dir = path.join(RAW, 'gallery')
  for (const f of await files(dir)) {
    const name = f.replace(EXT, '')
    const src = path.join(dir, f)
    const m = name.match(/^(.*)-(before|after)$/)
    if (m) {
      const [, id, side] = m
      await save(await trimmed(src), path.join(OUT, 'gallery', `${id}-${side}.webp`), WIDTH[id] ?? DEFAULT_WIDTH)
      continue
    }
    const split = SPLIT[name]
    if (!split) {
      console.warn(`  skipped ${f}: add it to SPLIT or name it <id>-before / <id>-after`)
      continue
    }
    const img = sharp(src).rotate()
    const { width, height } = await img.metadata()
    const half = split === 'h' ? { width: Math.floor(width / 2), height } : { width, height: Math.floor(height / 2) }
    const parts = {
      before: { left: 0, top: 0, ...half },
      after: split === 'h' ? { left: width - half.width, top: 0, ...half } : { left: 0, top: height - half.height, ...half },
    }
    for (const [side, region] of Object.entries(parts)) {
      const piece = await sharp(src).rotate().extract(region).toBuffer()
      await save(await trimmed(piece), path.join(OUT, 'gallery', `${name}-${side}.webp`), WIDTH[name] ?? DEFAULT_WIDTH)
    }
  }
}

async function food() {
  const dir = path.join(RAW, 'food')
  for (const f of await files(dir)) {
    await save(path.join(dir, f), path.join(OUT, 'food', f.replace(EXT, '.webp')), 1200)
  }
}

// Social preview image (WhatsApp / Facebook link preview).
async function ogImage() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#FCFDFE"/>
  <circle cx="930" cy="315" r="250" fill="#EAF4FB"/>
  <g transform="translate(730 150) scale(2)">
    <path d="M38 78 100 26l62 52" fill="none" stroke="#24407F" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M124 46V30h12v26" fill="#24407F"/>
    <g fill="#24407F"><rect x="92" y="46" width="7" height="7" rx="1"/><rect x="101" y="46" width="7" height="7" rx="1"/><rect x="92" y="55" width="7" height="7" rx="1"/><rect x="101" y="55" width="7" height="7" rx="1"/></g>
    <path d="M34 128C14 104 26 76 52 66 34 82 32 106 50 124Z" fill="#E04A7F"/>
    <path d="M46 132C34 112 42 92 60 84 48 98 50 116 62 128Z" fill="#7FB8E4"/>
    <text x="104" y="128" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="60" fill="#24407F">MF</text>
    <path d="M170 52c-6-12-24-6-16 8l16 14 16-14c8-14-10-20-16-8Z" fill="#E04A7F" transform="rotate(12 170 60)"/>
  </g>
  <text x="80" y="250" font-family="Georgia, serif" font-style="italic" font-size="84" fill="#E04A7F">Crystal Care</text>
  <text x="84" y="300" font-family="Arial, sans-serif" font-weight="700" font-size="26" letter-spacing="8" fill="#24407F">HOME SERVICE</text>
  <text x="84" y="390" font-family="Arial, sans-serif" font-size="34" fill="#1F2A44">Limpieza · Cleaning · Takarítás</text>
  <text x="84" y="440" font-family="Arial, sans-serif" font-size="34" fill="#8E1F24">Comida casera húngara</text>
  <text x="84" y="530" font-family="Arial, sans-serif" font-weight="700" font-size="30" fill="#1FAF55">WhatsApp +34 634 810 162</text>
</svg>`
  const out = path.join(OUT, 'og.jpg')
  await sharp(Buffer.from(svg)).jpeg({ quality: 85 }).toFile(out)
  console.log(`  ${path.relative(ROOT, out)}`)
}

console.log('Optimising images…')
await gallery()
await food()
await ogImage()
console.log('Done.')
