import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MenJackets = () => {
  const products = [
    {
      id: 1,
      name: "Spring Utility Jacket",
      price: "$149",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Lightweight spring jacket with utility pockets"
    },
    {
      id: 2,
      name: "Urban Bomber Jacket",
      price: "$179",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["M", "L", "XL", "XXL"],
      description: "Classic bomber with modern streetwear twist"
    },
    {
      id: 3,
      name: "Denim Trucker Jacket",
      price: "$139",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Vintage-inspired denim trucker jacket"
    },
    {
      id: 4,
      name: "Windbreaker Pro",
      price: "$99",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Technical windbreaker for active lifestyle"
    },
    {
      id: 5,
      name: "Leather Moto Jacket",
      price: "$299",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["M", "L", "XL"],
      description: "Premium leather moto jacket with attitude"
    },
    {
      id: 6,
      name: "Puffer Vest",
      price: "$89",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Insulated puffer vest for layering"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tighter mb-4">Men's Jackets</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Premium outerwear collection designed for style and functionality. From casual to formal occasions.
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

export default MenJackets;