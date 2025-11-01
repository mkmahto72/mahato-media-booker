import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Mahato Media Hub</h3>
            <p className="opacity-90">
              Your trusted partner for professional camera and TV equipment rentals.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#equipment" className="opacity-90 hover:opacity-100 hover:text-accent transition-smooth">
                  Equipment
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 hover:text-accent transition-smooth">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@mahatomediahub.com" 
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 hover:text-accent transition-smooth"
                >
                  <Mail className="h-4 w-4" />
                  contact@mahatomediahub.com
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
