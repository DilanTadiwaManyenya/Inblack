import { motion } from "framer-motion";
import Button from "../components/Button";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] px-6 py-28 text-[#F5F2ED] sm:py-32 lg:px-10 lg:py-40">
      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gold glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.07] blur-[140px]" />

        {/* Subtle corner glow */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#C9A45C]/[0.04] blur-[100px]" />

        {/* Decorative vertical line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/[0.03] lg:block" />

        {/* Decorative typography */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[14rem] font-light tracking-[-0.08em] text-white/[0.015] sm:text-[18rem] lg:text-[24rem]">
          INBLACK
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#C9A45C] sm:w-10" />

          <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C] sm:text-xs">
            Your moment starts here
          </span>

          <span className="h-px w-8 bg-[#C9A45C] sm:w-10" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-light leading-[0.92] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          READY TO FEEL
          <br />
          <span className="italic text-[#C9A45C]">BEAUTIFUL?</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base"
        >
          Your next beauty and wellness experience is waiting.
          Take some time for yourself and let INBLACK take care
          of the rest.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-10 flex justify-center"
        >
          <Button
            to="/booking"
            variant="secondary"
            size="lg"
          >
            BOOK YOUR EXPERIENCE
          </Button>
        </motion.div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
              Beauty
            </span>

            <span className="hidden h-px w-4 bg-[#C9A45C]/40 sm:block" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
              Wellness
            </span>

            <span className="hidden h-px w-4 bg-[#C9A45C]/40 sm:block" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
              Style
            </span>

            <span className="hidden h-px w-4 bg-[#C9A45C]/40 sm:block" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]/50">
              INBLACK
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;