
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function BoutiquePage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F2ED]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[65vh] items-center justify-center overflow-hidden px-6 pb-16 pt-32">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#C9A45C]/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs uppercase tracking-[0.4em] text-[#C9A45C]"
          >
            INBLACK Boutique
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-light leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl"
          >
            Beauty,
            <span className="italic text-[#C9A45C]"> curated.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/50"
          >
            Discover carefully selected beauty, haircare and wellness
            essentials designed to complement your INBLACK experience.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="border-y border-white/10 px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]">
                The Collection
              </p>

              <h2 className="text-4xl font-light leading-[0.95] tracking-[-0.04em] md:text-5xl">
                Take the
                <span className="italic text-[#C9A45C]">
                  {" "}
                  experience home.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/45">
              From everyday beauty essentials to carefully selected
              self-care products, the INBLACK Boutique brings the salon
              experience beyond our doors.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}
      <section className="px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]">
              Shop
            </p>

            <h2 className="text-4xl font-light tracking-[-0.04em] md:text-5xl">
              Featured{" "}
              <span className="italic text-[#C9A45C]">
                Essentials
              </span>
            </h2>
          </div>

          {products.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  imageWidth={product.imageWidth}
                  imageHeight={product.imageHeight}
                  inStock={product.inStock}
                  description={product.description}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="border border-white/10 px-6 py-20 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                Boutique collection coming soon
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">
            INBLACK Beauty & Wellness
          </p>

          <h2 className="text-4xl font-light leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Your beauty.
            <span className="italic text-[#C9A45C]">
              {" "}
              Your ritual.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/45">
            Looking for something specific? Visit us in person or
            get in touch with our team.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-8 py-4 text-[10px] font-medium tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#F5F2ED]"
            >
              BOOK AN EXPERIENCE

              <FaArrowRight size={13} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 text-[10px] font-medium tracking-[0.2em] text-[#F5F2ED] transition-all duration-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              CONTACT BOUTIQUE

              <FaArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

