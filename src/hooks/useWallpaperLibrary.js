import { useEffect, useState } from 'react';
import rawManifest from '../data/wallpaperManifest.json';
import { resolvePublicPath, titleFromFileName } from '../utils/wallpaper';

const FAVORITES_KEY = 'komorebi-archive:favorites';

function readFavorites() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function normalizeWallpaper(item) {
  const fileName = item.fileName || item.filename || item.name;
  const title = item.title || titleFromFileName(fileName);
  const src = resolvePublicPath(item.src || item.url || item.path);

  return {
    id: item.id || fileName,
    title,
    src,
    fileName,
    featured: Boolean(item.featured),
    alt: item.alt || title
  };
}

function buildLibrary() {
  const wallpapers = Array.isArray(rawManifest) ? rawManifest.map((item) => normalizeWallpaper(item)) : [];
  const featuredWallpaper =
    wallpapers.find((wallpaper) => wallpaper.src === resolvePublicPath('/wallpapers/hero/hero.png')) ||
    wallpapers.find((wallpaper) => wallpaper.featured) ||
    wallpapers.find((wallpaper) => /hero|reference|sakura-spring|kyoto/i.test(wallpaper.fileName || wallpaper.title || '')) ||
    wallpapers[0] ||
    null;

  return {
    wallpapers,
    featuredWallpaper
  };
}

export function useWallpaperLibrary() {
  const [favorites, setFavorites] = useState(() => readFavorites());

  useEffect(() => {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const { wallpapers, featuredWallpaper } = buildLibrary();

  function toggleFavorite(wallpaperId) {
    setFavorites((current) =>
      current.includes(wallpaperId) ? current.filter((item) => item !== wallpaperId) : [...current, wallpaperId]
    );
  }

  function isFavorite(wallpaperId) {
    return favorites.includes(wallpaperId);
  }

  return {
    wallpapers,
    featuredWallpaper,
    favorites,
    favoriteCount: favorites.length,
    toggleFavorite,
    isFavorite
  };
}