import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
    alt: "INBLACK hair styling",
    category: "Hair",
    className: "md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85",
    alt: "INBLACK nail beauty",
    category: "Nails",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85",
    alt: "INBLACK makeup",
    category: "Makeup",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85",
    alt: "INBLACK wellness experience",
    category: "Wellness",
    className: "md:col-span-2",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#0A0A0A] px-6 py-28 text-[#F5F2ED] lg:px-10 lg:py-40"
    >
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

              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                The INBLACK Look
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              BEAUTY
              <br />
              <span className="italic">IN EVERY DETAIL.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-sm leading-7 text-white/50"
          >
            A glimpse into the world of INBLACK — our work, our atmosphere
            and the moments that make every experience unique.
          </motion.p>

        </div>

        {/* GALLERY GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-16 grid auto-rows-[280px] gap-4 md:grid-cols-3 md:auto-rows-[260px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: "easeOut",
                  },
                },
              }}
              className={`group relative overflow-hidden ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover grayscale-[15%] transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-80" />

              {/* Category */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="h-px w-6 bg-[#C9A45C]" />

                <span className="text-xs uppercase tracking-[0.25em] text-white">
                  {image.category}
                </span>
              </div>

              {/* Number */}
              <span className="absolute right-5 top-5 text-xs tracking-[0.2em] text-white/50">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              More from INBLACK
            </p>

            <p className="mt-2 text-sm text-white/40">
              Explore the complete INBLACK gallery.
            </p>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex w-fit items-center gap-3 border border-white/20 px-7 py-4 text-xs font-medium tracking-[0.18em] text-[#F5F2ED] transition-all duration-300 hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            VIEW FULL GALLERY

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

export default Gallery;