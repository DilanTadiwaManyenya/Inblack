import { FiArrowUpRight, FiInstagram, FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Boutique", path: "/boutique" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
];

function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F5F2ED]">

      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">

          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2"
            >
              <span className="text-3xl font-semibold tracking-[0.3em]">
                INBLACK
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
              Beauty, wellness and style brought together in one
              thoughtfully designed experience.
            </p>

            <Link
              to="/booking"
              className="group mt-8 inline-flex items-center gap-3 border border-[#C9A45C]/60 px-6 py-4 text-xs tracking-[0.18em] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
            >
              BOOK AN APPOINTMENT

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]">
              Explore
            </p>

            <div className="mt-7 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="w-fit text-sm text-white/50 transition-colors duration-300 hover:text-[#F5F2ED]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]">
              Connect
            </p>

            <div className="mt-7 space-y-4 text-sm text-white/50">
              <a
                href="tel:+263000000000"
                className="block transition-colors hover:text-[#F5F2ED]"
              >
                +263 00 000 0000
              </a>

              <a
                href="mailto:hello@inblack.co.zw"
                className="block transition-colors hover:text-[#F5F2ED]"
              >
                hello@inblack.co.zw
              </a>

              <p>
                Harare, Zimbabwe
              </p>
            </div>

            {/* SOCIALS */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 transition-all duration-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
              >
                <FiInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/10 transition-all duration-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
              >
                <FiFacebook size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-20 border-t border-white/10 pt-7">

          <div className="flex flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/25 sm:flex-row">

            <p>
              © {new Date().getFullYear()} INBLACK Beauty & Wellness.
              All rights reserved.
            </p>

            <p>
              Beauty • Wellness • Style
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;