import { Star, MapPin, Clock, Languages, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Guide {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  specialties: string[];
  languages: string[];
  pricePerHour: number;
  location: string;
  experience: string;
  isVerified: boolean;
  responseTime: string;
}

interface GuideCardProps {
  guide: Guide;
}

const GuideCard = ({ guide }: GuideCardProps) => {
  return (
    <Card className="group hover:shadow-royal transition-all duration-300 transform hover:-translate-y-1 bg-gradient-card border-0">
      <CardContent className="p-0">
        {/* Guide Image */}
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={guide.image} 
            alt={guide.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            {guide.isVerified && (
              <Badge className="bg-accent/90 text-accent-foreground">
                ✓ Verified
              </Badge>
            )}
          </div>
          <div className="absolute top-3 right-3">
            <Button size="icon" variant="ghost" className="h-8 w-8 bg-white/20 backdrop-blur-md hover:bg-white/30">
              <Heart className="h-4 w-4 text-white" />
            </Button>
          </div>
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-secondary/90 text-secondary-foreground">
              {guide.responseTime}
            </Badge>
          </div>
        </div>
        
        {/* Guide Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {guide.name}
              </h3>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {guide.location}
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-accent fill-current mr-1" />
                <span className="font-medium">{guide.rating}</span>
                <span className="text-muted-foreground text-sm ml-1">
                  ({guide.reviews})
                </span>
              </div>
            </div>
          </div>
          
          {/* Experience and Languages */}
          <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {guide.experience}
            </div>
            <div className="flex items-center">
              <Languages className="h-4 w-4 mr-1" />
              {guide.languages.join(", ")}
            </div>
          </div>
          
          {/* Specialties */}
          <div className="flex flex-wrap gap-1 mb-4">
            {guide.specialties.slice(0, 3).map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
            {guide.specialties.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{guide.specialties.length - 3} more
              </Badge>
            )}
          </div>
          
          {/* Price and Booking */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">
                ₹{guide.pricePerHour}
              </span>
              <span className="text-muted-foreground text-sm">/hour</span>
            </div>
            <Button className="bg-gradient-hero hover:shadow-royal transition-all duration-300">
              Book Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuideCard;