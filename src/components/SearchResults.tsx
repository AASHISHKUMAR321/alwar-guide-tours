import { useState, useEffect } from "react";
import { Filter, SortAsc, MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import GuideCard from "./GuideCard";

interface SearchFilters {
  location: string;
  duration: string;
  guideType: string;
  priceRange: [number, number];
  rating: number;
  language: string;
  sortBy: string;
}

interface SearchResultsProps {
  searchFilters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

// Extended mock data for guides
const allGuides = [
  {
    id: "1",
    name: "Rajesh Kumar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 156,
    specialties: ["Heritage Sites", "City Palace", "Bala Quila"],
    languages: ["Hindi", "English", "Rajasthani"],
    pricePerHour: 800,
    location: "City Palace, Alwar",
    experience: "8 years",
    isVerified: true,
    responseTime: "5 min",
    areas: ["City Palace", "Alwar Museum", "Moosi Maharani Chhatri"]
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
    responseTime: "10 min",
    areas: ["Alwar Market", "City Palace", "Local Villages"]
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
    location: "Sariska Tiger Reserve",
    experience: "12 years",
    isVerified: true,
    responseTime: "3 min",
    areas: ["Sariska Tiger Reserve", "Siliserh Lake", "Bhangarh Fort"]
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
    responseTime: "15 min",
    areas: ["Local Villages", "Neemrana Fort Palace", "Kesroli Hill Fort"]
  },
  {
    id: "5",
    name: "Amit Rajput",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    reviews: 134,
    specialties: ["Historical Tours", "Bala Quila", "Photography"],
    languages: ["Hindi", "English", "Urdu"],
    pricePerHour: 900,
    location: "Bala Quila Fort",
    experience: "10 years",
    isVerified: true,
    responseTime: "7 min",
    areas: ["Bala Quila Fort", "City Palace", "Alwar Museum"]
  },
  {
    id: "6",
    name: "Kavita Agarwal",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    rating: 4.6,
    reviews: 78,
    specialties: ["Lake Tours", "Boating", "Nature Walks"],
    languages: ["Hindi", "English"],
    pricePerHour: 700,
    location: "Siliserh Lake",
    experience: "4 years",
    isVerified: true,
    responseTime: "12 min",
    areas: ["Siliserh Lake", "Sariska Tiger Reserve", "Local Villages"]
  }
];

const SearchResults = ({ searchFilters, onFiltersChange }: SearchResultsProps) => {
  const [filteredGuides, setFilteredGuides] = useState(allGuides);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let filtered = [...allGuides];

    // Filter by location
    if (searchFilters.location) {
      filtered = filtered.filter(guide => 
        guide.areas.some(area => 
          area.toLowerCase().includes(searchFilters.location.toLowerCase())
        ) || guide.location.toLowerCase().includes(searchFilters.location.toLowerCase())
      );
    }

    // Filter by guide type/specialty
    if (searchFilters.guideType && searchFilters.guideType !== "all") {
      filtered = filtered.filter(guide =>
        guide.specialties.some(specialty =>
          specialty.toLowerCase().includes(searchFilters.guideType.toLowerCase())
        )
      );
    }

    // Filter by price range
    filtered = filtered.filter(guide =>
      guide.pricePerHour >= searchFilters.priceRange[0] &&
      guide.pricePerHour <= searchFilters.priceRange[1]
    );

    // Filter by rating
    if (searchFilters.rating > 0) {
      filtered = filtered.filter(guide => guide.rating >= searchFilters.rating);
    }

    // Filter by language
    if (searchFilters.language && searchFilters.language !== "all") {
      filtered = filtered.filter(guide =>
        guide.languages.some(lang =>
          lang.toLowerCase().includes(searchFilters.language.toLowerCase())
        )
      );
    }

    // Sort results
    switch (searchFilters.sortBy) {
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        filtered.sort((a, b) => a.pricePerHour - b.pricePerHour);
        break;
      case "price-high":
        filtered.sort((a, b) => b.pricePerHour - a.pricePerHour);
        break;
      case "reviews":
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case "experience":
        filtered.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
        break;
      default:
        // Default: popular (rating + reviews)
        filtered.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
    }

    setFilteredGuides(filtered);
  }, [searchFilters]);

  const updateFilter = (key: keyof SearchFilters, value: any) => {
    onFiltersChange({
      ...searchFilters,
      [key]: value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            {searchFilters.location ? `Guides in ${searchFilters.location}` : 'Available Guides'}
          </h2>
          <p className="text-muted-foreground">
            {filteredGuides.length} guides found
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
          
          <Select value={searchFilters.sortBy} onValueChange={(value) => updateFilter('sortBy', value)}>
            <SelectTrigger className="w-40">
              <SortAsc className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-background border shadow-lg z-50">
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
              <SelectItem value="experience">Most Experienced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="lg:col-span-1">
            <Card className="sticky top-4 bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Filter Results</h3>
                
                {/* Price Range */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">
                    Price Range: ₹{searchFilters.priceRange[0]} - ₹{searchFilters.priceRange[1]}/hour
                  </label>
                  <Slider
                    value={searchFilters.priceRange}
                    onValueChange={(value) => updateFilter('priceRange', value as [number, number])}
                    max={2000}
                    min={300}
                    step={100}
                    className="w-full"
                  />
                </div>

                {/* Guide Type */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Guide Type</label>
                  <Select value={searchFilters.guideType} onValueChange={(value) => updateFilter('guideType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border shadow-lg z-50">
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="heritage">Heritage Expert</SelectItem>
                      <SelectItem value="adventure">Adventure Guide</SelectItem>
                      <SelectItem value="cultural">Cultural Guide</SelectItem>
                      <SelectItem value="nature">Nature Guide</SelectItem>
                      <SelectItem value="food">Food Guide</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Language */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Language</label>
                  <Select value={searchFilters.language} onValueChange={(value) => updateFilter('language', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border shadow-lg z-50">
                      <SelectItem value="all">All Languages</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="rajasthani">Rajasthani</SelectItem>
                      <SelectItem value="punjabi">Punjabi</SelectItem>
                      <SelectItem value="urdu">Urdu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-2 block">Minimum Rating</label>
                  <div className="flex space-x-2">
                    {[0, 4.0, 4.5, 4.7, 4.8].map((rating) => (
                      <Button
                        key={rating}
                        variant={searchFilters.rating === rating ? "default" : "outline"}
                        size="sm"
                        onClick={() => updateFilter('rating', rating)}
                        className="flex items-center space-x-1"
                      >
                        <Star className="h-3 w-3" />
                        <span>{rating === 0 ? 'Any' : rating}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Results Grid */}
        <div className={`${showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
          {filteredGuides.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center bg-gradient-card">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No guides found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search for a different location.
              </p>
              <Button 
                variant="outline" 
                onClick={() => onFiltersChange({
                  ...searchFilters,
                  location: '',
                  guideType: 'all',
                  priceRange: [300, 2000],
                  rating: 0,
                  language: 'all'
                })}
              >
                Clear All Filters
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;