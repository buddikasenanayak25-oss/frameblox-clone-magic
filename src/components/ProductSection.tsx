import { Button } from "@/components/ui/button";
import shadowDripImage from "@/assets/hoodie-shadow-drip.jpg";
import urbanPhantomImage from "@/assets/hoodie-urban-phantom.jpg";
import neonRebellionImage from "@/assets/hoodie-neon-rebellion.jpg";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Shadow Drip",
      description: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
      price: 89,
      originalPrice: 129,
      image: shadowDripImage,
      isNew: true
    },
    {
      id: 2,
      name: "Urban Phantom", 
      description: "Urban Phantom – A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.",
      price: 89,
      originalPrice: 129,
      image: urbanPhantomImage,
      isNew: true
    },
    {
      id: 3,
      name: "Neon Rebellion",
      description: "A statement piece with vibrant neon details and rebellious street art influences for a standout look.", 
      price: 89,
      originalPrice: 129,
      image: neonRebellionImage,
      isNew: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground">
              new drops
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stand out with our latest collection—bold designs, premium fabrics, and street-ready fits. Once they're gone, they're gone. Don't miss out!
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-brand transition-all duration-300 group-hover:scale-[1.02]">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {product.isNew && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                          New
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">${product.price}</span>
                        <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>
                      </div>
                      <Button variant="brand" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;