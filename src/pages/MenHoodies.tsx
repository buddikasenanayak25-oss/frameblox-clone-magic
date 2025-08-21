import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const MenHoodies = () => {
  const products = [
    {
      id: 1,
      name: "Urban Phantom Hoodie",
      price: "$89",
      image: "/src/assets/hoodie-urban-phantom.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Premium streetwear hoodie with urban graphics",
      slug: "urban-phantom-hoodie"
    },
    {
      id: 2,
      name: "Shadow Drip Hoodie",
      price: "$95",
      image: "/src/assets/hoodie-shadow-drip.jpg",
      sizes: ["M", "L", "XL", "XXL"],
      description: "Limited edition shadow drip design",
      slug: "shadow-drip-hoodie"
    },
    {
      id: 3,
      name: "Neon Rebellion Hoodie",
      price: "$99",
      image: "/src/assets/hoodie-neon-rebellion.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Bold neon graphics for the rebels",
      slug: "neon-rebellion-hoodie"
    },
    {
      id: 4,
      name: "Classic Black Hoodie",
      price: "$79",
      image: "/src/assets/hoodie-urban-phantom.jpg",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description: "Timeless black hoodie with premium comfort",
      slug: "classic-black-hoodie"
    },
    {
      id: 5,
      name: "Minimalist Gray Hoodie",
      price: "$85",
      image: "/src/assets/hoodie-shadow-drip.jpg",
      sizes: ["M", "L", "XL"],
      description: "Clean minimalist design in soft gray",
      slug: "minimalist-gray-hoodie"
    },
    {
      id: 6,
      name: "Electric Blue Hoodie",
      price: "$92",
      image: "/src/assets/hoodie-neon-rebellion.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Vibrant electric blue with modern cut",
      slug: "electric-blue-hoodie"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tighter mb-4">Men's Hoodies</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Streetwear hoodies collection featuring bold designs and premium comfort. Perfect for making a statement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/products/${product.slug}`}>
                <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              
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
                  <Link to={`/products/${product.slug}`}>
                    <Button size="sm">View Details</Button>
                  </Link>
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

export default MenHoodies;