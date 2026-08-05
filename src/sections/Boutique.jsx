import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiShoppingBag,
  FiHeart,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const collections = [
  {
    number: "01",
    category: "BEAUTY",
    title: "Hair Essentials",
    description:
      "Carefully selected products to help you maintain healthy, beautiful hair long after your appointment.",
  },
  {
    number: "02",
    category: "WELLNESS",
    title: "Self Care",
    description:
      "Simple luxuries and wellness essentials designed to make your everyday self-care ritual feel special.",
  },
  {
    number: "03",
    category: "STYLE",
    title: "Beauty Accessories",
    description:
      "Finishing touches that complement your personal style and complete your INBLACK look.",
  },
];

const products = [
  {
    name: "Hair Care",
    description: "Everyday essentials for your hair.",
  },
  {
    name: "Body Care",
    description: "Treat your body with intention.",
  },
  {
    name: "Beauty",
    description: "Curated beauty favourites.",
  },
  {
    name: "Accessories",
    description: "Small details. Big difference.",
  },
];

function Boutique() {
  return (
    <main className="bg-[#F5F2ED] text-[#0A0A0A]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[75vh] overflow-hidden bg-[#0A0A0A] px-6 pb-20 pt-40 text-[#F5F2ED] lg:px-10 lg:pb-28">

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#C9A45C]/10 blur-[140px]" />

          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-7xl items-end">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
                INBLACK Boutique
              </span>
            </div>

            <h1 className="text-6xl font-light leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              BEAUTY
              <br />
              <span className="italic text-[#C9A45C]">
                TO TAKE HOME.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              A curated collection of beauty, wellness and lifestyle
              essentials chosen to extend the INBLACK experience beyond
              the salon.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-6 py-28 lg:px-10 lg:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1fr] lg:items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="h-[500px] overflow-hidden sm:h-[600px]">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85"
                  alt="INBLACK beauty products"
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 h-full w-full border border-[#C9A45C]/50" />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A45C]" />

                <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                  Curated With Intention
                </span>
              </div>

              <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                TAKE THE
                <br />
                <span className="italic">INBLACK FEELING</span>
                <br />
                WITH YOU.
              </h2>

              <div className="mt-8 space-y-5 text-sm leading-7 text-[#0A0A0A]/55">
                <p>
                  Our boutique is an extension of the INBLACK experience.
                  Every item is selected with beauty, self-care and personal
                  style in mind.
                </p>

                <p>
                  Whether you're looking after your hair, creating a relaxing
                  evening ritual or adding something special to your look,
                  you'll find pieces chosen to fit naturally into your life.
                </p>
              </div>

              <Link
                to="/booking"
                className="group mt-9 inline-flex items-center gap-3 bg-[#0A0A0A] px-7 py-4 text-xs font-medium tracking-[0.18em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
              >
                VISIT INBLACK

                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          COLLECTIONS
      ===================================================== */}
      <section className="border-t border-[#0A0A0A]/10 px-6 py-28 lg:px-10 lg:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                Collections
              </span>
            </div>

            <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              SOMETHING FOR
              <br />
              <span className="italic">EVERY RITUAL.</span>
            </h2>

          </div>

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
            className="grid gap-px bg-[#0A0A0A]/10 md:grid-cols-3"
          >
            {collections.map((collection) => (
              <motion.article
                key={collection.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                    },
                  },
                }}
                className="group relative bg-[#F5F2ED] p-8 lg:p-12"
              >
                <span className="absolute right-8 top-8 text-xs tracking-[0.2em] text-[#0A0A0A]/20">
                  {collection.number}
                </span>

                <div className="flex h-12 w-12 items-center justify-center border border-[#C9A45C]/50 text-[#8C6D32] transition-all duration-300 group-hover:bg-[#0A0A0A] group-hover:text-[#C9A45C]">
                  <FiShoppingBag size={18} />
                </div>

                <p className="mt-10 text-[10px] uppercase tracking-[0.3em] text-[#8C6D32]">
                  {collection.category}
                </p>

                <h3 className="mt-3 text-3xl font-light">
                  {collection.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#0A0A0A]/50">
                  {collection.description}
                </p>

                <div className="mt-8 h-px bg-[#0A0A0A]/10" />

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-3 text-xs tracking-[0.18em]"
                >
                  COMING SOON
                </button>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          PRODUCT CATEGORIES
      ===================================================== */}
      <section className="bg-[#0A0A0A] px-6 py-28 text-[#F5F2ED] lg:px-10 lg:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#C9A45C]" />

                <span className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  What You'll Find
                </span>
              </div>

              <h2 className="text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                CURATED
                <br />
                <span className="italic">FOR YOU.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/40">
              Our selection will continue to grow as we discover products
              and brands that align with the INBLACK philosophy.
            </p>

          </div>

          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">

            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group flex items-center justify-between bg-[#0A0A0A] p-8 lg:p-10"
              >
                <div className="flex items-center gap-6">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A45C]/50 text-[#C9A45C]">
                    <FiHeart size={17} />
                  </div>

                  <div>
                    <h3 className="text-xl font-light">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-xs text-white/35">
                      {product.description}
                    </p>
                  </div>

                </div>

                <FiArrowUpRight
                  size={20}
                  className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C9A45C]"
                />
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-6 py-28 text-center lg:px-10 lg:py-36">

        <div className="mx-auto max-w-3xl">

          <p className="text-xs uppercase tracking-[0.35em] text-[#8C6D32]">
            The INBLACK experience
          </p>

          <h2 className="mt-6 text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl">
            COME FOR THE
            <br />
            <span className="italic">BEAUTY.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-[#0A0A0A]/45">
            While our boutique continues to grow, your next beauty and
            wellness experience is already waiting.
          </p>

          <Link
            to="/booking"
            className="group mt-9 inline-flex items-center gap-3 bg-[#0A0A0A] px-8 py-5 text-xs font-medium tracking-[0.2em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            BOOK YOUR EXPERIENCE

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

export default Boutique;