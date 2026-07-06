import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import CarsSection from "./components/sections/CarsSection.tsx";
import Services from "./components/sections/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Aktuální nabídka */}
      <CarsSection />

      {/* Hero */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}