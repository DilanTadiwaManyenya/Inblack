import { motion } from "framer-motion";
import { FiArrowUpRight, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

import boutiqueImage from "../assets/boutique.jpg";

function Boutique() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] px-6 py-28 text-[#F5F2ED] lg:px-10 lg:py-36">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#C9A45C]/10 blur-[150px]" />

        <div className="absolute bottom-[-15%] left-[-10%] h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
                INBLACK Boutique
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              BEAUTY
              <br />
              <span className="italic text-[#C9A45C]">
                TO TAKE HOME.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-sm leading-7 text-white/45 md:pb-2"
          >
            Discover carefully selected beauty, wellness and lifestyle
            essentials designed to extend the INBLACK experience beyond
            your appointment.
          </motion.p>
        </div>

        {/* MAIN FEATURE */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="group relative min-h-[500px] overflow-hidden sm:min-h-[600px]"
          >
            <img
              src={boutiqueImage}
              alt="INBLACK boutique collection"
              width="736"
              height="1308"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/10 to-transparent" />

            {/* Image label */}
            <div className="absolute bottom-7 left-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C9A45C]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/80">
                The INBLACK Collection
              </span>
            </div>

            {/* Number */}
            <span className="absolute right-6 top-6 text-[10px] tracking-[0.25em] text-white/50">
              01
            </span>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-between border border-white/10 bg-white/[0.025] p-8 sm:p-10 lg:p-12"
          >
            <div>
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center border border-[#C9A45C]/50 text-[#C9A45C]">
                <FiShoppingBag size={18} />
              </div>

              <p className="mt-12 text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]">
                Curated With Intention
              </p>

              <h3 className="mt-4 text-4xl font-light leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                TAKE THE
                <br />
                <span className="italic">INBLACK FEELING</span>
                <br />
                WITH YOU.
              </h3>

              <div className="mt-7 space-y-4 text-sm leading-7 text-white/45">
                <p>
                  From beauty essentials to self-care favourites, our
                  boutique brings a little more of the INBLACK experience
                  into your everyday routine.
                </p>

                <p>
                  Every piece is selected with beauty, confidence and
                  personal style in mind.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 border-t border-white/10 pt-7">
              <Link
                to="/boutique"
                className="group inline-flex items-center gap-3 bg-[#F5F2ED] px-7 py-4 text-[10px] font-medium tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#C9A45C]"
              >
                EXPLORE BOUTIQUE

                <FiArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* SMALL CATEGORY STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 grid border border-white/10 sm:grid-cols-3"
        >
          {[
            ["01", "Hair Essentials"],
            ["02", "Self Care"],
            ["03", "Beauty Accessories"],
          ].map(([number, title]) => (
            <div
              key={number}
              className="group flex items-center justify-between border-b border-white/10 px-6 py-6 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.03] sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <div className="flex items-center gap-5">
                <span className="text-[9px] tracking-[0.2em] text-white/25">
                  {number}
                </span>

                <span className="text-xs uppercase tracking-[0.18em] text-white/60 transition-colors group-hover:text-[#C9A45C]">
                  {title}
                </span>
              </div>

              <FiArrowUpRight
                size={15}
                className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C9A45C]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Boutique;
