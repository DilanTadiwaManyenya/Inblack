
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const galleryItems = [
  {
    title: "Hair",
    category: "BEAUTY",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85",
    size: "large",
  },
  {
    title: "Nails",
    category: "BEAUTY",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    title: "Makeup",
    category: "BEAUTY",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
  {
    title: "Therapy",
    category: "WELLNESS",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
    size: "large",
  },
  {
    title: "The Boutique",
    category: "STYLE",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
    size: "small",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0A0A0A] py-28 text-[#F5F2ED] lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                The INBLACK World
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              BEAUTY
              <br />
              <span className="italic text-[#C9A45C]">IN EVERY</span>
              <br />
              DETAIL.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="max-w-sm text-sm leading-6 text-[#F5F2ED]/45 lg:pb-2"
          >
            A glimpse into the INBLACK experience — where beauty, wellness and
            personal style meet.
          </motion.p>
        </div>

        {/* Gallery */}
        <div className="grid gap-4 md:grid-cols-2">
          
          {/* Left Column */}
          <div className="space-y-4">
            {galleryItems.slice(0, 3).map((item, index) => (
              <GalleryCard
                key={item.title}
                item={item}
                index={index}
                tall={item.size === "large"}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:pt-24">
            {galleryItems.slice(3).map((item, index) => (
              <GalleryCard
                key={item.title}
                item={item}
                index={index + 3}
                tall={item.size === "large"}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="/gallery"
            className="group flex items-center gap-3 border border-[#F5F2ED]/20 px-7 py-4 text-xs font-medium tracking-[0.18em] transition-all duration-300 hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            VIEW FULL GALLERY

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({ item, index, tall }) {
  return (
    <motion.a
      href="/gallery"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
      }}
      className={`group relative block overflow-hidden ${
        tall ? "aspect-[4/5]" : "aspect-[4/3]"
      }`}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 lg:p-8">
        <div>
          <p className="mb-2 text-[9px] tracking-[0.25em] text-[#C9A45C]">
            {item.category}
          </p>

          <h3 className="text-3xl font-light tracking-[-0.03em] text-white lg:text-4xl">
            {item.title}
          </h3>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#0A0A0A]">
          <FiArrowUpRight size={17} />
        </div>
      </div>
    </motion.a>
  );
}

export default Gallery;

