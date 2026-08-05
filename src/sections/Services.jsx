import { motion } from "framer-motion";
import {
  FaScissors,
  FaHandSparkles,
  FaBrush,
  FaSpa,
} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Hair",
    subtitle: "Crown & Confidence",
    description:
      "Styling, treatments and transformations designed around your unique look.",
    icon: FaScissors,
  },
  {
    number: "02",
    title: "Nails",
    subtitle: "Details That Shine",
    description:
      "Beautiful manicures, pedicures and nail treatments finished with precision.",
    icon: FaHandSparkles,
  },
  {
    number: "03",
    title: "Makeup",
    subtitle: "Beauty, Elevated",
    description:
      "Professional makeup for everyday moments, celebrations and special occasions.",
    icon: FaBrush,
  },
  {
    number: "04",
    title: "Therapy",
    subtitle: "Relax. Restore. Renew.",
    description:
      "Relaxing wellness treatments designed to help you slow down and recharge.",
    icon: FaSpa,
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
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Services() {
  return (
    <section
      id="services"
      className="bg-[#F5F2ED] px-6 py-28 text-[#0A0A0A] lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                What We Do
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              BEAUTY,
              <br />
              <span className="italic">YOUR WAY.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-sm leading-7 text-[#0A0A0A]/50"
          >
            From hair and nails to makeup and wellness, every INBLACK
            service is designed around confidence, care and your individual
            style.
          </motion.p>

        </div>

        {/* SERVICE GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-px bg-[#0A0A0A]/10 md:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                className="group relative bg-[#F5F2ED] p-8 transition-all duration-500 hover:bg-white lg:p-12"
              >
                {/* Number */}
                <span className="absolute right-8 top-8 text-xs tracking-[0.2em] text-[#0A0A0A]/20 lg:right-12 lg:top-12">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center border border-[#C9A45C]/50 text-[#8C6D32] transition-all duration-500 group-hover:bg-[#0A0A0A] group-hover:text-[#C9A45C]">
                  <Icon size={18} />
                </div>

                {/* Content */}
                <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-[#8C6D32]">
                  {service.subtitle}
                </p>

                <h3 className="mt-3 text-4xl font-light tracking-[-0.03em] lg:text-5xl">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-6 text-[#0A0A0A]/50">
                  {service.description}
                </p>

                {/* Decorative line */}
                <div className="mt-10 h-px w-full bg-[#0A0A0A]/10" />

                <Link
                  to="/services"
                  className="group/link mt-6 inline-flex items-center gap-3 text-xs font-medium tracking-[0.18em] text-[#0A0A0A]"
                >
                  EXPLORE SERVICE

                  <FiArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col justify-between gap-6 border-t border-[#0A0A0A]/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#0A0A0A]/35">
            Discover everything INBLACK has to offer
          </p>

          <Link
            to="/services"
            className="group inline-flex w-fit items-center gap-3 bg-[#0A0A0A] px-7 py-4 text-xs font-medium tracking-[0.18em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            VIEW ALL SERVICES

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;