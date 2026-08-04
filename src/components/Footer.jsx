
import { motion } from "framer-motion";
import {
  FiInstagram,
  FiFacebook,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Boutique", href: "#boutique" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
];

const serviceLinks = [
  { name: "Hair", href: "#services" },
  { name: "Nails", href: "#services" },
  { name: "Makeup", href: "#services" },
  { name: "Therapy", href: "#therapy" },
];

function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F5F2ED]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-14 border-b border-[#F5F2ED]/10 py-20 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2"
            >
              <span className="text-3xl font-semibold tracking-[0.3em]">
                INBLACK
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A45C]" />
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#F5F2ED]/45">
              Beauty, wellness and personal style brought together in one
              unforgettable experience.
            </p>

            {/* Socials */}
            <div className="mt-8 flex gap-3">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-[#F5F2ED]/15 transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]"
              >
                <FiInstagram size={16} />
              </a>

              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-[#F5F2ED]/15 transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]"
              >
                <FiFacebook size={16} />
              </a>
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-[10px] tracking-[0.25em] text-[#C9A45C]">
              EXPLORE
            </h3>

            <div className="mt-7 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-[#F5F2ED]/55 transition-colors hover:text-[#F5F2ED]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[10px] tracking-[0.25em] text-[#C9A45C]">
              SERVICES
            </h3>

            <div className="mt-7 flex flex-col gap-4">
              {serviceLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-[#F5F2ED]/55 transition-colors hover:text-[#F5F2ED]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-[10px] tracking-[0.25em] text-[#C9A45C]">
              FIND US
            </h3>

            <div className="mt-7 space-y-5">

              <div className="flex gap-3">
                <FiMapPin
                  className="mt-1 shrink-0 text-[#C9A45C]"
                  size={16}
                />

                <p className="text-sm leading-6 text-[#F5F2ED]/55">
                  Your location
                  <br />
                  Zimbabwe
                </p>
              </div>

              <a
                href="tel:+263000000000"
                className="flex items-center gap-3 text-sm text-[#F5F2ED]/55 transition-colors hover:text-[#F5F2ED]"
              >
                <FiPhone className="text-[#C9A45C]" size={16} />
                +263 00 000 0000
              </a>

              <a
                href="mailto:hello@inblack.co.zw"
                className="flex items-center gap-3 text-sm text-[#F5F2ED]/55 transition-colors hover:text-[#F5F2ED]"
              >
                <FiMail className="text-[#C9A45C]" size={16} />
                hello@inblack.co.zw
              </a>
            </div>

            <a
              href="#booking"
              className="group mt-7 inline-flex items-center gap-3 text-xs tracking-[0.18em] text-[#C9A45C]"
            >
              BOOK AN APPOINTMENT

              <FiArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-5 py-7 text-[10px] tracking-[0.15em] text-[#F5F2ED]/30 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} INBLACK. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-6">
            <a
              href="#privacy"
              className="transition-colors hover:text-[#F5F2ED]"
            >
              PRIVACY
            </a>

            <a
              href="#terms"
              className="transition-colors hover:text-[#F5F2ED]"
            >
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
