import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const ServicesPage = lazy(() => import("./pages/servicesPage"));
const BookingPage = lazy(() => import("./pages/BookingPage"));
const Boutique = lazy(() => import("./pages/Boutique"));
const Gallery = lazy(() => import("./pages/Gallery"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
      <Suspense fallback={(
        <main className="grid min-h-screen place-items-center bg-[#0A0A0A] text-[#F5F2ED]" aria-live="polite" aria-busy="true">
          <div className="text-center">
            <span className="mx-auto block h-10 w-10 animate-pulse rounded-full border border-[#C9A45C] motion-reduce:animate-none" aria-hidden="true" />
            <span className="mt-5 block text-xs uppercase tracking-[0.3em] text-white/50">Loading INBLACK</span>
          </div>
        </main>
      )}>
      <Routes>

        {/* Global Layout */}
        <Route element={<Layout />}>

          {/* Homepage */}
          <Route path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Boutique Product */}
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Fallback */}
          <Route path="*" element={<NotFoundPage />} />

        </Route>

      </Routes>
      </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
