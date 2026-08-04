
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

function CTA() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[#C9A45C] py-28 text-[#0A0A0A] lg:py-40"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full border border-[#0A0A0A]/10" />

      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full border border-[#0A0A0A]/10" />

      <div className="mx-auto max-w-6xl px-6 text-center lg:px-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3"
        >
          <FiCalendar size={15} />

          <span className="text-xs font-medium uppercase tracking-[0.3em]">
            Your moment starts here
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-8 max-w-5xl text-6xl font-light leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-[9rem]"
        >
          YOUR NEXT
          <br />
          <span className="italic">LOOK</span>
          <br />
          STARTS HERE.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#0A0A0A]/60"
        >
          Whether you're ready for a fresh look, a moment of relaxation or
          something special from our boutique, we're ready when you are.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="/booking"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="group mx-auto mt-10 flex w-fit items-center gap-4 bg-[#0A0A0A] px-8 py-5 text-xs font-medium tracking-[0.2em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#F5F2ED] hover:text-[#0A0A0A]"
        >
          BOOK AN APPOINTMENT

          <FiArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </motion.a>

        {/* Bottom details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mt-16 flex max-w-2xl flex-col justify-between gap-5 border-t border-[#0A0A0A]/15 pt-6 text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/45 sm:flex-row"
        >
          <span>Hair • Nails • Makeup</span>
          <span>Therapy • Boutique • Style</span>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;

