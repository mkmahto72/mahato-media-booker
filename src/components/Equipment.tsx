import { Camera, Tv, CheckCircle, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import cameraImage from "@/assets/camera-equipment.jpg";
import tvImage from "@/assets/tv-display.jpg";

const equipment = [
  {
    title: "Professional Cameras",
    description: "Cinema-grade cameras for all your production needs",
    image: cameraImage,
    icon: Camera,
    features: [
      "4K & 8K Cinema Cameras",
      "DSLR & Mirrorless Systems",
      "Professional Lenses",
      "Camera Rigs & Stabilizers",
    ],
  },
  {
    title: "TV & Displays",
    description: "High-quality displays for events and presentations",
    image: tvImage,
    icon: Tv,
    features: [
      "4K & 8K Smart TVs",
      "Commercial Grade Displays",
      "LED Video Walls",
      "Projectors & Screens",
    ],
  },
];

const Equipment = () => {
  return (
    <section id="equipment" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/10 rounded-full">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-accent font-semibold text-sm">Premium Equipment</span>
          </div>
          <h2 className="mb-6">Our Equipment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade equipment for every project, delivered with excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {equipment.map((item, index) => (
            <Card 
              key={item.title} 
              className="overflow-hidden hover-lift glass-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="bg-accent text-accent-foreground p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl">{item.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4">
                  {item.features.map((feature, idx) => (
                    <li key={feature} className="flex items-start gap-3 group/item">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-foreground/90 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
