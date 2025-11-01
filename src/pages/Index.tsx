import Hero from "@/components/Hero";
import Equipment from "@/components/Equipment";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Equipment />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
