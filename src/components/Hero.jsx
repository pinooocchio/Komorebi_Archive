import { motion } from 'framer-motion';

export function Hero({ wallpaper, favoritesCount }) {
  const backdropStyle = wallpaper?.src
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(18, 8, 12, 0.18), rgba(19, 8, 12, 0.4) 56%, rgba(15, 7, 11, 0.76)), url(${wallpaper.src})`
      }
    : undefined;

  return (
    <section className="mx-auto mt-4 w-[min(1280px,calc(100%-1rem))] overflow-hidden rounded-[36px] border border-white/10 bg-[#1a0b10]/35 shadow-[0_30px_80px_rgba(9,4,6,0.34)] backdrop-blur-xl">
      <div className="relative min-h-[78vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700"
          style={backdropStyle}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,205,211,0.16),transparent_28%),radial-gradient(circle_at_72%_18%,rgba(255,181,122,0.18),transparent_22%),linear-gradient(180deg,rgba(18,8,12,0.22),rgba(18,8,12,0.54)_62%,rgba(14,6,10,0.84))]" />

        <div className="relative flex min-h-[78vh] items-end p-5 md:p-10">
          <div className="max-w-3xl pb-2 md:pb-0 md:pr-6">
            <motion.span
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative z-10 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-[0.68rem] tracking-[0.32em] text-[#f0c0c7] backdrop-blur-md"
            >
              Kyoto spring stillness
            </motion.span>

            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
              className="relative z-10 mt-5 font-display text-5xl font-semibold leading-[0.94] tracking-[-0.04em] text-paper text-glow md:text-7xl"
            >
              Where spring lingers in silence.
            </motion.h1>

            <motion.p
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.14, ease: 'easeOut' }}
              className="relative z-10 mt-5 max-w-2xl text-sm leading-7 text-[#f1d7d8]/82 md:text-base"
            >
              A quiet collection of cinematic wallpapers inspired by drifting petals, lantern light, and the gentle
              stillness of Kyoto evenings.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}