import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F2ED]">

      {/* HERO */}
      <section className="px-6 pt-36 pb-20 md:pt-44">
        <div className="mx-auto max-w-6xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 text-xs uppercase tracking-[0.35em] text-[#C9A45C]"
          >
            INBLACK Beauty & Wellness
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-5xl font-light leading-tight md:text-7xl"
          >
            Book your
            <span className="italic"> experience.</span>
          </motion.h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#F5F2ED]/50 md:text-lg">
            Choose your preferred service and let INBLACK take care
            of the rest. Your beauty and wellness journey starts here.
          </p>

        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="px-6 pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT INFO */}
          <div className="border-t border-white/10 pt-8">

            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Your appointment
            </p>

            <h2 className="mt-5 text-3xl font-light md:text-4xl">
              Let's make time
              <span className="italic"> for you.</span>
            </h2>

            <p className="mt-6 max-w-md leading-relaxed text-white/50">
              Complete the form and our team will get back to you
              to confirm your appointment.
            </p>

            <div className="mt-10 space-y-5 text-sm text-white/60">
              <p>01 — Choose your service</p>
              <p>02 — Tell us when you'd like to visit</p>
              <p>03 — Leave your contact details</p>
            </div>

          </div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 border border-white/10 bg-white/[0.02] p-7 md:p-10"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* NAME */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Your full name"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* SERVICE */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                Service
              </label>

              <select
                defaultValue=""
                className="w-full border-b border-white/15 bg-[#0A0A0A] px-0 py-4 text-white outline-none focus:border-[#C9A45C]"
              >
                <option value="" disabled>
                  Select a service
                </option>

                <option value="hair">Hair</option>
                <option value="nails">Nails</option>
                <option value="makeup">Makeup</option>
                <option value="massage">Massage & Therapy</option>
              </select>
            </div>

            {/* DATE + TIME */}
            <div className="grid gap-8 md:grid-cols-2">

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                  Preferred Date
                </label>

                <input
                  type="date"
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none focus:border-[#C9A45C]"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                  Preferred Time
                </label>

                <input
                  type="time"
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none focus:border-[#C9A45C]"
                />
              </div>

            </div>

            {/* MESSAGE */}
            <div>
              <label className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/40">
                Additional Message
              </label>

              <textarea
                rows="4"
                placeholder="Anything you'd like us to know?"
                className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-white outline-none placeholder:text-white/20 focus:border-[#C9A45C]"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 bg-[#C9A45C] px-7 py-5 text-sm font-medium tracking-[0.15em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#F5F2ED]"
            >
              REQUEST APPOINTMENT

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </motion.form>

        </div>
      </section>

    </main>
  );
}