import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Button from "../components/Button";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-[#F5F2ED]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-12%] top-[8%] h-[520px] w-[520px] rounded-full bg-[#C9A45C]/10 blur-[150px]" />

        <div className="absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-white/[0.035] blur-[130px]" />
      </div>

      {/* Editorial vertical line */}
      <div className="pointer-events-none absolute left-8 top-0 hidden h-full w-px bg-white/[0.07] xl:block" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="grid min-h-[78vh] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative z-20">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
                Beauty · Wellness · Style
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="max-w-4xl text-[4rem] font-light leading-[0.88] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[7.5rem]"
            >
              BEAUTY
              <br />

              <span className="font-serif italic text-[#C9A45C]">
                WITHOUT
              </span>

              <br />

              LIMITS.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 max-w-lg text-sm leading-7 text-white/55 sm:text-base"
            >
              A modern beauty and wellness experience created to help you
              look good, feel good and reconnect with yourself.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button to="/booking" variant="secondary">
                BOOK AN APPOINTMENT
              </Button>

              <Button to="/services" variant="outline">
                EXPLORE SERVICES
              </Button>
            </motion.div>

            {/* Brand statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-14 hidden border-l border-[#C9A45C]/40 pl-4 sm:block"
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">
                The INBLACK Experience
              </p>

              <p className="mt-2 text-sm font-light text-white/65">
                Beauty meets wellness.
              </p>
            </motion.div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            {/* Main image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={heroImage}
                alt="INBLACK beauty experience"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover object-center transition-transform duration-[1.5s] hover:scale-[1.025]"
              />

              {/* Image gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/65 via-transparent to-[#0A0A0A]/5" />

              {/* Inner editorial frame */}
              <div className="absolute inset-4 border border-white/15" />
            </div>

            {/* Offset gold frame */}
            <div className="pointer-events-none absolute -bottom-5 -right-5 -z-10 h-full w-full border border-[#C9A45C]/35" />

            {/* Floating information card */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="absolute -bottom-6 left-[-12px] bg-[#F5F2ED] px-5 py-4 text-[#0A0A0A] shadow-2xl sm:left-[-28px] sm:px-7 sm:py-5"
            >
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#8C6D32]">
                INBLACK
              </p>

              <p className="mt-1 text-sm font-light">
                Beauty meets wellness.
              </p>
            </motion.div>

            {/* Editorial corner label */}
            <div className="absolute -right-2 top-8 hidden items-center gap-2 text-white/35 sm:flex">
              <span className="h-px w-8 bg-white/20" />

              <span className="text-[9px] uppercase tracking-[0.25em]">
                The Experience
              </span>
            </div>
          </motion.div>
        </div>

        {/* Desktop scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-8 hidden items-center gap-3 text-white/25 lg:flex"
        >
          <FiArrowDown size={14} />

          <span className="text-[9px] uppercase tracking-[0.35em]">
            Scroll to explore
          </span>
        </motion.div>

        {/* Mobile scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center gap-3 text-white/25 lg:hidden"
        >
          <FiArrowDown size={14} />

          <span className="text-[9px] uppercase tracking-[0.3em]">
            Explore INBLACK
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;