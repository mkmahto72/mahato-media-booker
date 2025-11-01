import Hero from "@/components/Hero";
import Equipment from "@/components/Equipment";
import Events from "@/components/Events";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Equipment />
      <Events />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
