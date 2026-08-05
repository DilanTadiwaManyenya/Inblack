import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F2ED]">

      {/* HERO */}
      <section className="flex min-h-[65vh] items-center justify-center px-6 pt-32 pb-16">
        <div className="max-w-5xl text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-xs uppercase tracking-[0.4em] text-[#C9A45C]"
          >
            INBLACK Boutique
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-light tracking-tight md:text-7xl lg:text-8xl"
          >
            Beauty,
            <span className="italic text-[#C9A45C]"> curated.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/50"
          >
            Discover carefully selected beauty, haircare and wellness
            essentials designed to complement your INBLACK experience.
          </motion.p>

        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-white/10 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-2 md:items-end">

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                The Collection
              </p>

              <h2 className="text-4xl font-light md:text-5xl">
                Take the
                <span className="italic text-[#C9A45C]"> experience home.</span>
              </h2>
            </div>

            <p className="max-w-xl leading-relaxed text-white/50">
              From everyday beauty essentials to carefully selected
              self-care products, the INBLACK Boutique brings the
              salon experience beyond our doors.
            </p>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              Shop
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              Featured <span className="italic text-[#C9A45C]">Essentials</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
                inStock={product.inStock}
                description={product.description}
                index={index}
              />
            ))}
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-white/10 px-6 py-28">

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
            INBLACK Beauty & Wellness
          </p>

          <h2 className="text-4xl font-light md:text-6xl">
            Your beauty.
            <span className="italic text-[#C9A45C]"> Your ritual.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/50">
            Looking for something specific? Visit us in person or
            get in touch with our team.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-8 py-4 text-xs font-medium tracking-[0.2em] text-[#0A0A0A] transition-all hover:bg-[#F5F2ED]"
            >
              BOOK AN EXPERIENCE
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 text-xs font-medium tracking-[0.2em] text-[#F5F2ED] transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              CONTACT BOUTIQUE
              <FaArrowRight />
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}