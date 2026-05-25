import { AnimatePresence, motion } from 'framer-motion';

export function WallpaperModal({ wallpaper, open, onClose }) {
  return (
    <AnimatePresence>
      {open && wallpaper && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/45 px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/55 bg-paper shadow-soft"
          >
            <div className="grid min-h-[80vh] lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[44vh] bg-sakura-hero lg:min-h-full">
                {wallpaper.src ? (
                  <img src={wallpaper.src} alt={wallpaper.alt} className="absolute inset-0 h-full w-full object-cover" />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(31,20,26,0.5))]" />
                <button
                  onClick={onClose}
                  className="absolute right-5 top-5 rounded-full border border-white/50 bg-white/75 px-3 py-2 text-sm text-ink shadow-soft"
                >
                  Close
                </button>
              </div>

              <div className="flex flex-col justify-between gap-8 p-6 md:p-8">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.34em] text-sakura-700">Wallpaper preview</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
                    {wallpaper.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink/65">{wallpaper.alt}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={wallpaper.src || '#'}
                    download
                    className="rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-paper transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}