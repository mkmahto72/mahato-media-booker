import { Clock, Shield, Headphones, Truck } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Flexible Rental",
    description: "Hourly, daily, weekly, or monthly rental options to suit your project timeline",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All equipment is professionally maintained and tested before every rental",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock technical support to help you with any equipment issues",
  },
  {
    icon: Truck,
    title: "Delivery Available",
    description: "Equipment delivery and pickup services available in your area",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional service you can trust, every time
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="text-center p-8 rounded-2xl glass-card hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl gradient-accent shadow-lg group-hover:scale-110 transition-transform">
                <service.icon className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
