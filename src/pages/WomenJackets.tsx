import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WomenJackets = () => {
  const products = [
    {
      id: 1,
      name: "Lightweight Spring Jacket",
      price: "$139",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Perfect transitional piece for spring weather"
    },
    {
      id: 2,
      name: "Denim Cropped Jacket",
      price: "$129",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["XS", "S", "M", "L"],
      description: "Classic denim in a modern cropped silhouette"
    },
    {
      id: 3,
      name: "Utility Field Jacket",
      price: "$159",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Functional utility jacket with multiple pockets"
    },
    {
      id: 4,
      name: "Bomber Jacket",
      price: "$149",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Classic bomber with contemporary fit"
    },
    {
      id: 5,
      name: "Faux Leather Moto",
      price: "$189",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["XS", "S", "M", "L"],
      description: "Edgy moto jacket in premium faux leather"
    },
    {
      id: 6,
      name: "Oversized Blazer",
      price: "$169",
      image: "/src/assets/spring-jacket.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Structured blazer for professional and casual wear"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tighter mb-4">Women's Jackets</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Stylish outerwear collection that effortlessly transitions from day to night. Quality meets versatility.
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

export default WomenJackets;