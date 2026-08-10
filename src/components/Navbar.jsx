import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" }, { name: "Services", href: "/services" },
  { name: "Boutique", href: "/boutique" }, { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" }, { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const isLightPage = location.pathname === "/contact" || location.pathname.startsWith("/product/");
  const darkText = isLightPage && !scrolled;
  const textColor = darkText ? "text-[#0A0A0A]" : "text-[#F5F2ED]";

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 16);
    updateScrollState(); window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b border-white/10 bg-[#0A0A0A]/90 shadow-sm backdrop-blur-md" : ""}`}>
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <Link to="/" className={`relative z-50 inline-flex items-center gap-2 text-xl font-semibold tracking-[.27em] sm:text-2xl ${menuOpen ? "text-[#F5F2ED]" : textColor}`} aria-label="INBLACK home">
          INBLACK <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => <NavLink key={link.name} to={link.href} className={({ isActive }) => `relative py-2 text-xs tracking-wide transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#C9A45C] after:transition-all ${isActive ? "text-[#C9A45C] after:w-full" : `${textColor}/75 hover:text-[#C9A45C] after:w-0 hover:after:w-full`}`}>{link.name}</NavLink>)}
        </div>
        <Link to="/booking" className={`hidden items-center gap-2 border border-[#C9A45C]/70 px-4 py-3 text-[10px] font-medium tracking-[.16em] transition-colors hover:bg-[#C9A45C] hover:text-[#0A0A0A] md:inline-flex ${textColor}`}>
          BOOK NOW <FiArrowUpRight aria-hidden="true" />
        </Link>
        <button type="button" onClick={() => setMenuOpen((open) => !open)} className={`relative z-50 grid h-11 w-11 place-items-center md:hidden ${menuOpen ? "text-[#F5F2ED]" : textColor}`} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}>
          {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && <motion.div id="mobile-navigation" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reducedMotion ? undefined : { opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 flex min-h-dvh items-center bg-[#0A0A0A] px-7 pt-20 text-[#F5F2ED] md:hidden">
          <div className="w-full border-y border-white/10 py-7">{navLinks.map((link, index) => <motion.div key={link.name} initial={reducedMotion ? false : { opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.035, duration: 0.2 }}><NavLink to={link.href} onClick={() => setMenuOpen(false)} className={({ isActive }) => `flex items-center justify-between border-b border-white/10 py-4 text-3xl ${isActive ? "text-[#C9A45C]" : "text-[#F5F2ED]"}`}>{link.name}<span className="text-sm text-[#C9A45C]">0{index + 1}</span></NavLink></motion.div>)}<Link to="/booking" onClick={() => setMenuOpen(false)} className="mt-7 inline-flex items-center gap-3 bg-[#C9A45C] px-6 py-4 text-[10px] font-medium tracking-[.18em] text-[#0A0A0A]">BOOK YOUR EXPERIENCE <FiArrowUpRight aria-hidden="true" /></Link></div>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
