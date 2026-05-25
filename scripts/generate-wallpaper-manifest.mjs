import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicWallpapers = path.join(root, 'public', 'wallpapers');
const outputFile = path.join(root, 'src', 'data', 'wallpaperManifest.json');
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function titleFromFileName(fileName) {
  return fileName
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .trim();
}

async function ensureManifestBase() {
  try {
    const existing = await readFile(outputFile, 'utf8');
    const parsed = JSON.parse(existing);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function collectImages(directoryPath) {
  let entries = [];

  try {
    entries = await readdir(directoryPath, { withFileTypes: true });
  } catch {
    return [];
  }

  const wallpapers = [];

  for (const entry of entries) {
    const fullPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      wallpapers.push(...(await collectImages(fullPath)));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (!imageExtensions.has(path.extname(entry.name).toLowerCase())) {
      continue;
    }

    const relativePath = path.relative(path.join(root, 'public'), fullPath).replace(/\\/g, '/');
    const isDedicatedHero = relativePath.toLowerCase() === 'wallpapers/hero/hero.png';

    wallpapers.push({
      id: relativePath.replace(/\.[^.]+$/, '').toLowerCase(),
      fileName: entry.name,
      title: titleFromFileName(entry.name),
      src: relativePath,
      alt: titleFromFileName(entry.name),
      featured: isDedicatedHero || /hero|reference|sakura-spring|kyoto/i.test(entry.name) || false
    });
  }

  return wallpapers;
}

const manifest = await collectImages(publicWallpapers);

if (manifest.length > 0 && !manifest.some((item) => item.featured)) {
  manifest[0].featured = true;
}

await writeFile(outputFile, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
console.log(`Generated wallpaper manifest at ${path.relative(root, outputFile)}`);