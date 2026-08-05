import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

function TestimonialCard({
  quote,
  name,
  service,
  rating = 5,
  number,
  index = 0,
  variant = "light",
}) {
  const isDark = variant === "dark";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative flex flex-col justify-between p-8 transition-all duration-500 lg:p-10 ${
        isDark
          ? "border border-white/10 bg-white/[0.02] hover:border-[#C9A45C]/40"
          : "bg-[#F5F2ED] border border-[#0A0A0A]/5 hover:bg-white"
      }`}
    >
      <div>
        {/* Number Badge */}
        {number && (
          <span
            className={`absolute right-8 top-8 text-xs tracking-[0.2em] ${
              isDark ? "text-white/20" : "text-[#0A0A0A]/20"
            }`}
          >
            {number}
          </span>
        )}

        {/* Star Rating */}
        <div className="flex gap-1 text-[#C9A45C]">
          {Array.from({ length: rating }).map((_, i) => (
            <FiStar key={i} size={14} fill="currentColor" />
          ))}
        </div>

        {/* Quote */}
        <blockquote
          className={`mt-8 font-serif text-lg font-light leading-relaxed tracking-[0.01em] lg:text-xl ${
            isDark ? "text-[#F5F2ED]" : "text-[#0A0A0A]"
          }`}
        >
          "{quote}"
        </blockquote>
      </div>

      {/* Client Info */}
      <div
        className={`mt-10 border-t pt-6 ${
          isDark ? "border-white/10" : "border-[#0A0A0A]/10"
        }`}
      >
        <p
          className={`text-xs font-medium tracking-[0.2em] uppercase ${
            isDark ? "text-[#F5F2ED]" : "text-[#0A0A0A]"
          }`}
        >
          {name}
        </p>

        {service && (
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-[#8C6D32]">
            {service}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default TestimonialCard;
