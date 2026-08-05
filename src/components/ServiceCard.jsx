import { motion } from "framer-motion";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

function ServiceCard({
  number,
  title,
  subtitle,
  description,
  price,
  duration,
  services = [],
  icon: Icon,
  bookingPath = "/booking",
  variant = "light", // 'light' (on cream bg) or 'dark' (on black bg)
  index = 0,
}) {
  const isDark = variant === "dark";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative overflow-hidden p-8 transition-all duration-500 lg:p-12 ${
        isDark
          ? "border border-white/10 bg-white/[0.02] hover:border-[#C9A45C]/40 hover:bg-white/[0.05]"
          : "bg-[#F5F2ED] hover:bg-white border border-[#0A0A0A]/5"
      }`}
    >
      {/* Number badge */}
      {number && (
        <span
          className={`absolute right-8 top-8 text-xs tracking-[0.2em] lg:right-12 lg:top-12 ${
            isDark ? "text-white/20" : "text-[#0A0A0A]/20"
          }`}
        >
          {number}
        </span>
      )}

      {/* Icon */}
      {Icon && (
        <div
          className={`flex h-12 w-12 items-center justify-center border transition-all duration-500 ${
            isDark
              ? "border-white/15 text-[#C9A45C] group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#0A0A0A]"
              : "border-[#C9A45C]/50 text-[#8C6D32] group-hover:bg-[#0A0A0A] group-hover:text-[#C9A45C]"
          }`}
        >
          {typeof Icon === "function" ? <Icon size={18} /> : Icon}
        </div>
      )}

      {/* Eyebrow Subtitle */}
      {subtitle && (
        <p
          className={`mt-8 text-[10px] uppercase tracking-[0.3em] ${
            isDark ? "text-[#C9A45C]" : "text-[#8C6D32]"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Title */}
      <h3
        className={`mt-2 text-3xl font-light tracking-tight lg:text-4xl ${
          isDark ? "text-[#F5F2ED]" : "text-[#0A0A0A]"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed ${
            isDark ? "text-white/50" : "text-[#0A0A0A]/55"
          }`}
        >
          {description}
        </p>
      )}

      {/* Price & Duration if provided */}
      {(price || duration) && (
        <div className="mt-6 flex items-center gap-4 text-xs">
          {price && (
            <span className="font-medium tracking-wide text-[#C9A45C]">
              {price}
            </span>
          )}
          {duration && (
            <span
              className={`flex items-center gap-1 ${
                isDark ? "text-white/40" : "text-[#0A0A0A]/40"
              }`}
            >
              <FiClock size={12} />
              {duration} mins
            </span>
          )}
        </div>
      )}

      {/* Sub-services list */}
      {services.length > 0 && (
        <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
          {services.map((item) => (
            <div
              key={item}
              className={`flex items-center justify-between text-xs transition-colors ${
                isDark ? "text-white/70" : "text-[#0A0A0A]/70"
              }`}
            >
              <span>{item}</span>
              <span
                className={`h-px w-6 transition-all group-hover:w-10 ${
                  isDark ? "bg-white/20 group-hover:bg-[#C9A45C]" : "bg-[#0A0A0A]/10 group-hover:bg-[#8C6D32]"
                }`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Action Link */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <Link
          to={bookingPath}
          className={`group/link inline-flex items-center gap-3 text-xs font-medium tracking-[0.18em] transition-colors ${
            isDark
              ? "text-[#F5F2ED] hover:text-[#C9A45C]"
              : "text-[#0A0A0A] hover:text-[#8C6D32]"
          }`}
        >
          <span>BOOK THIS SERVICE</span>
          <FiArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
