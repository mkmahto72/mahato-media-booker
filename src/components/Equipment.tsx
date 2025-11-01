import { Camera, Tv, CheckCircle } from "lucide-react";
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
    <section id="equipment" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Equipment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade equipment for every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {equipment.map((item) => (
            <Card 
              key={item.title} 
              className="overflow-hidden shadow-card hover:shadow-hover transition-smooth border-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                    <item.icon className="h-8 w-8" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
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
