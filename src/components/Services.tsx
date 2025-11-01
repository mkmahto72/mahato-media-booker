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
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional service you can trust
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="text-center p-6 rounded-xl bg-card shadow-card hover:shadow-hover transition-smooth border"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full gradient-accent">
                <service.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
