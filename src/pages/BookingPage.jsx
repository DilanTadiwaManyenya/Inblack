import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { FiCheck, FiClock } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";
import { services } from "../data/services";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

const getLocalDate = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
};

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service") || "";
  const initialService = services.some((service) => service.slug === requestedService)
    ? requestedService
    : "";
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: initialService,
    date: "",
    time: "",
    message: "",
    website: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");

    if (!isSupabaseConfigured || !supabase) {
      setSubmitError("Booking is not configured yet. Please contact INBLACK directly.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-booking", {
        body: {
          serviceSlug: formData.service,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          date: formData.date,
          time: formData.time,
          message: formData.message,
          website: formData.website,
        },
      });

      if (error || data?.error) {
        setSubmitError(data?.error || "We could not submit your request. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Booking request failed", error);
      setSubmitError("We could not connect to the booking service. Please try again.");
      return;
    } finally {
      setIsSubmitting(false);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const selectedService = services.find((service) => service.slug === formData.service);

  // Prevent users from selecting dates in the past.
  const today = getLocalDate();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F2ED]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pt-44">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-[#C9A45C]/10 blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/[0.03] blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs uppercase tracking-[0.35em] text-[#C9A45C]"
          >
            INBLACK Beauty & Wellness
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-5xl text-6xl font-light leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[7rem]"
          >
            BOOK YOUR
            <br />
            <span className="italic text-[#C9A45C]">
              EXPERIENCE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-9 max-w-2xl text-sm leading-7 text-white/45 md:text-base"
          >
            Choose your preferred service, tell us when you'd like
            to visit and we'll get back to you to confirm your
            appointment.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          SUCCESS STATE
      ===================================================== */}
      {submitted ? (
        <section className="px-6 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl border border-[#C9A45C]/30 bg-white/[0.02] px-7 py-16 text-center md:px-12 md:py-20"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A45C]/50 text-[#C9A45C]">
              <FiCheck size={25} />
            </div>

            <p className="mt-8 text-xs uppercase tracking-[0.35em] text-[#C9A45C]">
              Request Received
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight md:text-5xl">
              Your experience
              <br />
              <span className="italic">
                starts here.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/45">
              Thank you, {formData.name || "for choosing INBLACK"}.
              Our team will review your appointment request and
              contact you to confirm the details.
            </p>

            <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
              <div className="bg-[#0A0A0A] p-6 text-left">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Service
                </p>

                <p className="mt-2 text-sm">
                  {selectedService?.name || "Not specified"}
                </p>
              </div>

              <div className="bg-[#0A0A0A] p-6 text-left">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Preferred Date
                </p>

                <p className="mt-2 text-sm">
                  {formData.date || "Not specified"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-10 text-xs uppercase tracking-[0.2em] text-[#C9A45C] transition-colors hover:text-[#F5F2ED]"
            >
              Make another request
            </button>
          </motion.div>
        </section>
      ) : (
        /* =====================================================
           BOOKING AREA
        ===================================================== */
        <section className="px-6 pb-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            {/* =================================================
                LEFT INFORMATION
            ================================================= */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <div className="border-t border-white/10 pt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Your Appointment
                </p>

                <h2 className="mt-5 text-4xl font-light leading-[0.95] tracking-[-0.04em]">
                  LET'S MAKE
                  <br />
                  <span className="italic text-[#C9A45C]">
                    TIME FOR YOU.
                  </span>
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
                  Your time matters. Tell us what you need and when
                  you'd like to visit. We'll take care of the rest.
                </p>

                {/* Steps */}
                <div className="mt-10 border-t border-white/10">
                  <div className="flex gap-5 border-b border-white/10 py-6">
                    <span className="text-xs text-[#C9A45C]">
                      01
                    </span>

                    <div>
                      <p className="text-sm">
                        Choose your service
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/30">
                        Select the experience that's right for you.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 border-b border-white/10 py-6">
                    <span className="text-xs text-[#C9A45C]">
                      02
                    </span>

                    <div>
                      <p className="text-sm">
                        Choose your time
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/30">
                        Tell us your preferred date and time.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 border-b border-white/10 py-6">
                    <span className="text-xs text-[#C9A45C]">
                      03
                    </span>

                    <div>
                      <p className="text-sm">
                        Share your details
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/30">
                        Leave the best way for our team to reach you.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 py-6">
                    <span className="text-xs text-[#C9A45C]">04</span>
                    <div>
                      <p className="text-sm">INBLACK confirms your appointment</p>
                      <p className="mt-1 text-xs leading-5 text-white/30">We will contact you to finalise the details.</p>
                    </div>
                  </div>
                </div>

                {/* Small reassurance */}
                <div className="mt-8 flex items-center gap-3 text-xs text-white/30">
                  <FiClock
                    size={15}
                    className="text-[#C9A45C]"
                  />

                  <span>
                    Appointment requests are subject to confirmation.
                  </span>
                </div>
              </div>
            </motion.aside>

            {/* =================================================
                FORM
            ================================================= */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onSubmit={handleSubmit}
              className="border border-white/10 bg-white/[0.02] p-7 md:p-10 lg:p-12"
            >
              {/* FORM HEADER */}
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A45C]">
                  Appointment Request
                </p>

                <h2 className="mt-4 text-3xl font-light">
                  Tell us what you need.
                </h2>
              </div>

              {/* NAME + PHONE */}
              <div className="grid gap-8 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/35"
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
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#C9A45C]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/35"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    minLength="6"
                    maxLength="30"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#C9A45C]"
                  />
                </div>

              </div>

              {/* EMAIL */}
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/35"
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
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#C9A45C]"
                />
              </div>

              {/* SERVICE */}
              <div className="mt-8">
                <label
                  htmlFor="service"
                  className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/35"
                >
                  Service
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-white/15 bg-[#0A0A0A] px-0 py-4 text-sm text-white outline-none transition-colors focus:border-[#C9A45C]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service.id} value={service.slug}>
                      {service.name} — {service.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* DATE + TIME */}
              <div className="mt-8 grid gap-8 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="date"
                    className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/35"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={today}
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors focus:border-[#C9A45C]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/35"
                  >
                    Preferred Time
                  </label>

                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none transition-colors focus:border-[#C9A45C]"
                  />
                </div>

              </div>

              {/* MESSAGE */}
              <div className="mt-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs uppercase tracking-[0.2em] text-white/35"
                >
                  Additional Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  maxLength="2000"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Anything you'd like us to know?"
                  className="w-full resize-none border-b border-white/15 bg-transparent px-0 py-4 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#C9A45C]"
                />
              </div>

              <div className="sr-only" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" value={formData.website} onChange={handleChange} tabIndex="-1" autoComplete="off" />
              </div>

              {submitError && (
                <p className="mt-6 border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-100" role="alert">
                  {submitError}
                </p>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
              className="group mt-10 flex w-full items-center justify-center gap-3 bg-[#C9A45C] px-7 py-5 text-xs font-medium tracking-[0.2em] text-[#0A0A0A] transition-all duration-300 hover:bg-[#F5F2ED] disabled:cursor-wait disabled:opacity-60"
              >
                {isSubmitting ? "SENDING REQUEST…" : "REQUEST APPOINTMENT"}

                <FaArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="mt-5 text-center text-[11px] leading-5 text-white/25">
                By submitting this request, you understand that your
                appointment is only confirmed once contacted by INBLACK.
              </p>
            </motion.form>

          </div>
        </section>
      )}
    </main>
  );
}
