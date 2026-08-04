import { motion } from "framer-motion";
import {
  FaScissors,
  FaHandSparkles,
  FaBrush,
  FaSpa,
  FaArrowRight,
} from "react-icons/fa6";

const services = [
  {
    title: "Hair",
    subtitle: "Crown & Confidence",
    description:
      "Premium hair styling, treatments, cuts and transformations designed to make you feel confident and beautiful.",
    icon: <FaScissors />,
    services: [
      "Hair Styling",
      "Cuts & Trims",
      "Hair Treatments",
      "Braiding",
      "Wig Styling",
    ],
  },
  {
    title: "Nails",
    subtitle: "Details That Shine",
    description:
      "Beautifully finished manicures and nail treatments with attention to every detail.",
    icon: <FaHandSparkles />,
    services: [
      "Manicure",
      "Pedicure",
      "Gel Nails",
      "Nail Art",
      "Nail Treatments",
    ],
  },
  {
    title: "Makeup",
    subtitle: "Your Beauty, Elevated",
    description:
      "Professional makeup designed for everyday elegance, special occasions, photoshoots and celebrations.",
    icon: <FaBrush />,
    services: [
      "Everyday Makeup",
      "Bridal Makeup",
      "Event Makeup",
      "Photoshoot Makeup",
      "Makeup Consultation",
    ],
  },
  {
    title: "Massage & Therapy",
    subtitle: "Relax. Restore. Renew.",
    description:
      "Take a moment for yourself with relaxing treatments designed to help you unwind and recharge.",
    icon: <FaSpa />,
    services: [
      "Relaxation Massage",
      "Deep Tissue Massage",
      "Body Treatments",
      "Wellness Sessions",
      "Stress Relief",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.4em] text-sm text-white/50 mb-6"
          >
            INBLACK Beauty & Wellness
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight"
          >
            Our <span className="italic">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-8 text-white/60 text-lg leading-relaxed"
          >
            Beauty, wellness and self-care experiences thoughtfully designed
            to help you look good, feel good and leave feeling renewed.
          </motion.p>

        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-10 lg:px-16 pb-32">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6"
        >

          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className="group relative border border-white/10 bg-white/[0.03] p-8 md:p-10 lg:p-12 overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/20"
            >

              {/* Number */}
              <span className="absolute top-6 right-7 text-sm text-white/20">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center border border-white/10 text-xl mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                {service.icon}
              </div>

              {/* Heading */}
              <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
                {service.subtitle}
              </p>

              <h2 className="text-4xl md:text-5xl font-light mb-5">
                {service.title}
              </h2>

              <p className="text-white/60 leading-relaxed max-w-lg mb-8">
                {service.description}
              </p>

              {/* Service list */}
              <div className="border-t border-white/10 pt-6 space-y-4">

                {service.services.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between text-sm group/item"
                  >
                    <span className="text-white/70">
                      {item}
                    </span>

                    <span className="w-8 h-px bg-white/20 group-hover/item:w-12 transition-all duration-300" />
                  </div>
                ))}

              </div>

              {/* Book button */}
              <a
                href="/booking"
                className="inline-flex items-center gap-3 mt-10 text-sm uppercase tracking-[0.2em] border-b border-white/30 pb-2 hover:border-white transition-all"
              >
                Book Appointment
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </a>

            </motion.article>
          ))}

        </motion.div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-28">

        <div className="max-w-4xl mx-auto text-center">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.35em] text-xs text-white/40 mb-6"
          >
            Your moment starts here
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light"
          >
            Ready to feel <span className="italic">beautiful?</span>
          </motion.h2>

          <motion.a
            href="/booking"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-white text-black text-sm uppercase tracking-[0.2em] hover:bg-white/80 transition-all"
          >
            Book Your Experience
            <FaArrowRight />
          </motion.a>

        </div>

      </section>

    </main>
  );
}