
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiHeart,
  FiClock,
  FiStar,
} from "react-icons/fi";

const treatments = [
  {
    name: "Relaxation Massage",
    duration: "60 MIN",
  },
  {
    name: "Deep Tissue Massage",
    duration: "60 MIN",
  },
  {
    name: "Back & Neck Therapy",
    duration: "45 MIN",
  },
  {
    name: "Foot Massage",
    duration: "30 MIN",
  },
];

function Therapy() {
  return (
    <section
      id="therapy"
      className="relative overflow-hidden bg-[#0A0A0A] py-28 text-[#F5F2ED] lg:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C9A45C]/[0.06] blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[520px] overflow-hidden sm:h-[650px]">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85"
                alt="Relaxing spa therapy"
                className="h-full w-full object-cover grayscale-[20%] transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-5 -right-5 h-full w-full border border-[#C9A45C]/30" />

            {/* Floating badge */}
            <div className="absolute bottom-8 left-8 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-[#C9A45C]/50 bg-[#0A0A0A]/80 backdrop-blur-sm">
              <FiHeart className="mb-1 text-[#C9A45C]" size={17} />

              <span className="text-[9px] uppercase tracking-[0.2em]">
                Relax
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A45C]" />

                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  The Therapy Experience
                </span>
              </div>

              <h2 className="max-w-2xl text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                SLOW
                <br />
                <span className="italic text-[#C9A45C]">DOWN.</span>
                <br />
                BREATHE.
              </h2>

              <p className="mt-8 max-w-lg text-base leading-7 text-[#F5F2ED]/55">
                Step away from the noise and give yourself permission to
                pause. Our therapy treatments are created to help release
                tension, restore balance and leave you feeling renewed.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-10 grid grid-cols-2 gap-6 border-y border-[#F5F2ED]/10 py-7"
            >
              <div className="flex items-center gap-3">
                <FiClock className="text-[#C9A45C]" size={19} />

                <div>
                  <p className="text-xs tracking-wide text-[#F5F2ED]">
                    FLEXIBLE
                  </p>

                  <p className="mt-1 text-xs text-[#F5F2ED]/40">
                    Treatment times
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiStar className="text-[#C9A45C]" size={19} />

                <div>
                  <p className="text-xs tracking-wide text-[#F5F2ED]">
                    PREMIUM
                  </p>

                  <p className="mt-1 text-xs text-[#F5F2ED]/40">
                    Personal care
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Treatments */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-[#F5F2ED]/40">
                  Selected Treatments
                </span>

                <a
                  href="/services#therapy"
                  className="text-xs tracking-[0.15em] text-[#C9A45C] hover:text-[#F5F2ED]"
                >
                  VIEW ALL
                </a>
              </div>

              <div className="divide-y divide-[#F5F2ED]/10">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.name}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group flex items-center justify-between py-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] text-[#C9A45C]">
                        0{index + 1}
                      </span>

                      <span className="text-sm text-[#F5F2ED]/80 transition-colors group-hover:text-[#F5F2ED]">
                        {treatment.name}
                      </span>
                    </div>

                    <span className="text-[10px] tracking-[0.15em] text-[#F5F2ED]/35">
                      {treatment.duration}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#booking"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group mt-9 inline-flex items-center gap-3 border border-[#C9A45C]/50 px-7 py-4 text-xs font-medium tracking-[0.18em] text-[#C9A45C] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
            >
              BOOK A THERAPY SESSION

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Therapy;

