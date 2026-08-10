import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "INBLACK is honestly such a beautiful experience. I walked in feeling tired and left feeling like a completely different person.",
    name: "AMARA",
    service: "Hair & Beauty",
  },
  {
    quote:
      "The attention to detail is incredible. Everything feels intentional, from the atmosphere to the service itself.",
    name: "TAPIWA",
    service: "Nails & Wellness",
  },
  {
    quote:
      "I love that INBLACK feels like more than just a salon. You can actually slow down and enjoy the experience.",
    name: "NYASHA",
    service: "Makeup & Therapy",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#F5F2ED] px-6 py-28 text-[#0A0A0A] lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                Client Experiences
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              WORDS
              <br />
              <span className="italic">FROM YOU.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-sm leading-7 text-[#0A0A0A]/50"
          >
            Every INBLACK experience is personal. Here&apos;s what some of
            our clients have to say.
          </motion.p>
        </div>

        {/* TESTIMONIALS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-16 grid gap-px bg-[#0A0A0A]/10 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              variants={{
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
              }}
              className="group relative bg-[#F5F2ED] p-8 transition-colors duration-500 hover:bg-white lg:p-10"
            >
              {/* NUMBER */}
              <span className="absolute right-8 top-8 text-xs tracking-[0.2em] text-[#0A0A0A]/20">
                0{index + 1}
              </span>

              {/* STARS */}
              <div className="flex gap-1 text-[#C9A45C]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={14}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* QUOTE */}
              <blockquote className="mt-10 text-xl font-light leading-8 tracking-[-0.02em]">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* CLIENT */}
              <div className="mt-10 border-t border-[#0A0A0A]/10 pt-6">
                <p className="text-xs font-medium tracking-[0.2em]">
                  {testimonial.name}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#8C6D32]">
                  {testimonial.service}
                </p>
              </div>

              {/* GOLD ACCENT */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#C9A45C] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 flex flex-col justify-between gap-6 border-t border-[#0A0A0A]/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-md text-sm leading-6 text-[#0A0A0A]/40">
            Your experience should leave you feeling confident, cared for
            and completely yourself.
          </p>

          <Link
            to="/booking"
            className="group inline-flex w-fit items-center gap-3 bg-[#0A0A0A] px-7 py-4 text-xs font-medium tracking-[0.18em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            START YOUR EXPERIENCE

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

export default Testimonials;