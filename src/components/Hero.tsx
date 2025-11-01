import { Phone, Mail, ArrowDown } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/80" />
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <span className="text-accent-foreground text-sm font-semibold">Professional Equipment Rental</span>
          </div>
          
          <h1 className="text-white mb-6 leading-tight">
            Mahato Media<br />
            <span className="text-gradient">Hub</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/95 mb-6 leading-relaxed font-medium">
            Premium Camera & TV Rentals
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
            Your trusted partner for high-quality equipment rentals. From cinema cameras to professional displays, we deliver excellence for every project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg group" asChild>
              <a href="#contact">
                Get Started
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="#equipment">
                View Equipment
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="tel:+919876543210" 
              className="flex items-center gap-3 text-white hover:text-accent transition-smooth group glass-card px-5 py-3 rounded-xl w-fit"
            >
              <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-smooth">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-lg font-medium">+91 98765 43210</span>
            </a>
            <a 
              href="mailto:contact@mahatomediahub.com" 
              className="flex items-center gap-3 text-white hover:text-accent transition-smooth group glass-card px-5 py-3 rounded-xl w-fit"
            >
              <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-smooth">
                <Mail className="h-5 w-5" />
              </div>
              <span className="text-lg font-medium">contact@mahatomediahub.com</span>
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
