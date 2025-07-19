import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SearchResults from "@/components/SearchResults";
import Footer from "@/components/Footer";

interface SearchFilters {
  location: string;
  duration: string;
  guideType: string;
  priceRange: [number, number];
  rating: number;
  language: string;
  sortBy: string;
}

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: searchParams.get('location') || '',
    duration: searchParams.get('duration') || '',
    guideType: searchParams.get('guideType') || 'all',
    priceRange: [300, 2000],
    rating: 0,
    language: 'all',
    sortBy: 'popular'
  });

  useEffect(() => {
    // Update URL when filters change
    const params = new URLSearchParams();
    if (searchFilters.location) params.set('location', searchFilters.location);
    if (searchFilters.duration) params.set('duration', searchFilters.duration);
    if (searchFilters.guideType && searchFilters.guideType !== 'all') {
      params.set('guideType', searchFilters.guideType);
    }
    
    navigate(`/search?${params.toString()}`, { replace: true });
  }, [searchFilters.location, searchFilters.duration, searchFilters.guideType, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Back to Home */}
      <div className="border-b border-border bg-heritage-cream/20">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </div>
      </div>

      <SearchResults 
        searchFilters={searchFilters}
        onFiltersChange={setSearchFilters}
      />
      
      <Footer />
    </div>
  );
};

export default Search;