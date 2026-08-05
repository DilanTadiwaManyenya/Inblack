import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const galleryItems = [
  {
    title: "Hair",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Nails",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Makeup",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Wellness",
    category: "Therapy",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Beauty Rituals",
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "The INBLACK Experience",
    category: "Studio",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
  },
];

function Gallery() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F2ED]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[75vh] overflow-hidden px-6 pb-20 pt-40 lg:px-10 lg:pb-28">

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
                The INBLACK Gallery
              </span>
            </div>

            <h1 className="text-6xl font-light leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              BEAUTY
              <br />
              <span className="italic text-[#C9A45C]">
                IN FRAME.
              </span>
            </h1>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/50 md:text-base">
              A glimpse into the world of INBLACK — beauty, wellness,
              creativity and moments designed to make you feel your best.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          GALLERY GRID
      ===================================================== */}
      <section className="px-6 pb-32 lg:px-10 lg:pb-40">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                Selected Moments
              </p>

              <h2 className="mt-3 text-3xl font-light sm:text-4xl">
                INSIDE INBLACK
              </h2>
            </div>

            <span className="hidden text-xs tracking-[0.2em] text-white/25 sm:block">
              01 — 06
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {galleryItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className={`group relative overflow-hidden ${
                  index === 0 || index === 5
                    ? "md:row-span-2"
                    : ""
                }`}
              >

                <div
                  className={`relative overflow-hidden ${
                    index === 0 || index === 5
                      ? "h-[650px]"
                      : "h-[450px]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">

                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]">
                      {item.category}
                    </p>

                    <div className="mt-3 flex items-end justify-between gap-5">

                      <h3 className="text-3xl font-light sm:text-4xl">
                        {item.title}
                      </h3>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#0A0A0A]">
                        <FiArrowUpRight size={18} />
                      </div>

                    </div>

                  </div>
                </div>

              </motion.article>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ===================================================== */}
      <section className="border-t border-white/10 px-6 py-28 text-center lg:px-10 lg:py-36">

        <div className="mx-auto max-w-4xl">

          <p className="text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
            More than a picture
          </p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-7 text-5xl font-light leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl"
          >
            YOUR BEAUTY.
            <br />
            <span className="italic text-[#C9A45C]">
              YOUR STORY.
            </span>
          </motion.h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/40">
            Every appointment creates a moment worth remembering.
            Come experience INBLACK for yourself.
          </p>

          <Link
            to="/booking"
            className="group mt-10 inline-flex items-center gap-3 bg-[#F5F2ED] px-8 py-5 text-xs font-medium tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#C9A45C]"
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

export default Gallery;