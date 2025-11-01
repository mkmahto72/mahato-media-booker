import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-equipment.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
            Mahato Media Hub
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Professional Camera & TV Equipment Rental Services
          </p>
          <p className="text-lg text-white/80 mb-10">
            Your trusted partner for high-quality equipment rentals. From cinema cameras to professional displays, we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact" className="text-lg">
                Get Started
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-white/30 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <a href="#equipment">
                View Equipment
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-white">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-3 hover:text-accent transition-smooth"
            >
              <Phone className="h-5 w-5" />
              <span className="text-lg">+91 98765 43210</span>
            </a>
            <a 
              href="mailto:contact@mahatomediahub.com" 
              className="flex items-center gap-3 hover:text-accent transition-smooth"
            >
              <Mail className="h-5 w-5" />
              <span className="text-lg">contact@mahatomediahub.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
