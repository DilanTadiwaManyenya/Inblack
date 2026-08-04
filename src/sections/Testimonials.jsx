
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiStar } from "react-icons/fi";

const testimonials = [
  {
    quote:
      "The whole experience was incredible. I walked in for my hair and left feeling like a completely different person.",
    name: "AMARA M.",
    service: "HAIR EXPERIENCE",
  },
  {
    quote:
      "The attention to detail is unmatched. From the atmosphere to the service, everything feels intentional.",
    name: "TAPIWA R.",
    service: "NAIL EXPERIENCE",
  },
  {
    quote:
      "INBLACK is exactly what I needed. The massage was amazing and the entire space made me feel completely relaxed.",
    name: "NYASHA T.",
    service: "THERAPY EXPERIENCE",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0A0A0A] py-28 text-[#F5F2ED] lg:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-150px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#C9A45C]/[0.05] blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-[#F5F2ED]/10 pb-10 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                Client Love
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              WORDS FROM
              <br />
              <span className="italic text-[#C9A45C]">OUR CLIENTS.</span>
            </h2>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="flex gap-1 text-[#C9A45C]">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar key={star} size={15} fill="currentColor" />
              ))}
            </div>

            <span className="text-xs tracking-[0.15em] text-[#F5F2ED]/40">
              5.0 CLIENT RATING
            </span>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid gap-px bg-[#F5F2ED]/10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="bg-[#0A0A0A] p-8 lg:p-10"
            >
              {/* Quote mark */}
              <div className="text-5xl font-serif leading-none text-[#C9A45C]/40">
                “
              </div>

              {/* Stars */}
              <div className="mt-5 flex gap-1 text-[#C9A45C]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={12}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-7 min-h-[150px] text-base leading-7 text-[#F5F2ED]/65">
                {testimonial.quote}
              </p>

              {/* Client */}
              <div className="mt-8 border-t border-[#F5F2ED]/10 pt-6">
                <p className="text-xs font-medium tracking-[0.2em]">
                  {testimonial.name}
                </p>

                <p className="mt-2 text-[10px] tracking-[0.18em] text-[#C9A45C]">
                  {testimonial.service}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] text-[#F5F2ED]/30">
            01 — 03
          </span>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center border border-[#F5F2ED]/15 text-[#F5F2ED]/60 transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              <FiArrowLeft size={16} />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center border border-[#F5F2ED]/15 text-[#F5F2ED]/60 transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              <FiArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

