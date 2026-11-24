import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import CarsSection from "../components/sections/CarsSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CarsSection />
      <Contact />
      <Footer />
    </>
  );
}