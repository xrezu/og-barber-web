/**
 * One-shot image compression script using sharp.
 * Overwrites public/images/ with web-optimised versions.
 * Run: node scripts/compress-images.mjs
 */
import sharp from '../node_modules/sharp/lib/index.js'
import { readdir } from 'fs/promises'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMG_DIR = join(__dirname, '../public/images')

const CONFIGS = {
  // Hero background — large but critical LCP
  'sillafoco.jpeg':      { width: 1920, quality: 82 },
  // Services sticky — tall column, desktop only
  'sofaespera.jpeg':     { width: 1600, quality: 80 },
  // Gallery & About — thumbnail/section images
  default:               { width: 1280, quality: 78 },
}

const files = await readdir(IMG_DIR)
const jpgs  = files.filter(f => /\.(jpg|jpeg)$/i.test(f))

console.log(`Compressing ${jpgs.length} images...\n`)

for (const file of jpgs) {
  const src = join(IMG_DIR, file)
  const cfg = CONFIGS[file] ?? CONFIGS.default

  const before = (await import('fs')).statSync(src).size
  const tmp    = src + '.tmp'

  await sharp(src)
    .resize({ width: cfg.width, withoutEnlargement: true })
    .jpeg({ quality: cfg.quality, mozjpeg: true, progressive: true })
    .toFile(tmp)

  const { renameSync, statSync } = await import('fs')
  renameSync(tmp, src)
  const after = statSync(src).size

  const pct = Math.round((1 - after / before) * 100)
  console.log(`  ${file.padEnd(28)} ${(before/1024).toFixed(0).padStart(6)} KB → ${(after/1024).toFixed(0).padStart(5)} KB  (−${pct}%)`)
}

console.log('\nDone.')
