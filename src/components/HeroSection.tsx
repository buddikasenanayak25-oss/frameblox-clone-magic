import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-model.jpg";

const HeroSection = () => {
  const features = [
    {
      number: "01",
      title: "Limited Drops, Maximum Impact",
      isActive: true
    },
    {
      number: "02", 
      title: "Built for the Streets",
      isActive: false
    },
    {
      number: "03",
      title: "Art Meets Attitude", 
      isActive: false
    },
    {
      number: "04",
      title: "Future-Ready Fashion",
      isActive: false
    },
    {
      number: "05",
      title: "Community-Driven Culture",
      isActive: false
    }
  ];

  return (
    <section className="relative min-h-[80vh] bg-gradient-hero overflow-hidden">
      <div className="container-custom h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Left Content */}
          <div className="space-y-8 text-white z-10 relative">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
                LIMITED DROPS,<br />
                <span className="text-white/90">MAXIMUM IMPACT</span>
              </h1>
              <p className="text-lg text-white/80 max-w-md leading-relaxed">
                We release exclusive, small-batch collections to keep your style fresh and unique—once it's gone, it's gone.
              </p>
            </div>

            <Button variant="hero" size="lg" className="group">
              Shop now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Feature Navigation */}
            <div className="space-y-4 pt-8">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className={`flex items-center space-x-4 cursor-pointer transition-all duration-300 ${
                    feature.isActive ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <div className={`w-8 h-0.5 transition-all duration-300 ${
                    feature.isActive ? 'bg-white' : 'bg-white/30'
                  }`} />
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold">{feature.number}</span>
                    <span className="text-sm font-medium">{feature.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={heroImage}
                alt="Streetwear model in orange hoodie"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;