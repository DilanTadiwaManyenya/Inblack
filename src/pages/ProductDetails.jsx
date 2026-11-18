import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiShoppingBag,
  FiCheck,
  FiX,
} from "react-icons/fi";
import { products } from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  // --------------------------------------------------
  // PRODUCT NOT FOUND
  // --------------------------------------------------
  if (!product) {
    return (
      <main className="min-h-screen bg-[#F5F2ED] px-6 pb-24 pt-36 text-[#0A0A0A] lg:px-10">
        <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#8C6D32]">
            INBLACK Boutique
          </p>

          <h1 className="mt-6 text-5xl font-light tracking-[-0.04em] sm:text-6xl">
            Product not found.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#0A0A0A]/50">
            The product you're looking for may have been removed or is
            currently unavailable.
          </p>

          <Link
            to="/boutique"
            className="group mt-10 inline-flex items-center gap-3 bg-[#0A0A0A] px-7 py-4 text-xs font-medium tracking-[0.2em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            <FiArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            BACK TO BOUTIQUE
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F2ED] text-[#0A0A0A]">

      {/* =====================================================
          PRODUCT
      ===================================================== */}
      <section className="px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="mx-auto max-w-7xl">

          {/* BACK LINK */}
          <Link
            to="/boutique"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#0A0A0A]/45 transition-colors duration-300 hover:text-[#8C6D32]"
          >
            <FiArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back to Boutique
          </Link>

          {/* PRODUCT CONTENT */}
          <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">

            {/* =================================================
                IMAGE
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E9E4DC]">
                <img
                  src={product.image}
                  alt={product.name}
                  width="1000"
                  height="1250"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  loading="eager"
                  decoding="async"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 via-transparent to-transparent" />
              </div>

              {/* GOLD FRAME */}
              <div className="pointer-events-none absolute -bottom-5 -left-5 h-full w-full border border-[#C9A45C]/50" />

              {/* PRODUCT NUMBER */}
              <div className="absolute bottom-6 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#0A0A0A] text-xs tracking-[0.15em] text-[#C9A45C]">
                {String(product.id).padStart(2, "0")}
              </div>
            </motion.div>

            {/* =================================================
                DETAILS
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {/* CATEGORY */}
              <p className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                {product.category || "INBLACK Boutique"}
              </p>

              {/* TITLE */}
              <h1 className="mt-5 text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {product.name}
              </h1>

              {/* PRICE */}
              <p className="mt-7 text-2xl font-light text-[#8C6D32]">
                {product.price}
              </p>

              <div className="my-8 h-px bg-[#0A0A0A]/10" />

              {/* DESCRIPTION */}
              <p className="max-w-xl text-sm leading-7 text-[#0A0A0A]/60">
                {product.description}
              </p>

              {/* PRODUCT INFORMATION */}
              <div className="mt-10 border-t border-[#0A0A0A]/10">

                {/* CATEGORY */}
                {product.category && (
                  <div className="flex items-center justify-between border-b border-[#0A0A0A]/10 py-5 text-sm">
                    <span className="text-[#0A0A0A]/40">
                      Category
                    </span>

                    <span className="font-medium">
                      {product.category}
                    </span>
                  </div>
                )}

                {/* AVAILABILITY */}
                {product.inStock !== undefined && (
                  <div className="flex items-center justify-between border-b border-[#0A0A0A]/10 py-5 text-sm">
                    <span className="text-[#0A0A0A]/40">
                      Availability
                    </span>

                    <span
                      className={`inline-flex items-center gap-2 ${
                        product.inStock
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {product.inStock ? (
                        <FiCheck size={14} />
                      ) : (
                        <FiX size={14} />
                      )}

                      {product.inStock
                        ? "In Stock"
                        : "Out of Stock"}
                    </span>
                  </div>
                )}

              </div>

              {/* ACTION */}
              <div className="mt-10">
                {product.inStock !== false ? (
                  <Link
                    to={`/contact?subject=boutique&product=${encodeURIComponent(product.name)}`}
                    className="group flex w-full items-center justify-center gap-3 bg-[#0A0A0A] px-7 py-5 text-xs font-medium tracking-[0.2em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
                  >
                    <FiShoppingBag size={17} />

                    ENQUIRE ABOUT PRODUCT

                    <FiArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                ) : (
                  <div className="flex w-full items-center justify-center gap-3 border border-[#0A0A0A]/15 px-7 py-5 text-xs font-medium tracking-[0.2em] text-[#0A0A0A]/40">
                    CURRENTLY UNAVAILABLE
                  </div>
                )}
              </div>

              {/* SMALL NOTE */}
              <p className="mt-5 text-center text-[11px] leading-5 text-[#0A0A0A]/35">
                Product availability and pricing may vary.
                Contact INBLACK for the latest information.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOUTIQUE STATEMENT
      ===================================================== */}
      <section className="border-t border-[#0A0A0A]/10 px-6 py-28 text-center lg:px-10 lg:py-36">
        <div className="mx-auto max-w-4xl">

          <p className="text-xs uppercase tracking-[0.35em] text-[#8C6D32]">
            INBLACK Boutique
          </p>

          <h2 className="mt-6 text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl">
            TAKE THE
            <br />
            <span className="italic">
              EXPERIENCE HOME.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-[#0A0A0A]/45">
            Discover more beauty, wellness and lifestyle essentials
            carefully selected by INBLACK.
          </p>

          <Link
            to="/boutique"
            className="group mt-10 inline-flex items-center gap-3 bg-[#0A0A0A] px-8 py-5 text-xs font-medium tracking-[0.2em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            VIEW BOUTIQUE

            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

    </main>
  );
}
