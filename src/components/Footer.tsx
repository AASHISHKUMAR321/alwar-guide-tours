import { MapPin, Phone, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-accent" />
              <div>
                <h3 className="text-xl font-bold">GuideRaj</h3>
                <p className="text-sm text-secondary-foreground/80">Alwar Tourism</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              Connecting travelers with the best local guides in Alwar, Rajasthan. 
              Experience authentic culture and heritage with verified experts.
            </p>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-accent fill-current" />
              <span className="font-medium">4.9</span>
              <span className="text-secondary-foreground/80 text-sm">(2,500+ reviews)</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Find Guides</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Popular Tours</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Become a Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">About Alwar</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>help@guideraj.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Alwar, Rajasthan, India</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-accent font-medium">24/7 Customer Support</p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-secondary-foreground/80 mb-4 text-sm">
              Get the latest updates on new guides, special offers, and travel tips.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
              />
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2024 GuideRaj. All rights reserved. Made with ❤️ for Alwar Tourism</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;