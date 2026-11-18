import { motion } from "framer-motion";
import { FiArrowUpRight, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

function ProductCard({
  id,
  name,
  category,
  price,
  image,
  imageWidth,
  imageHeight,
  inStock = true,
  description,
  index = 0,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative flex flex-col justify-between border border-white/10 bg-white/[0.02] p-5 transition-all duration-500 hover:border-[#C9A45C]/40 hover:bg-white/[0.04]"
    >
      <div>
        {/* Product Visual Container */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#141414]">
          {image ? (
            <img
              src={image}
              alt={name}
              width={imageWidth}
              height={imageHeight}
              decoding="async"
              className="h-full w-full object-cover grayscale-[15%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-white/20">
              <FiShoppingBag size={36} />
            </div>
          )}

          {/* Stock Badge */}
          {inStock !== undefined && (
            <span
              className={`absolute right-3 top-3 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] font-medium backdrop-blur-md ${
                inStock
                  ? "bg-[#0A0A0A]/80 text-[#C9A45C] border border-[#C9A45C]/30"
                  : "bg-red-950/80 text-red-300 border border-red-800/40"
              }`}
            >
              {inStock ? "Available" : "Sold Out"}
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="pt-6">
          {category && (
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C]">
              {category}
            </p>
          )}

          <div className="mt-2 flex items-start justify-between gap-3">
            <h3 className="text-xl font-light text-[#F5F2ED] transition-colors group-hover:text-[#C9A45C]">
              {name}
            </h3>

            {price && (
              <span className="whitespace-nowrap text-sm font-medium text-[#C9A45C]">
                {price}
              </span>
            )}
          </div>

          {description && (
            <p className="mt-3 text-xs leading-relaxed text-white/50 line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 border-t border-white/10 pt-4">
        {id ? (
          <Link
            to={`/product/${id}`}
            className="group/link flex items-center justify-between text-xs font-medium tracking-[0.18em] text-[#F5F2ED]/70 transition-colors hover:text-[#C9A45C]"
          >
            <span>VIEW DETAILS</span>
            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>
        ) : (
          <Link
            to="/contact"
            className="group/link flex items-center justify-between text-xs font-medium tracking-[0.18em] text-[#F5F2ED]/70 transition-colors hover:text-[#C9A45C]"
          >
            <span>ENQUIRE NOW</span>
            <FiArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>
        )}
      </div>
    </motion.article>
  );
}

export default ProductCard;
