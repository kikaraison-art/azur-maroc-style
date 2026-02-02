import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Signature from "@/components/Signature";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Press from "@/components/Press";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Signature />
      <Portfolio />
      <Services />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
