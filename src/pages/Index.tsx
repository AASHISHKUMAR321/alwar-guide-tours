import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedGuides from "@/components/FeaturedGuides";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

interface SearchData {
  location: string;
  duration: string;
  guideType: string;
}

const Index = () => {
  const navigate = useNavigate();

  const handleSearch = (searchData: SearchData) => {
    // Navigate to search page with parameters
    const params = new URLSearchParams();
    if (searchData.location) params.set('location', searchData.location);
    if (searchData.duration) params.set('duration', searchData.duration);
    if (searchData.guideType) params.set('guideType', searchData.guideType);
    
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection onSearch={handleSearch} />
      <FeaturedGuides />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
