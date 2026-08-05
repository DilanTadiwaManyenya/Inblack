import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Therapy from "../sections/Therapy";
import Boutique from "../sections/Boutique";
import Gallery from "../sections/Gallery";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";

function Home() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F2ED]">

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <Services />

      {/* THERAPY */}
      <Therapy />

      {/* BOUTIQUE */}
      <Boutique />

      {/* GALLERY */}
      <Gallery />

      {/* ABOUT */}
      <About />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FINAL CTA */}
      <CTA />

    </div>
  );
}

export default Home;