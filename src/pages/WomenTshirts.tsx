import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WomenTshirts = () => {
  const products = [
    {
      id: 1,
      name: "Essential White Tee",
      price: "$32",
      image: "/src/assets/white-tee.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Soft cotton blend essential for everyday wear"
    },
    {
      id: 2,
      name: "Fitted Black Tee",
      price: "$32",
      image: "/src/assets/black-tee.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Flattering fitted cut in classic black"
    },
    {
      id: 3,
      name: "Cropped Vintage Tee",
      price: "$38",
      image: "/src/assets/white-tee.jpg",
      sizes: ["XS", "S", "M", "L"],
      description: "Trendy cropped tee with vintage wash"
    },
    {
      id: 4,
      name: "Oversized Boyfriend Tee",
      price: "$35",
      image: "/src/assets/black-tee.jpg",
      sizes: ["S", "M", "L", "XL"],
      description: "Relaxed boyfriend fit for casual comfort"
    },
    {
      id: 5,
      name: "V-Neck Premium Tee",
      price: "$39",
      image: "/src/assets/white-tee.jpg",
      sizes: ["XS", "S", "M", "L", "XL"],
      description: "Elegant V-neck in premium cotton"
    },
    {
      id: 6,
      name: "Striped Casual Tee",
      price: "$42",
      image: "/src/assets/black-tee.jpg",
      sizes: ["XS", "S", "M", "L"],
      description: "Timeless striped pattern for versatile styling"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-custom py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tighter mb-4">Women's T-Shirts</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Comfortable premium basics designed for the modern woman. Perfect fits and quality materials.
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

export default WomenTshirts;