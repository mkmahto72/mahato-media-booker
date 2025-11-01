import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 font-display">Mahato Media Hub</h3>
            <p className="opacity-90 leading-relaxed">
              Your trusted partner for professional camera and TV equipment rentals. Quality, reliability, and service excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#equipment" className="opacity-90 hover:opacity-100 hover:text-accent transition-smooth inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                  Equipment
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 hover:text-accent transition-smooth inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-3 opacity-90 hover:opacity-100 hover:text-accent transition-smooth group"
                >
                  <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-smooth">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@mahatomediahub.com" 
                  className="flex items-center gap-3 opacity-90 hover:opacity-100 hover:text-accent transition-smooth group"
                >
                  <div className="bg-accent/20 p-2 rounded-lg group-hover:bg-accent/30 transition-smooth">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>contact@mahatomediahub.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="opacity-75">
            © {new Date().getFullYear()} Mahato Media Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
