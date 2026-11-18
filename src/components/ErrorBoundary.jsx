import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("INBLACK application error", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="flex min-h-screen items-center bg-[#0A0A0A] px-6 py-24 text-[#F5F2ED]">
        <section className="mx-auto w-full max-w-4xl border-y border-white/10 py-20 text-center" role="alert">
          <p className="text-xs uppercase tracking-[0.4em] text-[#C9A45C]">
            Something went wrong
          </p>
          <h1 className="mt-6 text-5xl font-light tracking-[-0.05em] sm:text-7xl">
            LET&apos;S TRY THAT
            <br />
            <span className="italic text-[#C9A45C]">ONCE MORE.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-white/50">
            We could not load this experience. Refresh the page, or return home and continue exploring INBLACK.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="bg-[#C9A45C] px-8 py-4 text-xs font-medium tracking-[0.18em] text-[#0A0A0A] transition-colors hover:bg-[#F5F2ED]"
            >
              TRY AGAIN
            </button>
            <a
              href="/"
              className="border border-white/20 px-8 py-4 text-xs font-medium tracking-[0.18em] transition-colors hover:border-[#C9A45C] hover:text-[#C9A45C]"
            >
              RETURN HOME
            </a>
          </div>
        </section>
      </main>
    );
  }
}

export default ErrorBoundary;
