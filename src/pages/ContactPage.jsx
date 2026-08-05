import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiInstagram,
} from "react-icons/fi";

const contactDetails = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+263 77 000 0000",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "hello@inblack.co.zw",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Harare, Zimbabwe",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F2ED] text-[#0A0A0A]">

      {/* HERO */}
      <section className="px-6 pb-24 pt-40 lg:px-10 lg:pb-32 lg:pt-48">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A45C]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#8C6D32]">
                Get In Touch
              </span>
            </div>

            <h1 className="max-w-6xl text-6xl font-light leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              LET'S
              <br />
              <span className="italic">TALK.</span>
            </h1>

            <p className="mt-10 max-w-xl text-base leading-7 text-[#0A0A0A]/55 md:text-lg">
              Have a question, want to book an appointment or simply want
              to know more about INBLACK? We'd love to hear from you.
            </p>
          </motion.div>

        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="bg-[#0A0A0A] px-6 py-24 text-[#F5F2ED] lg:px-10 lg:py-32">

        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
              Contact INBLACK
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              We’re here
              <span className="italic"> for you.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
              Reach out to our team for appointments, service enquiries,
              boutique questions or anything else you'd like to know.
            </p>

            <div className="mt-12 space-y-8">

              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="flex items-start gap-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A45C]/40 text-[#C9A45C]">
                      <Icon size={17} />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                        {detail.label}
                      </p>

                      <p className="mt-2 text-sm text-white/75">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* SOCIAL */}
            <div className="mt-12 border-t border-white/10 pt-8">

              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
                Follow INBLACK
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#C9A45C]"
              >
                <FiInstagram />
                Instagram
                <FiArrowUpRight size={14} />
              </a>

            </div>

          </motion.div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/[0.02] p-7 md:p-10"
            onSubmit={(e) => e.preventDefault()}
          >

            <p className="mb-10 text-xs uppercase tracking-[0.3em] text-white/30">
              Send us a message
            </p>

            {/* NAME */}
            <div className="mb-8">
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your full name"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* EMAIL */}
            <div className="mb-8">
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* PHONE */}
            <div className="mb-8">
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* SUBJECT */}
            <div className="mb-8">
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                Subject
              </label>

              <select
                defaultValue=""
                className="w-full border-b border-white/15 bg-[#0A0A0A] px-0 py-4 text-sm text-white outline-none focus:border-[#C9A45C]"
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
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="How can we help?"
                className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 bg-[#C9A45C] px-7 py-5 text-xs font-medium tracking-[0.2em] text-[#0A0A0A] transition-all hover:bg-[#F5F2ED]"
            >
              SEND MESSAGE

              <FiArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

          </motion.form>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 py-28 text-center lg:px-10">

        <div className="mx-auto max-w-4xl">

          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#8C6D32]">
            Ready when you are
          </p>

          <h2 className="text-4xl font-light md:text-6xl">
            Let's make your
            <span className="italic"> moment.</span>
          </h2>

          <a
            href="/booking"
            className="mt-10 inline-flex items-center gap-3 bg-[#0A0A0A] px-8 py-4 text-xs font-medium tracking-[0.2em] text-[#F5F2ED] transition-all hover:bg-[#C9A45C] hover:text-[#0A0A0A]"
          >
            BOOK AN APPOINTMENT
            <FiArrowUpRight size={16} />
          </a>

        </div>

      </section>

    </main>
  );
}