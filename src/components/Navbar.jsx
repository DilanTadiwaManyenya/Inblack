import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  Link,
  NavLink,
} from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Boutique", href: "/boutique" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group relative z-50 flex items-center gap-2"
        >
          <span className="text-2xl font-semibold tracking-[0.35em] text-[#F5F2ED]">
            INBLACK
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `relative text-sm tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-[#C9A45C]"
                    : "text-[#F5F2ED]/70 hover:text-[#C9A45C]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-[#C9A45C] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* BOOK NOW */}
        <Link
          to="/booking"
          className="hidden items-center gap-2 border border-[#C9A45C]/60 px-5 py-3 text-xs font-medium tracking-[0.15em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A] md:flex"
        >
          BOOK NOW
          <FiArrowUpRight size={15} />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 text-[#F5F2ED] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <FiX size={28} />
          ) : (
            <FiMenu size={28} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 flex min-h-screen w-full flex-col justify-center bg-[#0A0A0A] px-8 md:hidden"
          >
            <div className="flex flex-col gap-7">

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <NavLink
                    to={link.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `text-4xl font-light tracking-tight transition-colors ${
                        isActive
                          ? "text-[#C9A45C]"
                          : "text-[#F5F2ED] hover:text-[#C9A45C]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <Link
                to="/booking"
                onClick={closeMenu}
                className="mt-4 flex w-fit items-center gap-2 border border-[#C9A45C] px-6 py-4 text-sm tracking-[0.15em] text-[#C9A45C] transition-all hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
              >
                BOOK AN APPOINTMENT
                <FiArrowUpRight size={17} />
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;