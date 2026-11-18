import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

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
    <BrowserRouter>
      <Suspense fallback={<main className="min-h-screen bg-[#0A0A0A]" aria-label="Loading page" />}>
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
  );
}

export default App;
