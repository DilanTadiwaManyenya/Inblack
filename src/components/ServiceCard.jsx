import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

function ServiceCard({ service, index = 0, priority = false }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.2) }}
      className="group flex min-w-0 flex-col bg-[#F5F2ED]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0A0A0A]">
        {imageFailed ? (
          <div className="flex h-full items-end bg-[#0A0A0A] p-6 text-[#F5F2ED]">
            <span className="text-xs uppercase tracking-[0.28em] text-[#C9A45C]">INBLACK · {service.category}</span>
          </div>
        ) : (
          <img
            src={service.image}
            alt={`${service.name} at INBLACK Beauty & Wellness`}
            width="800"
            height="1000"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.03]"
          />
        )}
        <span className="absolute left-5 top-5 bg-[#0A0A0A]/80 px-3 py-2 text-[9px] uppercase tracking-[0.22em] text-[#F5F2ED]">
          {service.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col border-x border-b border-[#0A0A0A]/10 p-6 sm:p-7">
        <h3 className="text-3xl leading-none tracking-[-0.035em]">{service.name}</h3>
        <p className="mt-4 text-sm leading-6 text-[#0A0A0A]/60">{service.description}</p>
        <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#8C6D32]">
          <FiClock aria-hidden="true" /> {service.duration} min <span aria-hidden="true">·</span> {service.price}
        </div>
        <Link
          to={`/booking?service=${encodeURIComponent(service.slug)}`}
          className="group/link mt-7 inline-flex w-fit items-center gap-2 border-b border-[#0A0A0A]/20 pb-2 text-[10px] font-medium tracking-[0.18em] transition-colors hover:border-[#C9A45C] hover:text-[#8C6D32]"
          aria-label={`Book ${service.name}`}
        >
          BOOK SERVICE <FiArrowUpRight aria-hidden="true" className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
