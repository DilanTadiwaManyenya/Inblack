import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { products } from "../data/products";

const setMetaContent = (selector, content) => {
  document.querySelector(selector)?.setAttribute("content", content);
};

function Layout() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    if (previousPath.current !== location.pathname) {
      window.scrollTo(0, 0);
      document.getElementById("main-content")?.focus({ preventScroll: true });
      previousPath.current = location.pathname;
    }
  }, [location.pathname]);

  useEffect(() => {
    const metadata = {
      "/": ["INBLACK | Beauty & Wellness", "Beauty, wellness and style brought together in one considered INBLACK experience."],
      "/services": ["INBLACK | Services", "Explore INBLACK hair, nails, makeup, massage and wellness services."],
      "/booking": ["INBLACK | Book an Appointment", "Request your INBLACK beauty or wellness appointment."],
      "/boutique": ["INBLACK | Boutique", "Discover the INBLACK boutique collection."],
      "/gallery": ["INBLACK | Gallery", "Explore the INBLACK beauty and wellness gallery."],
      "/about": ["INBLACK | About", "Learn about the INBLACK beauty and wellness experience."],
      "/contact": ["INBLACK | Contact", "Contact INBLACK for appointments and service enquiries."],
    };
    const productMatch = location.pathname.match(/^\/product\/([^/]+)$/);
    const product = productMatch
      ? products.find((item) => String(item.id) === productMatch[1])
      : null;
    const isKnownRoute = Boolean(metadata[location.pathname]);
    const isMissingPage = !isKnownRoute && !product;
    const [title, description] = product
      ? [`${product.name} | INBLACK Boutique`, product.description]
      : isMissingPage
        ? ["Page Not Found | INBLACK", "The requested INBLACK page could not be found."]
        : metadata[location.pathname];

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[name="robots"]', isMissingPage ? "noindex, follow" : "index, follow");
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A] text-[#F5F2ED]">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-[#C9A45C] px-5 py-3 text-xs font-medium tracking-[0.16em] text-[#0A0A0A] transition-transform focus:translate-y-0 motion-reduce:transition-none"
      >
        SKIP TO CONTENT
      </a>
      <Navbar />
      <div id="main-content" tabIndex="-1" className="flex-1 outline-none">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
