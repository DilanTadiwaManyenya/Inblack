import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const categories = ["All", "Hair", "Nails", "Makeup", "Massage & Therapy"];

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const reducedMotion = useReducedMotion();
  const featuredService = services.find((service) => service.slug === "hair-styling");
  const visibleServices = useMemo(
    () => activeCategory === "All"
      ? services.filter((service) => service.slug !== featuredService?.slug)
      : services.filter((service) => service.category === activeCategory),
    [activeCategory, featuredService?.slug],
  );
  const therapyService = services.find((service) => service.slug === "relaxation-massage");
  const rise = reducedMotion ? {} : { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.45 } };

  return (
    <main className="overflow-hidden bg-[#F5F2ED] text-[#0A0A0A]">
      <section className="relative bg-[#0A0A0A] px-6 pb-20 pt-32 text-[#F5F2ED] sm:px-8 sm:pb-28 sm:pt-40 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,164,92,.14),transparent_28%)]" />
        <motion.div {...rise} className="relative mx-auto max-w-[1440px]">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#C9A45C]">Services</p>
          <h1 className="mt-7 max-w-4xl text-6xl leading-[0.84] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Beauty, wellness,<br /><em className="text-[#C9A45C]">and everything</em><br />in between.
          </h1>
          <p className="mt-9 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            INBLACK brings hair, nails, makeup and restorative therapy together in one considered experience—made around you.
          </p>
        </motion.div>
      </section>

      {featuredService && <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-9 flex items-end justify-between border-b border-[#0A0A0A]/10 pb-5">
            <div><p className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D32]">01 — Featured experience</p><h2 className="mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">The INBLACK edit</h2></div>
            <span className="hidden text-xs text-[#0A0A0A]/45 md:block">A signature moment, considered in full.</span>
          </div>
          <article className="grid bg-[#0A0A0A] text-[#F5F2ED] lg:grid-cols-[1.25fr_.75fr]">
            <div className="aspect-[5/4] overflow-hidden lg:aspect-auto"><img src={featuredService.image} alt={`${featuredService.name} at INBLACK Beauty & Wellness`} width="1200" height="960" loading="eager" fetchPriority="high" decoding="async" className="h-full w-full object-cover" /></div>
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12"><div><p className="text-[10px] uppercase tracking-[0.27em] text-[#C9A45C]">{featuredService.category}</p><h3 className="mt-5 text-5xl leading-[.85] tracking-[-0.05em] sm:text-6xl">{featuredService.name}</h3><p className="mt-7 max-w-sm text-sm leading-7 text-white/60">{featuredService.description}</p><div className="mt-9 flex gap-10 border-y border-white/15 py-5"><span><b className="block font-sans text-xl font-medium text-[#C9A45C]">{featuredService.duration}</b><span className="text-[9px] uppercase tracking-[.18em] text-white/45">Minutes</span></span><span><b className="block font-sans text-xl font-medium text-[#C9A45C]">{featuredService.price}</b><span className="text-[9px] uppercase tracking-[.18em] text-white/45">From</span></span></div></div><Link to={`/booking?service=${featuredService.slug}`} className="group mt-12 inline-flex w-fit items-center gap-3 border-b border-[#C9A45C] pb-2 text-[10px] uppercase tracking-[.18em] text-[#C9A45C] transition-colors hover:text-[#F5F2ED]">Book {featuredService.name}<FiArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></Link></div>
          </article>
        </div>
      </section>}

      <section className="border-y border-[#0A0A0A]/10 bg-white px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D32]">The complete collection</p>
              <h2 className="mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">Find your ritual.</h2>
            </div>
            <div className="-mx-6 flex max-w-full divide-x divide-[#0A0A0A]/10 overflow-x-auto border-y border-[#0A0A0A]/10 px-6 sm:mx-0 sm:px-0" role="group" aria-label="Filter services by category">
              {categories.map((category) => (
                <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}
                  className={`relative shrink-0 px-4 py-4 text-[10px] uppercase tracking-[0.16em] transition-colors after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:transition-transform ${activeCategory === category ? "bg-[#0A0A0A] text-[#F5F2ED] after:scale-x-100 after:bg-[#C9A45C]" : "hover:bg-[#F5F2ED] hover:text-[#8C6D32] after:scale-x-0 after:bg-[#8C6D32] hover:after:scale-x-100"}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visibleServices.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} priority={index < 2} />)}
          </div>
        </div>
      </section>

      {therapyService && <section className="bg-[#0A0A0A] px-6 py-20 text-[#F5F2ED] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="aspect-[5/4] overflow-hidden">
            <img src={therapyService.image} alt="Relaxing massage therapy at INBLACK" width="1000" height="800" loading="lazy" decoding="async" className="h-full w-full object-cover" />
          </div>
          <motion.div {...rise}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]">Therapy at INBLACK</p>
            <h2 className="mt-5 text-5xl leading-[.9] tracking-[-0.05em] sm:text-6xl">A quieter kind<br /><em className="text-[#C9A45C]">of care.</em></h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-white/60">Our therapy experiences create room to slow down, release tension and return to yourself.</p>
            <ul className="mt-8 space-y-3 text-sm text-white/75">
              {["Relaxation massage", "Deep tissue release", "Personalised wellness sessions"].map((item) => <li key={item} className="flex items-center gap-3"><FiCheck className="text-[#C9A45C]" aria-hidden="true" />{item}</li>)}
            </ul>
            <Link to="/booking?service=relaxation-massage" className="mt-10 inline-flex items-center gap-3 border-b border-[#C9A45C] pb-2 text-[10px] uppercase tracking-[0.18em] text-[#C9A45C] hover:text-[#F5F2ED]">Book a therapy session <FiArrowRight aria-hidden="true" /></Link>
          </motion.div>
        </div>
      </section>}

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-12 border-y border-[#0A0A0A]/10 py-16 md:grid-cols-[.8fr_1.2fr] md:items-start">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D32]">Why INBLACK</p>
          <div><h2 className="text-4xl leading-[.95] tracking-[-0.045em] sm:text-6xl">Every detail is intentional.</h2><div className="mt-9 grid gap-6 sm:grid-cols-3">{[["01", "Personal", "Every experience is thoughtfully tailored around you."], ["02", "Quality", "Exceptional care and attention to every detail."], ["03", "Experience", "Beauty, wellness and style brought together."]].map(([number, title, copy]) => <div key={number} className="border-t border-[#0A0A0A]/15 pt-4"><span className="text-[10px] tracking-[.2em] text-[#8C6D32]">{number}</span><h3 className="mt-3 text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-[#0A0A0A]/60">{copy}</p></div>)}</div></div>
        </div>
        <div className="mx-auto mt-16 max-w-3xl text-center"><p className="text-[10px] uppercase tracking-[0.3em] text-[#8C6D32]">Your moment starts here</p><h2 className="mt-5 text-5xl leading-[.9] tracking-[-0.05em] sm:text-6xl">Your time.<br /><em>Your ritual.</em></h2><p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#0A0A0A]/60">Book your next INBLACK experience and let us take care of the rest.</p><Link to="/booking" className="mt-9 inline-flex items-center gap-3 bg-[#0A0A0A] px-7 py-4 text-[10px] uppercase tracking-[.18em] text-[#F5F2ED] transition-colors hover:bg-[#C9A45C] hover:text-[#0A0A0A]">Book your experience <FiArrowRight aria-hidden="true" /></Link></div>
      </section>
    </main>
  );
}

export default ServicesPage;
