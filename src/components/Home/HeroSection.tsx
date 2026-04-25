import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[680px] w-full overflow-hidden text-white z-0">
      {/* Background Video */}
      <video
        src="/videos/full-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute bottom-16 px-8 w-full z-20"
      >
        <div className="flex flex-col gap-4 sm:px-40">
          <h1 className="font-[BasicCommercialBold] text-2xl sm:text-4xl max-w-4xl">
            Fisioterapia esportiva, ortopédica e performance
          </h1>

          <motion.div
            className="h-2 bg-white"
            initial={{ width: 0 }}
            animate={{ width: "320px" }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}