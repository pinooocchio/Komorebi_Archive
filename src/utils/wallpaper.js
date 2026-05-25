export const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
export const WALLPAPER_PUBLIC_ROOT = 'wallpapers';

export function resolvePublicPath(publicPath = '') {
  if (!publicPath) {
    return '';
  }

  if (/^(?:https?:)?\/\//i.test(publicPath) || publicPath.startsWith('data:') || publicPath.startsWith('blob:')) {
    return publicPath;
  }

  const normalizedBase = `${import.meta.env.BASE_URL || '/'}`.replace(/\/+/g, '/');
  const basePrefix = normalizedBase.endsWith('/') ? normalizedBase : `${normalizedBase}/`;
  const normalizedPath = publicPath.replace(/^\/+/, '');

  return `${basePrefix}${normalizedPath}`;
}

export function titleFromFileName(fileName) {
  return fileName
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function isImageFile(fileName) {
  return IMAGE_EXTENSIONS.has(fileName.slice(fileName.lastIndexOf('.')).toLowerCase());
}