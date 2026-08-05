import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

function GalleryCard({
  src,
  alt,
  title,
  category,
  className = "",
  aspectHeight = "h-[450px]",
  index = 0,
  onClick,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      onClick={onClick}
      className={`group relative overflow-hidden bg-[#0A0A0A] ${className}`}
    >
      <div className={`relative w-full overflow-hidden ${aspectHeight}`}>
        <img
          src={src}
          alt={alt || title || "INBLACK Gallery image"}
          className="h-full w-full object-cover grayscale-[15%] transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

        {/* Content Box */}
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
          {category && (
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]">
              {category}
            </p>
          )}

          <div className="mt-2 flex items-end justify-between gap-4">
            {title && (
              <h3 className="text-2xl font-light text-[#F5F2ED] sm:text-3xl lg:text-4xl">
                {title}
              </h3>
            )}

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-[#F5F2ED] transition-all duration-300 group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#0A0A0A]">
              <FiArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default GalleryCard;
