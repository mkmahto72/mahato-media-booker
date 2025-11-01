import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@mahatomediahub.com",
    href: "mailto:contact@mahatomediahub.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Serving clients across India",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 9:00 AM - 8:00 PM",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book equipment? Let's make your project shine
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="p-8 rounded-2xl glass-card hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="bg-accent/10 p-4 rounded-xl group-hover:bg-accent/20 transition-smooth">
                    <info.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-2 font-medium">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-lg font-semibold hover:text-accent transition-smooth"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-12 rounded-3xl gradient-hero text-white shadow-hover relative overflow-hidden animate-fade-in-up">
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Book Your Equipment Now</h3>
              <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                Call us or send an email to discuss your requirements and get a personalized quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg group"
                  asChild
                >
                  <a href="tel:+919876543210">
                    <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Call Now
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                  asChild
                >
                  <a href="mailto:contact@mahatomediahub.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
