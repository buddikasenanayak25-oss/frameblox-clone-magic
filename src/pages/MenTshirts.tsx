import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MenTshirts = () => {
  const products = [
    {
      id: 1,
      name: "Essential Black Tee",
      price: "$29",
      image: "/src/assets/black-tee.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Premium cotton blend essential tee"
    },
    {
      id: 2,
      name: "Classic White Tee",
      price: "$29",
      image: "/src/assets/white-tee.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Timeless white cotton tee"
    },
    {
      id: 3,
      name: "Oversized Gray Tee",
      price: "$35",
      image: "/src/assets/black-tee.jpg",
      sizes: ["M", "L", "XL", "XXL"],
      description: "Relaxed fit premium cotton tee"
    },
    {
      id: 4,
      name: "Vintage Wash Tee",
      price: "$39",
      image: "/src/assets/white-tee.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Vintage-inspired washed cotton tee"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tighter mb-4">Men's T-Shirts</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Essential premium tees crafted from the finest materials. Perfect for everyday wear or layering.
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

export default MenTshirts;