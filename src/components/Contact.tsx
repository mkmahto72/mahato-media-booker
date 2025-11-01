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
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book equipment? Contact us today
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="p-6 rounded-xl bg-card shadow-card border"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
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

          <div className="text-center p-8 rounded-xl bg-primary text-primary-foreground shadow-card">
            <h3 className="text-2xl font-bold mb-4">Book Your Equipment Now</h3>
            <p className="text-lg mb-6 opacity-90">
              Call us or send an email to discuss your requirements and get a quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                asChild
              >
                <a href="tel:+919876543210" className="text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                asChild
              >
                <a href="mailto:contact@mahatomediahub.com" className="text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
