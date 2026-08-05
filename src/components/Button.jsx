import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  icon = true,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) {
  // Base classes
  const baseClasses =
    "group inline-flex items-center justify-center font-medium tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A45C] disabled:pointer-events-none disabled:opacity-50";

  // Variant styling
  const variants = {
    primary:
      "bg-[#C9A45C] text-[#0A0A0A] hover:bg-[#F5F2ED] hover:text-[#0A0A0A]",
    secondary:
      "bg-[#F5F2ED] text-[#0A0A0A] hover:bg-[#C9A45C] hover:text-[#0A0A0A]",
    outline:
      "border border-[#C9A45C]/60 text-[#F5F2ED] hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0A0A0A]",
    dark:
      "bg-[#0A0A0A] text-[#F5F2ED] border border-white/10 hover:border-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0A0A0A]",
    ghost:
      "text-[#F5F2ED]/70 hover:text-[#C9A45C] p-0 bg-transparent",
  };

  // Size styling
  const sizes = {
    sm: "px-5 py-3 text-[11px]",
    md: "px-7 py-4 text-xs",
    lg: "px-8 py-5 text-xs",
  };

  const combinedClasses = `${baseClasses} ${variants[variant] || variants.primary} ${
    variant !== "ghost" ? sizes[size] || sizes.md : ""
  } ${className}`;

  const renderContent = () => (
    <>
      <span>{children}</span>
      {icon && (
        <FiArrowUpRight
          size={16}
          className="ml-2.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {renderContent()}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
}

export default Button;
