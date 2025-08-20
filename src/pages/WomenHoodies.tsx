import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WomenHoodies = () => {
  const products = [
    {
      id: 1,
      name: "Cozy Pullover Hoodie",
      price: "$79",
      image: "/src/assets/hoodie-urban-phantom.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Ultra-soft pullover for maximum comfort"
    },
    {
      id: 2,
      name: "Cropped Zip Hoodie",
      price: "$85",
      image: "/src/assets/hoodie-shadow-drip.jpg",
      sizes: ["XS", "S", "M", "L"],
      description: "Trendy cropped hoodie with zip closure"
    },
    {
      id: 3,
      name: "Oversized Comfort Hoodie",
      price: "$89",
      image: "/src/assets/hoodie-neon-rebellion.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Oversized fit for ultimate relaxation"
    },
    {
      id: 4,
      name: "Athletic Performance Hoodie",
      price: "$95",
      image: "/src/assets/hoodie-urban-phantom.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Moisture-wicking hoodie for active lifestyle"
    },
    {
      id: 5,
      name: "Vintage Wash Hoodie",
      price: "$92",
      image: "/src/assets/hoodie-shadow-drip.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Vintage-inspired wash with modern comfort"
    },
    {
      id: 6,
      name: "Minimalist Gray Hoodie",
      price: "$82",
      image: "/src/assets/hoodie-neon-rebellion.jpg",
      sizes: ["XS", "S", "M", "L"],
      description: "Clean minimalist design in soft heather gray"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tighter mb-4">Women's Hoodies</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Cozy streetwear essentials that combine comfort with contemporary style. Perfect for any occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                
                <div className="flex gap-1 mb-3">
                  {product.sizes.map((size) => (
                    <Badge key={size} variant="outline" className="text-xs">
                      {size}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">{product.price}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WomenHoodies;