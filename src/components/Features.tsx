import { Shield, Clock, Star, MapPin, Phone, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Verified Guides",
    description: "All our guides are thoroughly verified and background checked for your safety and peace of mind."
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Book your guide in seconds, just like ordering a cab. No waiting, no hassle."
  },
  {
    icon: Star,
    title: "Top Rated",
    description: "Only the best guides with 4.5+ ratings and excellent reviews from previous tourists."
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Our guides are locals who know every hidden gem, story, and secret of Alwar."
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you before, during, and after your tour."
  },
  {
    icon: Zap,
    title: "Real-time Tracking",
    description: "Track your guide's location and get live updates, just like your favorite ride-sharing app."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose GuideRaj?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the future of tourist guiding with our modern platform that connects you 
            with the best local guides in Alwar, Rajasthan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-royal transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-hero mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;