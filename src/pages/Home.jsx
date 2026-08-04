
import Navbar from "../components/Navbar";

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Therapy from "../sections/Therapy";
import Boutique from "../sections/Boutique";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F2ED]">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Therapy />
        <Boutique />
        <Gallery />
        <About />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default Home;

