import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiShoppingBag,
} from "react-icons/fi";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  // Product not found
  if (!product) {
    return (
      <main className="min-h-screen bg-[#F5F2ED] px-6 pt-40 text-[#0A0A0A]">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
            INBLACK Boutique
          </p>

          <h1 className="mt-6 text-5xl font-light">
            Product not found.
          </h1>

          <Link
            to="/boutique"
            className="mt-10 inline-flex items-center gap-3 bg-[#0A0A0A] px-7 py-4 text-xs tracking-[0.2em] text-[#F5F2ED]"
          >
            <FiArrowLeft />
            BACK TO BOUTIQUE
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F2ED] text-[#0A0A0A]">

      {/* TOP SPACING */}
      <section className="px-6 pb-20 pt-36 lg:px-10 lg:pt-44">

        <div className="mx-auto max-w-7xl">

          {/* Back */}
          <Link
            to="/boutique"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/50 transition-colors hover:text-[#8C6D32]"
          >
            <FiArrowLeft
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Boutique
          </Link>

          {/* PRODUCT */}
          <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#E9E4DC]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

              </div>

              {/* Decorative border */}
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full border border-[#C9A45C]/50" />
            </motion.div>

            {/* DETAILS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >

              <p className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                {product.category || "INBLACK Boutique"}
              </p>

              <h1 className="mt-5 text-5xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
                {product.name}
              </h1>

              <p className="mt-6 text-2xl font-light text-[#8C6D32]">
                {product.price}
              </p>

              <div className="my-8 h-px bg-[#0A0A0A]/10" />

              <p className="max-w-xl text-sm leading-7 text-[#0A0A0A]/60">
                {product.description}
              </p>

              {/* PRODUCT INFO */}
              <div className="mt-10 space-y-5 border-t border-[#0A0A0A]/10 pt-7">

                {product.category && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0A0A0A]/40">
                      Category
                    </span>

                    <span>
                      {product.category}
                    </span>
                  </div>
                )}

                {product.inStock !== undefined && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#0A0A0A]/40">
                      Availability
                    </span>

                    <span
                      className={
                        product.inStock
                          ? "text-green-700"
                          : "text-red-700"
                      }
                    >
                      {product.inStock
                        ? "In Stock"
                        : "Out of Stock"}
                    </span>
                  </div>
                )}

              </div>

              {/* ACTIONS */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button
                  type="button"
                  className="group inline-flex flex-1 items-center justify-center gap-3 bg-[#0A0A0A] px-7 py-5 text-xs font-medium tracking-[0.2em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
                >
                  <FiShoppingBag />

                  ENQUIRE ABOUT PRODUCT

                  <FiArrowUpRight
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-[#0A0A0A]/10 px-6 py-28 text-center">

        <p className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
          INBLACK Boutique
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light md:text-6xl">
          Discover more of our
          <span className="italic"> collection.</span>
        </h2>

        <Link
          to="/boutique"
          className="group mt-10 inline-flex items-center gap-3 bg-[#0A0A0A] px-8 py-5 text-xs tracking-[0.2em] text-[#F5F2ED] transition-all hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
        >
          VIEW BOUTIQUE

          <FiArrowUpRight
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>

      </section>

    </main>
  );
}