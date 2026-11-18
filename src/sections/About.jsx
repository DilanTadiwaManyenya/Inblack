import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiHeart,
  FiAward,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import aboutImage from "../assets/about.jpg";

const values = [
  {
    icon: FiHeart,
    title: "PERSONAL",
    description:
      "Every client is different. Every experience is tailored around you.",
  },
  {
    icon: FiAward,
    title: "QUALITY",
    description:
      "We believe exceptional results begin with exceptional care and attention to detail.",
  },
  {
    icon: FiUsers,
    title: "COMMUNITY",
    description:
      "INBLACK is more than a beauty space. It is a place to connect, relax and feel at home.",
  },
];

function About() {
  return (
    <section className="relative overflow-hidden bg-[#F5F2ED] py-28 text-[#0A0A0A] lg:py-36">
      {/* Decorative background text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-10 select-none text-[14rem] font-light leading-none tracking-[-0.08em] text-[#0A0A0A]/[0.025] sm:text-[20rem] lg:text-[28rem]"
      >
        INBLACK
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* MAIN STORY */}
        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
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
                alt="INBLACK beauty experience"
                width="736"
                height="920"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover grayscale-[10%] transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent" />
            </div>

            {/* Decorative border */}
            <div className="absolute -bottom-5 -left-5 h-full w-full border border-[#C9A45C]/50" />

            {/* Brand mark */}
            <div className="absolute bottom-8 right-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#0A0A0A] text-center">
              <span className="text-[10px] leading-4 tracking-[0.18em] text-[#C9A45C]">
                IN
                <br />
                BLACK
              </span>
            </div>
          </motion.div>

          {/* STORY */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              MORE THAN
              <br />
              <span className="font-serif italic text-[#8C6D32]">
                A SALON.
              </span>
            </h2>

            {/* Story */}
            <div className="mt-8 space-y-5 text-sm leading-7 text-[#0A0A0A]/55">
              <p>
                INBLACK was created around one simple idea — beauty should
                feel personal.
              </p>

              <p>
                From the moment you walk through our doors, every detail is
                designed to make you feel seen, cared for and confident.
              </p>

              <p>
                Hair, nails, makeup, therapy and style come together under one
                roof to create an experience that goes beyond the appointment.
              </p>
            </div>

            {/* ABOUT PAGE LINK */}
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-3 bg-[#0A0A0A] px-7 py-4 text-xs font-medium tracking-[0.18em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
            >
              DISCOVER OUR STORY

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* VALUES */}
        <div className="mt-28 border-t border-[#0A0A0A]/10 pt-10 lg:mt-36">
          <div className="mb-12 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-[#0A0A0A]/40">
              What We Believe
            </span>

            <span className="hidden text-xs tracking-[0.2em] text-[#0A0A0A]/30 sm:block">
              01 — 03
            </span>
          </div>

          <div className="grid gap-px bg-[#0A0A0A]/10 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="bg-[#F5F2ED] p-8 lg:p-10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A45C]/50 text-[#8C6D32]">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-8 text-sm font-medium tracking-[0.15em]">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#0A0A0A]/50">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
