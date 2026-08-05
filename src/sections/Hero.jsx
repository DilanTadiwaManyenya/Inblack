import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Button from "../components/Button";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0A] text-[#F5F2ED]">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#C9A45C]/10 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-white/[0.04] blur-[120px]" />
      </div>

      {/* Decorative line */}
      <div className="absolute left-6 top-0 hidden h-full w-px bg-white/[0.08] lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">

        <div className="grid min-h-[80vh] items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
                Beauty • Wellness • Style
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="max-w-5xl text-5xl font-light leading-[0.92] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[7rem]"
            >
              BEAUTY
              <br />
              <span className="italic text-[#C9A45C]">
                WITHOUT
              </span>
              <br />
              LIMITS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-xl text-sm leading-7 text-white/50 md:text-base"
            >
              A modern beauty and wellness experience created to help you
              look good, feel good and reconnect with yourself.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button to="/booking" variant="secondary">
                BOOK AN APPOINTMENT
              </Button>

              <Button to="/services" variant="outline">
                EXPLORE SERVICES
              </Button>
            </motion.div>

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block"
          >

            <div className="relative mx-auto h-[620px] max-w-[460px] overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
                alt="INBLACK beauty experience"
                className="h-full w-full object-cover grayscale-[15%]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />

            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-5 -right-5 h-full w-full border border-[#C9A45C]/40" />

            {/* Floating label */}
            <div className="absolute -left-10 bottom-12 bg-[#F5F2ED] px-6 py-5 text-[#0A0A0A]">
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#8C6D32]">
                The INBLACK Experience
              </p>

              <p className="mt-2 text-sm font-light">
                Beauty meets wellness.
              </p>
            </div>

          </motion.div>

        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-6 hidden items-center gap-3 text-white/30 lg:flex"
        >
          <FiArrowDown size={15} />

          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;