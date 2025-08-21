import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EssentialBlackTee = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: "Essential Black Tee",
    price: "$29",
    image: "/src/assets/black-tee.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "Premium cotton blend essential tee",
    fullDescription: "Our Essential Black Tee is crafted from premium 100% organic cotton for ultimate comfort and durability. Features a classic crew neck design with a slightly relaxed fit that's perfect for everyday wear. Pre-shrunk fabric ensures the perfect fit wash after wash.",
    features: [
      "100% Organic Cotton",
      "Pre-shrunk fabric",
      "Classic crew neck",
      "Slightly relaxed fit",
      "Machine washable"
    ]
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    navigate("/payment", { state: { product, selectedSize } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-black tracking-tighter mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-primary">{product.price}</p>
            </div>
            
            <p className="text-muted-foreground text-lg">{product.fullDescription}</p>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold">Size:</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <Badge 
                    key={size} 
                    variant={selectedSize === size ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full"
              onClick={handleAddToCart}
            >
              Add to Cart - {product.price}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EssentialBlackTee;