import { useState } from 'react';
import { Hero } from '../components/Hero';
import { WallpaperGrid } from '../components/WallpaperGrid';
import { WallpaperModal } from '../components/WallpaperModal';
import { useWallpaperLibrary } from '../hooks/useWallpaperLibrary';

export function HomePage() {
  const { wallpapers, featuredWallpaper, favoriteCount } = useWallpaperLibrary();
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);

  const featured = featuredWallpaper || wallpapers[0] || null;

  return (
    <div className="pb-10 md:pb-16">
      <Hero wallpaper={featured} favoritesCount={favoriteCount} />

      <WallpaperGrid
        wallpapers={wallpapers}
        onOpen={setSelectedWallpaper}
      />

      <WallpaperModal
        wallpaper={selectedWallpaper}
        open={Boolean(selectedWallpaper)}
        onClose={() => setSelectedWallpaper(null)}
      />
    </div>
  );
}