import { motion } from "framer-motion";
import Button from "../components/Button";

function CTA() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#0A0A0A] px-6 py-28 text-[#F5F2ED] lg:px-10 lg:py-40"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A45C]/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-[#C9A45C]" />

          <span className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
            Your moment starts here
          </span>

          <span className="h-px w-10 bg-[#C9A45C]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          READY TO FEEL
          <br />
          <span className="italic text-[#C9A45C]">
            BEAUTIFUL?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/50 md:text-base"
        >
          Your next beauty and wellness experience is waiting.
          Take some time for yourself and let INBLACK take care of the rest.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10"
        >
          <Button to="/booking" variant="secondary" size="lg">
            BOOK YOUR EXPERIENCE
          </Button>
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
            Beauty • Wellness • Style • INBLACK
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default CTA;