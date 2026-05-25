import { motion } from 'framer-motion';

export function WallpaperCard({ wallpaper, onOpen }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative mb-5 break-inside-avoid overflow-hidden rounded-[28px] border border-white/8 bg-white/6 shadow-[0_18px_50px_rgba(4,2,4,0.24)] backdrop-blur-xl"
    >
      <button className="block w-full text-left" onClick={() => onOpen(wallpaper)} aria-label="Open wallpaper preview">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(31,20,26,0.34))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {wallpaper.src ? (
            <img
              src={wallpaper.src}
              alt={wallpaper.alt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] h-auto w-full object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-[0.88]"
            />
          ) : (
            <div className="aspect-[4/5] w-full bg-sakura-hero" />
          )}
        </div>
      </button>
    </motion.article>
  );
}