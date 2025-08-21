import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClassicWhiteTee = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();

  const product = {
    id: 2,
    name: "Classic White Tee",
    price: "$29",
    image: "/src/assets/white-tee.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "Timeless white cotton tee",
    fullDescription: "The Classic White Tee is a wardrobe staple that never goes out of style. Made from premium cotton with a perfect weight that drapes beautifully. This versatile piece works equally well on its own or as a layering piece.",
    features: [
      "Premium cotton blend",
      "Perfect weight fabric",
      "Versatile styling",
      "Classic fit",
      "Easy care"
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

export default ClassicWhiteTee;