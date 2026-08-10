import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import hairImage from "../assets/hair.jpg";
import nailsImage from "../assets/nails.jpg";
import makeupImage from "../assets/makeup.jpg";
import therapyImage from "../assets/therapy.jpg";

const galleryImages = [
  {
    src: hairImage,
    alt: "INBLACK hair styling",
    category: "Hair",
    className: "md:row-span-2",
  },
  {
    src: nailsImage,
    alt: "INBLACK nail beauty",
    category: "Nails",
    className: "",
  },
  {
    src: makeupImage,
    alt: "INBLACK makeup",
    category: "Makeup",
    className: "",
  },
  {
    src: therapyImage,
    alt: "INBLACK wellness experience",
    category: "Wellness",
    className: "md:col-span-2",
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

const imageVariants = {
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
};

function Gallery() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] py-24 text-[#F5F2ED] sm:py-32">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-12">

        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
                The INBLACK Look
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              BEAUTY
              <br />

              <span className="font-serif italic text-[#C9A45C]">
                IN EVERY DETAIL.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-sm leading-7 text-white/50"
          >
            A glimpse into the world of INBLACK — our work, our atmosphere
            and the moments that make every experience unique.
          </motion.p>

        </div>

        {/* GALLERY GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid auto-rows-[280px] gap-4 md:grid-cols-3 md:auto-rows-[260px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.category}
              variants={imageVariants}
              className={`group relative overflow-hidden ${image.className}`}
            >
              {/* IMAGE */}
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full object-cover grayscale-[10%] transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              {/* DARK GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/10 to-transparent" />

              {/* GOLD HOVER */}
              <div className="absolute inset-0 bg-[#C9A45C]/0 transition-colors duration-700 group-hover:bg-[#C9A45C]/10" />

              {/* CATEGORY */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="h-px w-6 bg-[#C9A45C]" />

                <span className="text-[10px] uppercase tracking-[0.25em] text-white">
                  {image.category}
                </span>
              </div>

              {/* NUMBER */}
              <span className="absolute right-5 top-5 text-[10px] tracking-[0.2em] text-white/50">
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
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              More from INBLACK
            </p>

            <p className="mt-2 text-sm text-white/40">
              Explore the complete INBLACK gallery.
            </p>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex w-fit items-center gap-3 border border-white/20 px-7 py-4 text-[10px] font-medium tracking-[0.18em] text-[#F5F2ED] transition-all duration-300 hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
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