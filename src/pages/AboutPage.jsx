import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiHeart,
  FiAward,
  FiUsers,
  FiStar,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import aboutImage from "../assets/about.jpg";

const values = [
  {
    icon: FiHeart,
    number: "01",
    title: "PERSONAL",
    description:
      "Every client is different. Every experience is thoughtfully tailored around you.",
  },
  {
    icon: FiAward,
    number: "02",
    title: "QUALITY",
    description:
      "Exceptional results begin with exceptional care, expertise and attention to detail.",
  },
  {
    icon: FiUsers,
    number: "03",
    title: "COMMUNITY",
    description:
      "INBLACK is more than a beauty space. It is a place to connect, relax and feel at home.",
  },
  {
    icon: FiStar,
    number: "04",
    title: "EXPERIENCE",
    description:
      "From the atmosphere to the smallest detail, every part of your visit is designed with intention.",
  },
];

function AboutPage() {
  return (
    <main className="bg-[#F5F2ED] text-[#0A0A0A]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-[#0A0A0A] px-6 pb-20 pt-40 text-[#F5F2ED] lg:px-10 lg:pb-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-[#C9A45C]/10 blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
                About INBLACK
              </span>
            </div>

            <h1 className="max-w-5xl text-6xl font-light leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              MORE THAN
              <br />
              <span className="font-serif italic text-[#C9A45C]">
                A SALON.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              A beauty and wellness experience created around one simple
              belief — you deserve to feel confident, cared for and completely
              yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          OUR STORY
      ===================================================== */}
      <section className="px-6 py-28 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1fr] lg:items-center">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[550px] overflow-hidden sm:h-[650px]">
                <img
                  src={aboutImage}
                  alt="INBLACK beauty salon experience"
                  width="736"
                  height="920"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale-[10%] transition-transform duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
              </div>

              {/* Decorative border */}
              <div className="absolute -bottom-5 -right-5 h-full w-full border border-[#C9A45C]/50" />
            </motion.div>

            {/* STORY */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A45C]" />

                <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                  Our Story
                </span>
              </div>

              <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                BEAUTY SHOULD
                <br />
                <span className="font-serif italic text-[#8C6D32]">
                  FEEL PERSONAL.
                </span>
              </h2>

              <div className="mt-9 space-y-6 text-sm leading-7 text-[#0A0A0A]/55">
                <p>
                  INBLACK was created from a simple idea: beauty is not just
                  about how you look. It is about how you feel when you leave.
                </p>

                <p>
                  We wanted to create a space where beauty, wellness and style
                  could exist together — a place where taking care of yourself
                  feels intentional rather than rushed.
                </p>

                <p>
                  From hair and nails to makeup, massage, therapy and our
                  boutique, every part of INBLACK is designed to give you
                  space to pause, reset and reconnect with yourself.
                </p>

                <p>
                  Whether you're preparing for an important occasion or simply
                  giving yourself a moment of care, our goal is the same:
                  helping you leave feeling confident and renewed.
                </p>
              </div>

              <Link
                to="/booking"
                className="group mt-10 inline-flex items-center gap-3 bg-[#0A0A0A] px-7 py-4 text-xs font-medium tracking-[0.18em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
              >
                EXPERIENCE INBLACK

                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="border-t border-[#0A0A0A]/10 px-6 py-28 lg:px-10 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                What We Believe
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              THE VALUES
              <br />
              <span className="font-serif italic text-[#8C6D32]">
                BEHIND INBLACK.
              </span>
            </h2>
          </div>

          <div className="grid gap-px bg-[#0A0A0A]/10 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group relative bg-[#F5F2ED] p-8 lg:p-12"
                >
                  {/* Number */}
                  <span className="absolute right-8 top-8 text-xs tracking-[0.2em] text-[#0A0A0A]/20">
                    {value.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A45C]/50 text-[#8C6D32] transition-all duration-300 group-hover:bg-[#0A0A0A] group-hover:text-[#C9A45C]">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-9 text-xl font-medium tracking-[0.08em]">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#0A0A0A]/50">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL STATEMENT
      ===================================================== */}
      <section className="bg-[#0A0A0A] px-6 py-28 text-center text-[#F5F2ED] lg:px-10 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]"
          >
            This is INBLACK
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-7 text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl"
          >
            COME AS YOU ARE.
            <br />
            <span className="font-serif italic text-[#C9A45C]">
              LEAVE FEELING NEW.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/45"
          >
            Your time matters. Your confidence matters. Your experience
            matters.
          </motion.p>

          <Link
            to="/booking"
            className="group mt-10 inline-flex items-center gap-3 bg-[#F5F2ED] px-8 py-5 text-xs font-medium tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#C9A45C]"
          >
            BOOK YOUR EXPERIENCE

            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
