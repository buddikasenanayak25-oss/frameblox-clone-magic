import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import BrandStory from "@/components/BrandStory";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import ComingSoonPopup from "@/components/ComingSoonPopup";

const Index = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <BrandStory />
        <FeaturedProducts />
      </main>
      <Footer />
      {showPopup && <ComingSoonPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Index;
