import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiHeart,
  FiCheck,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const treatments = [
  "Relaxation Massage",
  "Deep Tissue Massage",
  "Body Treatments",
  "Wellness Sessions",
  "Stress Relief",
];

function Therapy() {
  return (
    <section
      id="therapy"
      className="relative overflow-hidden bg-[#0A0A0A] px-6 py-28 text-[#F5F2ED] lg:px-10 lg:py-40"
    >
      {/* Decorative text */}
      <div className="pointer-events-none absolute -right-16 top-20 hidden text-[12rem] font-light leading-none tracking-[-0.08em] text-white/[0.025] lg:block">
        REST
      </div>

      <div className="mx-auto max-w-7xl">

        {/* TOP INTRO */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                Wellness & Therapy
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              TAKE TIME
              <br />
              <span className="italic">FOR YOU.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-sm leading-7 text-white/50 lg:ml-auto"
          >
            Beauty is only part of the experience. Our wellness treatments
            give you space to slow down, release tension and reconnect with
            yourself.
          </motion.p>

        </div>

        {/* MAIN CONTENT */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[480px] overflow-hidden sm:h-[600px]">

              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                alt="INBLACK wellness therapy"
                className="h-full w-full object-cover grayscale-[20%] transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />

            </div>

            {/* Frame */}
            <div className="absolute -bottom-5 -left-5 h-full w-full border border-[#C9A45C]/40" />

            {/* Floating icon */}
            <div className="absolute bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#F5F2ED] text-[#0A0A0A]">
              <FiHeart size={22} />
            </div>
          </motion.div>

          {/* TREATMENTS */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >

            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              Restore & Renew
            </p>

            <h3 className="mt-5 text-3xl font-light md:text-4xl">
              A moment to
              <span className="italic"> breathe.</span>
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/50">
              Step away from the noise and give yourself permission to
              relax. Our treatments are designed to leave you feeling
              refreshed, restored and ready for whatever comes next.
            </p>

            {/* Treatment list */}
            <div className="mt-10 border-t border-white/10">

              {treatments.map((treatment) => (
                <div
                  key={treatment}
                  className="flex items-center gap-4 border-b border-white/10 py-5"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#C9A45C]/40 text-[#C9A45C]">
                    <FiCheck size={12} />
                  </span>

                  <span className="text-sm text-white/70">
                    {treatment}
                  </span>
                </div>
              ))}

            </div>

            {/* CTA */}
            <Link
              to="/booking"
              className="group mt-10 inline-flex items-center gap-3 bg-[#F5F2ED] px-7 py-4 text-xs font-medium tracking-[0.18em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#C9A45C]"
            >
              BOOK A WELLNESS EXPERIENCE

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </motion.div>

        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 border-t border-white/10 pt-10"
        >
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Relax. Restore. Renew.
            </p>

            <p className="max-w-md text-sm leading-6 text-white/40 md:text-right">
              Because taking care of yourself isn't a luxury.
              It's part of feeling your best.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Therapy;