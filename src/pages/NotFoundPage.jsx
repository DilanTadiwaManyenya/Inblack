import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#0A0A0A] px-6 py-32 text-[#F5F2ED]">
      <section className="mx-auto w-full max-w-5xl border-y border-white/10 py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-[0.4em] text-[#C9A45C]">
          Error 404
        </p>

        <h1 className="mt-7 text-6xl font-light leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl">
          THIS PAGE HAS
          <br />
          <span className="italic text-[#C9A45C]">MOVED ON.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/45 md:text-base">
          The page you were looking for does not exist or may have moved.
          Let&apos;s get you back to the INBLACK experience.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 bg-[#C9A45C] px-8 py-4 text-xs font-medium tracking-[0.18em] text-[#0A0A0A] transition-colors hover:bg-[#F5F2ED]"
          >
            RETURN HOME
            <FiArrowUpRight aria-hidden="true" />
          </Link>

          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 text-xs font-medium tracking-[0.18em] transition-colors hover:border-[#C9A45C] hover:text-[#C9A45C]"
          >
            BOOK AN EXPERIENCE
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
