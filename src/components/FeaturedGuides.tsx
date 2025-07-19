import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GuideCard from "./GuideCard";

// Mock data for featured guides
const featuredGuides = [
  {
    id: "1",
    name: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 156,
    specialties: ["Heritage Sites", "City Palace", "Bala Quila"],
    languages: ["Hindi", "English", "Rajasthani"],
    pricePerHour: 800,
    location: "Alwar City",
    experience: "8 years",
    isVerified: true,
    responseTime: "5 min"
  },
  {
    id: "2", 
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b932?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    reviews: 89,
    specialties: ["Cultural Tours", "Local Markets", "Food Tours"],
    languages: ["Hindi", "English"],
    pricePerHour: 600,
    location: "Alwar Market",
    experience: "5 years",
    isVerified: true,
    responseTime: "10 min"
  },
  {
    id: "3",
    name: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 203,
    specialties: ["Adventure Tours", "Sariska Safari", "Trekking"],
    languages: ["Hindi", "English", "Punjabi"],
    pricePerHour: 1200,
    location: "Sariska Area",
    experience: "12 years",
    isVerified: true,
    responseTime: "3 min"
  },
  {
    id: "4",
    name: "Sunita Meena",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    rating: 4.7,
    reviews: 67,
    specialties: ["Village Tours", "Handicrafts", "Traditional Art"],
    languages: ["Hindi", "English", "Mewari"],
    pricePerHour: 500,
    location: "Rural Alwar",
    experience: "6 years",
    isVerified: true,
    responseTime: "15 min"
  }
];

const FeaturedGuides = () => {
  return (
    <section className="py-16 bg-heritage-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Tourist Guides
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet our top-rated guides who will make your Alwar experience unforgettable. 
            All guides are verified and have excellent reviews from travelers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredGuides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Guides
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;