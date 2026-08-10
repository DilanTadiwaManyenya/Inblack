import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

function Services() {
  const featured = ["hair-styling", "manicure", "bridal-makeup", "relaxation-massage"]
    .map((slug) => services.find((service) => service.slug === slug))
    .filter(Boolean);

  return (
    <section id="services" className="bg-[#F5F2ED] px-6 py-24 text-[#0A0A0A] sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 border-b border-[#0A0A0A]/10 pb-9 md:flex-row md:items-end">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
            <p className="text-[10px] uppercase tracking-[.3em] text-[#8C6D32]">What we offer</p>
            <h2 className="mt-4 text-5xl leading-[.88] tracking-[-.05em] sm:text-6xl">Beauty,<br /><em>your way.</em></h2>
          </motion.div>
          <div><p className="max-w-md text-sm leading-7 text-[#0A0A0A]/60">From hair and nails to makeup and wellness, every INBLACK service is designed around confidence, care and your individual style.</p><Link to="/services" className="mt-5 inline-block border-b border-[#0A0A0A]/25 pb-2 text-[10px] uppercase tracking-[.18em] hover:border-[#C9A45C] hover:text-[#8C6D32]">Discover services →</Link></div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{featured.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div>
      </div>
    </section>
  );
}

export default Services;
