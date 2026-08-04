
import { motion } from "framer-motion";
import { FiArrowUpRight, FiShoppingBag } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "The Black Edit",
    category: "FASHION",
    price: "$85",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Signature Gold",
    category: "ACCESSORIES",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "After Dark",
    category: "FASHION",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "The Essential",
    category: "BEAUTY",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = ["ALL", "FASHION", "ACCESSORIES", "BEAUTY"];

function Boutique() {
  return (
    <section
      id="boutique"
      className="relative overflow-hidden bg-[#F5F2ED] py-28 text-[#0A0A0A] lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                The Boutique
              </span>
            </div>

            <h2 className="max-w-3xl text-5xl font-light leading-[0.92] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              STYLE
              <br />
              <span className="italic">BEYOND</span>
              <br />
              BEAUTY.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-sm lg:pb-2"
          >
            <p className="text-sm leading-6 text-[#0A0A0A]/55">
              Discover a curated collection of fashion, accessories and beauty
              essentials selected to complement the INBLACK experience.
            </p>

            <a
              href="/boutique"
              className="group mt-6 inline-flex items-center gap-3 border-b border-[#0A0A0A]/20 pb-2 text-xs font-medium tracking-[0.18em] transition-colors hover:border-[#C9A45C] hover:text-[#8C6D32]"
            >
              SHOP THE FULL COLLECTION

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-wrap gap-2 border-y border-[#0A0A0A]/10 py-5"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`px-5 py-2.5 text-[10px] tracking-[0.2em] transition-all duration-300 ${
                index === 0
                  ? "bg-[#0A0A0A] text-[#F5F2ED]"
                  : "text-[#0A0A0A]/50 hover:bg-[#0A0A0A] hover:text-[#F5F2ED]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products */}
        <div className="mt-12 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E4DD]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-[#0A0A0A]/0 transition-colors duration-500 group-hover:bg-[#0A0A0A]/20" />

                {/* Category */}
                <span className="absolute left-4 top-4 bg-[#F5F2ED] px-3 py-2 text-[9px] tracking-[0.18em]">
                  {product.category}
                </span>

                {/* Quick action */}
                <button
                  type="button"
                  aria-label={`Add ${product.name} to bag`}
                  className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-[#F5F2ED] text-[#0A0A0A] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#C9A45C]"
                >
                  <FiShoppingBag size={17} />
                </button>
              </div>

              {/* Product Info */}
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium tracking-wide">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#0A0A0A]/40">
                    INBLACK COLLECTION
                  </p>
                </div>

                <span className="text-sm font-medium">
                  {product.price}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-[#0A0A0A]/10 pt-8 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C9A45C]" />

            <span className="text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50">
              Curated for you
            </span>
          </div>

          <a
            href="/boutique"
            className="group flex items-center gap-3 bg-[#0A0A0A] px-7 py-4 text-xs font-medium tracking-[0.18em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            EXPLORE BOUTIQUE

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

export default Boutique;
