import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const contactDetails = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+263 77 000 0000",
    href: "tel:+263770000000",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "hello@inblack.co.zw",
    href: "mailto:hello@inblack.co.zw",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Harare, Zimbabwe",
    href: "https://maps.google.com/?q=Harare,Zimbabwe",
  },
];

const openingHours = [
  {
    day: "Monday — Friday",
    time: "08:00 — 18:00",
  },
  {
    day: "Saturday",
    time: "08:00 — 16:00",
  },
  {
    day: "Sunday",
    time: "By Appointment",
  },
];

export default function ContactPage() {
  const [formNotice, setFormNotice] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormNotice("Messaging is not configured yet. Please call or email INBLACK directly and our team will be happy to help.");
  };

  return (
    <main className="bg-[#F5F2ED] text-[#0A0A0A]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="px-6 pb-24 pt-40 lg:px-10 lg:pb-32 lg:pt-48">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.35em] text-[#8C6D32]">
                Get In Touch
              </span>
            </div>

            <h1 className="max-w-6xl text-6xl font-light leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              LET&apos;S
              <br />
              <span className="italic text-[#C9A45C]">TALK.</span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <p className="max-w-xl text-base leading-7 text-[#0A0A0A]/55 md:text-lg">
                Have a question, want to book an appointment or simply
                want to know more about INBLACK? We&apos;d love to hear
                from you.
              </p>

              <span className="hidden text-xs uppercase tracking-[0.25em] text-[#0A0A0A]/25 md:block">
                INBLACK / CONTACT
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}
      <section className="bg-[#0A0A0A] px-6 py-24 text-[#F5F2ED] lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* =================================================
              CONTACT DETAILS
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              Contact INBLACK
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              We&apos;re here
              <span className="italic text-[#C9A45C]"> for you.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
              Reach out to our team for appointments, service enquiries,
              boutique questions or anything else you&apos;d like to know.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-12 space-y-8">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={
                      detail.label === "Location" ? "_blank" : undefined
                    }
                    rel={
                      detail.label === "Location"
                        ? "noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A45C]/40 text-[#C9A45C] transition-all duration-300 group-hover:border-[#C9A45C] group-hover:bg-[#C9A45C] group-hover:text-[#0A0A0A]">
                      <Icon size={17} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                        {detail.label}
                      </p>

                      <p className="mt-2 text-sm text-white/75 transition-colors duration-300 group-hover:text-[#C9A45C]">
                        {detail.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* OPENING HOURS */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <div className="mb-6 flex items-center gap-3">
                <FiClock className="text-[#C9A45C]" size={16} />

                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  Opening Hours
                </p>
              </div>

              <div className="space-y-4">
                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between gap-6 text-sm"
                  >
                    <span className="text-white/50">{item.day}</span>

                    <span className="text-white/75">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                Follow INBLACK
              </p>

              <p className="text-sm leading-6 text-white/50">Social profiles will be added when official handles are available.</p>
            </div>
          </motion.div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}
          <motion.form
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="border border-white/10 bg-white/[0.02] p-7 md:p-10 lg:p-12"
            onSubmit={handleSubmit}
          >
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                  Send us a message
                </p>

                <h3 className="mt-4 text-2xl font-light md:text-3xl">
                  How can we
                  <span className="italic text-[#C9A45C]">
                    {" "}
                    help?
                  </span>
                </h3>
              </div>

              <span className="hidden text-xs tracking-[0.2em] text-white/20 sm:block">
                01 — 05
              </span>
            </div>

            {/* NAME */}
            <div className="mb-8">
              <label
                htmlFor="name"
                className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                minLength="2"
                maxLength="120"
                required
                placeholder="Your full name"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* EMAIL */}
            <div className="mb-8">
              <label
                htmlFor="email"
                className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                maxLength="254"
                required
                placeholder="you@example.com"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* PHONE */}
            <div className="mb-8">
              <label
                htmlFor="phone"
                className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40"
              >
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                maxLength="30"
                placeholder="Your phone number"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* SUBJECT */}
            <div className="mb-8">
              <label
                htmlFor="subject"
                className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40"
              >
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                defaultValue=""
                required
                className="w-full border-b border-white/15 bg-[#0A0A0A] px-0 py-4 text-sm text-white outline-none transition-colors focus:border-[#C9A45C]"
              >
                <option value="" disabled>
                  Select a subject
                </option>

                <option value="appointment">
                  Appointment
                </option>

                <option value="services">
                  Services
                </option>

                <option value="boutique">
                  Boutique
                </option>

                <option value="general">
                  General Enquiry
                </option>
              </select>
            </div>

            {/* MESSAGE */}
            <div className="mb-10">
              <label
                htmlFor="message"
                className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength="2000"
                required
                placeholder="How can we help?"
                className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 bg-[#C9A45C] px-7 py-5 text-xs font-medium tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#F5F2ED]"
            >
              SEND MESSAGE

              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            {formNotice && <p className="mt-5 border border-[#C9A45C]/30 bg-[#C9A45C]/10 px-4 py-3 text-sm leading-6 text-[#F5F2ED]" role="status">{formNotice}</p>}

            <p className="mt-5 text-center text-[10px] leading-5 tracking-wide text-white/25">
              We&apos;ll get back to you as soon as possible.
            </p>
          </motion.form>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="px-6 py-28 text-center lg:px-10 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#8C6D32]">
            Ready when you are
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Let&apos;s make your
            <span className="italic text-[#C9A45C]"> moment.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#0A0A0A]/45">
            If you already know what you&apos;re looking for, skip the
            enquiry and reserve your INBLACK experience directly.
          </p>

          <Link
            to="/booking"
            className="group mt-10 inline-flex items-center gap-3 bg-[#0A0A0A] px-8 py-5 text-xs font-medium tracking-[0.2em] text-[#F5F2ED] transition-all duration-300 hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            BOOK AN APPOINTMENT

            <FiArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
