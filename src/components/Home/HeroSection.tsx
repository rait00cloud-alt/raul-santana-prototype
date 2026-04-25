import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[680px] w-full overflow-hidden text-white z-0 ">

      <div>
        <img
          src="/photos/raul-02.png"
          className="absolute bottom-6 w-full h-full object-cover z-10 -translate-y-8 sm:object-[30%_20%]"
        />
        <div className="absolute bottom-6 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="absolute bottom-16 px-8 w-full z-20"
      >
        <div className="flex flex-col gap-4 sm:px-40">
          <h1 className="font-[BasicCommercialBold] text-2xl z-20">Fisioterapia esportiva, ortopédica e performance</h1>
          <motion.div
            className="h-2 bg-white"
            initial={{ width: 0 }}
            animate={{ width: "320px" }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-10" />

    </section>
  );
}
