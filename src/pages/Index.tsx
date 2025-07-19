import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedGuides from "@/components/FeaturedGuides";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedGuides />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
