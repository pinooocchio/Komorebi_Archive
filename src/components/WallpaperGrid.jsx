import { motion } from 'framer-motion';
import { WallpaperCard } from './WallpaperCard';

export function WallpaperGrid({ wallpapers, onOpen }) {
  return (
    <section id="archive" className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-10 md:py-14">
      <div className="mt-8 columns-1 gap-5 md:columns-2 xl:columns-3">
        {wallpapers.map((wallpaper) => (
          <WallpaperCard
            key={wallpaper.id}
            wallpaper={wallpaper}
            onOpen={onOpen}
          />
        ))}
      </div>

      {wallpapers.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-[28px] border border-white/60 bg-white/55 p-8 text-center shadow-soft backdrop-blur-xl"
        >
          <p className="font-display text-2xl font-semibold text-ink">No wallpapers found.</p>
          <p className="mt-2 text-sm leading-7 text-ink/60">
            Add images to <span className="font-semibold">public/wallpapers</span> and regenerate the manifest.
          </p>
        </motion.div>
      )}
    </section>
  );
}