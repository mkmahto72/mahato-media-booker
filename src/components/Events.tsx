import { Heart, Cake, PartyPopper, Calendar } from "lucide-react";

const events = [
  {
    icon: Heart,
    title: "Weddings & Marriages",
    description: "Complete camera and display solutions for your special day. Professional videography and photography equipment to capture every moment.",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Make birthdays memorable with our cameras and entertainment displays. Perfect for capturing celebrations and showcasing photos.",
  },
  {
    icon: PartyPopper,
    title: "Parties & Celebrations",
    description: "From intimate gatherings to grand celebrations, we have the right equipment for every party and festive occasion.",
  },
  {
    icon: Calendar,
    title: "Corporate Events",
    description: "Professional displays and recording equipment for conferences, seminars, product launches, and business events.",
  },
];

const Events = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="mb-6">Perfect for Every Occasion</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We cater to all types of events and celebrations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="text-center p-8 rounded-2xl glass-card hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl gradient-accent shadow-lg group-hover:scale-110 transition-transform">
                <event.icon className="h-10 w-10 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{event.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
