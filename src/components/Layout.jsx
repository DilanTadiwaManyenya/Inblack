import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  const location = useLocation();
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
    const [title, description] = location.pathname.startsWith("/product/")
      ? ["INBLACK | Boutique", "Discover the INBLACK boutique collection."]
      : metadata[location.pathname] || metadata["/"];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A] text-[#F5F2ED]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
