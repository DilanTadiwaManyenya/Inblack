import { motion } from "framer-motion";
import {
  FaScissors,
  FaHandSparkles,
  FaBrush,
  FaSpa,
} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import hairImage from "../assets/hair.jpg";
import nailsImage from "../assets/nails.jpg";
import makeupImage from "../assets/makeup.jpg";
import therapyImage from "../assets/therapy.jpg";

const services = [
  {
    number: "01",
    title: "Hair",
    subtitle: "Crown & Confidence",
    description:
      "Styling, treatments and transformations designed around your unique look.",
    icon: FaScissors,
    image: hairImage,
  },
  {
    number: "02",
    title: "Nails",
    subtitle: "Details That Shine",
    description:
      "Beautiful manicures, pedicures and nail treatments finished with precision.",
    icon: FaHandSparkles,
    image: nailsImage,
  },
  {
    number: "03",
    title: "Makeup",
    subtitle: "Beauty, Elevated",
    description:
      "Professional makeup for everyday moments, celebrations and special occasions.",
    icon: FaBrush,
    image: makeupImage,
  },
  {
    number: "04",
    title: "Therapy",
    subtitle: "Relax. Restore. Renew.",
    description:
      "Relaxing wellness treatments designed to help you slow down and recharge.",
    icon: FaSpa,
    image: therapyImage,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F5F2ED] py-24 text-[#0A0A0A] sm:py-32"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#8C6D32]">
                What We Do
              </span>
            </div>

            <h2 className="max-w-3xl text-5xl font-light leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              BEAUTY,
              <br />

              <span className="font-serif italic text-[#8C6D32]">
                YOUR WAY.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-sm leading-7 text-[#0A0A0A]/50 md:pb-2"
          >
            From hair and nails to makeup and wellness, every INBLACK
            service is designed around confidence, care and your individual
            style.
          </motion.p>
        </div>

        {/* SERVICES GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                className="group relative overflow-hidden bg-[#0A0A0A] text-[#F5F2ED]"
              >
                {/* IMAGE */}
                <div className="relative h-[420px] overflow-hidden sm:h-[480px]">

                  <img
                    src={service.image}
                    alt={`${service.title} service at INBLACK`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />

                  <div className="absolute inset-0 bg-[#C9A45C]/0 transition-colors duration-700 group-hover:bg-[#C9A45C]/10" />

                  {/* NUMBER */}
                  <span className="absolute right-6 top-6 text-[10px] tracking-[0.25em] text-white/60">
                    {service.number}
                  </span>

                  {/* ICON */}
                  <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center border border-[#C9A45C]/60 text-[#C9A45C] backdrop-blur-sm transition-all duration-500 group-hover:bg-[#C9A45C] group-hover:text-[#0A0A0A]">
                    <Icon size={17} />
                  </div>

                  {/* CONTENT */}
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">

                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#C9A45C]">
                      {service.subtitle}
                    </p>

                    <h3 className="mt-2 text-4xl font-light tracking-[-0.04em] sm:text-5xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
                      {service.description}
                    </p>

                    <Link
                      to="/services"
                      className="group/link mt-7 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-[10px] font-medium tracking-[0.2em] transition-colors duration-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
                    >
                      EXPLORE SERVICE

                      <FiArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      />
                    </Link>

                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex flex-col justify-between gap-6 border-t border-[#0A0A0A]/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-sm text-[10px] uppercase leading-5 tracking-[0.25em] text-[#0A0A0A]/35">
            Discover everything INBLACK has to offer.
          </p>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-3 bg-[#0A0A0A] px-7 py-4 text-[10px] font-medium tracking-[0.2em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            VIEW ALL SERVICES

            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;