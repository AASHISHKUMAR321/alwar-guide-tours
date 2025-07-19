import { MapPin, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">GuideRaj</h1>
              <p className="text-xs text-muted-foreground">Alwar Tourism</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-sm">
              <Star className="h-4 w-4 text-accent fill-current" />
              <span className="font-medium">4.9</span>
              <span className="text-muted-foreground">Rating</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-royal shadow-royal">
              Become Guide
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;