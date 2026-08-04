
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0A]">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#C9A45C]/10 blur-[120px]" />

      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-6 pt-24 lg:grid-cols-2 lg:px-10">
        
        {/* Left Content */}
        <div className="relative z-10 py-16">
          
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#C9A45C]" />

            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              Beauty • Therapy • Style
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-3xl text-6xl font-light leading-[0.9] tracking-[-0.04em] text-[#F5F2ED] sm:text-7xl lg:text-[7rem]"
          >
            BEAUTY
            <br />

            <span className="italic text-[#C9A45C]">
              WITHOUT
            </span>

            <br />

            COMPROMISE.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-lg text-base leading-7 text-[#F5F2ED]/60"
          >
            Discover a space where beauty, wellness and personal style come
            together. From hair and nails to makeup, massage and curated
            boutique pieces — welcome to INBLACK.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#booking"
              className="group flex items-center gap-3 bg-[#C9A45C] px-7 py-4 text-sm font-medium tracking-[0.12em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#F5F2ED]"
            >
              BOOK APPOINTMENT

              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#services"
              className="flex items-center gap-3 border border-[#F5F2ED]/20 px-7 py-4 text-sm tracking-[0.12em] text-[#F5F2ED] transition-all duration-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              EXPLORE SERVICES
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden h-[650px] lg:block"
        >
          {/* Image frame */}
          <div className="absolute right-0 top-1/2 h-[580px] w-[440px] -translate-y-1/2 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85"
              alt="Luxury beauty salon"
              className="h-full w-full object-cover grayscale-[15%]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
          </div>

          {/* Decorative border */}
          <div className="absolute right-[-18px] top-1/2 h-[580px] w-[440px] -translate-y-[48%] border border-[#C9A45C]/40" />

          {/* Floating text */}
          <div className="absolute bottom-10 left-0">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
              Est. 2026
            </p>

            <p className="mt-2 text-sm tracking-wide text-[#F5F2ED]/70">
              Your beauty. Your moment.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[#F5F2ED]/40 transition-colors hover:text-[#C9A45C] md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.35em]">
          Scroll
        </span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <FiArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;

