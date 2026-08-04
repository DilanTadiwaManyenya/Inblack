
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiScissors,
  FiHeart,
  FiStar,
  FiSmile,
} from "react-icons/fi";

const services = [
  {
    number: "01",
    title: "HAIR",
    description:
      "Precision cuts, styling, treatments and transformations designed around you.",
    icon: FiScissors,
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "NAILS",
    description:
      "Elegant manicures, pedicures and detailed nail artistry for every occasion.",
    icon: FiHeart,
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "MAKEUP",
    description:
      "From natural beauty to statement looks, created to make every moment unforgettable.",
    icon: FiStar,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    title: "THERAPY",
    description:
      "Slow down, breathe and reconnect with yourself through our relaxing treatments.",
    icon: FiSmile,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F5F2ED] py-28 text-[#0A0A0A] lg:py-40"
    >
      {/* Decorative text */}
      <div className="pointer-events-none absolute -right-20 top-20 hidden text-[10rem] font-light leading-none tracking-[-0.08em] text-[#0A0A0A]/[0.03] lg:block">
        BEAUTY
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-20 grid gap-10 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                What we do
              </span>
            </div>

            <h2 className="max-w-2xl text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              BEAUTY
              <br />
              <span className="italic">DEFINED</span>
              <br />
              YOUR WAY.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="max-w-md text-base leading-7 text-[#0A0A0A]/60">
              Every detail matters. Our beauty and wellness services are
              designed to help you look good, feel good and leave feeling
              completely yourself.
            </p>

            <a
              href="/services"
              className="group mt-7 inline-flex items-center gap-3 border-b border-[#0A0A0A]/20 pb-2 text-xs font-medium tracking-[0.18em] transition-colors hover:border-[#C9A45C] hover:text-[#8C6D32]"
            >
              VIEW ALL SERVICES

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-px overflow-hidden border border-[#0A0A0A]/10 bg-[#0A0A0A]/10 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative min-h-[520px] overflow-hidden bg-[#F5F2ED]"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent" />

                {/* Number */}
                <span className="absolute left-7 top-7 text-xs tracking-[0.2em] text-white/70">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="absolute right-7 top-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#0A0A0A]">
                  <Icon size={18} />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
                  <h3 className="text-4xl font-light tracking-[-0.03em] text-white lg:text-5xl">
                    {service.title}
                  </h3>

                  <div className="mt-4 max-w-md overflow-hidden">
                    <p className="text-sm leading-6 text-white/65">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href={`/services#${service.title.toLowerCase()}`}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-[#C9A45C]"
                  >
                    EXPLORE
                    <FiArrowUpRight size={15} />
                  </a>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#C9A45C] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

