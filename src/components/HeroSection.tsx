import { useState } from "react";
import { Search, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import LocationSearch from "./LocationSearch";
import heroImage from "@/assets/alwar-hero.jpg";

interface SearchData {
  location: string;
  duration: string;
  guideType: string;
}

interface HeroSectionProps {
  onSearch?: (searchData: SearchData) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [searchData, setSearchData] = useState<SearchData>({
    location: "",
    duration: "4 hours",
    guideType: "Heritage Expert"
  });

  const handleLocationSelect = (location: any) => {
    setSearchData(prev => ({
      ...prev,
      location: location.name
    }));
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchData);
    }
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-primary/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover Alwar with
            <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Expert Local Guides
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book verified tourist guides in Alwar, Rajasthan. Experience the royal heritage, 
            hidden gems, and authentic culture with locals who know it best.
          </p>
          
          {/* Booking Card */}
          <Card className="bg-white/95 backdrop-blur-md p-6 max-w-2xl mx-auto shadow-royal">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {/* Location Search with Autocomplete */}
              <LocationSearch
                onLocationSelect={handleLocationSelect}
                defaultValue="City Palace, Alwar"
              />
              
              {/* Duration Select */}
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground z-10" />
                <Select value={searchData.duration} onValueChange={(value) => setSearchData(prev => ({ ...prev, duration: value }))}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg z-50">
                    <SelectItem value="2 hours">2 hours</SelectItem>
                    <SelectItem value="4 hours">4 hours</SelectItem>
                    <SelectItem value="6 hours">6 hours</SelectItem>
                    <SelectItem value="8 hours">Full Day</SelectItem>
                    <SelectItem value="2 days">2 days</SelectItem>
                    <SelectItem value="3 days">3 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Guide Type Select */}
              <div className="relative">
                <Star className="absolute left-3 top-3 h-5 w-5 text-muted-foreground z-10" />
                <Select value={searchData.guideType} onValueChange={(value) => setSearchData(prev => ({ ...prev, guideType: value }))}>
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Guide type" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border shadow-lg z-50">
                    <SelectItem value="Heritage Expert">Heritage Expert</SelectItem>
                    <SelectItem value="Adventure Guide">Adventure Guide</SelectItem>
                    <SelectItem value="Cultural Guide">Cultural Guide</SelectItem>
                    <SelectItem value="Nature Guide">Nature Guide</SelectItem>
                    <SelectItem value="Food Guide">Food Guide</SelectItem>
                    <SelectItem value="Photography Guide">Photography Guide</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              size="lg" 
              onClick={handleSearch}
              className="w-full bg-gradient-hero text-white shadow-royal hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Search className="mr-2 h-5 w-5" />
              Find Your Perfect Guide
            </Button>
            
            <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-muted-foreground">
              <span className="flex items-center">
                <Star className="h-4 w-4 text-accent mr-1 fill-current" />
                500+ Verified Guides
              </span>
              <span>Instant Booking</span>
              <span>24/7 Support</span>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Floating Stats */}
      <div className="absolute bottom-8 left-8 right-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { number: "10K+", label: "Happy Tourists" },
            { number: "500+", label: "Expert Guides" },
            { number: "4.9★", label: "Average Rating" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-md p-4 text-center shadow-card">
              <div className="text-2xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;