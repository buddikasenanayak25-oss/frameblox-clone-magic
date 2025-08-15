import { Button } from "@/components/ui/button";
import shadowDripImage from "@/assets/hoodie-shadow-drip.jpg";
import urbanPhantomImage from "@/assets/hoodie-urban-phantom.jpg";
import neonRebellionImage from "@/assets/hoodie-neon-rebellion.jpg";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "SHADOW DRIP",
      description: "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street vibe.",
      price: 89,
      originalPrice: 129,
      image: shadowDripImage,
      isNew: true
    },
    {
      id: 2,
      name: "URBAN PHANTOM", 
      description: "Urban Phantom – A bold, oversized hoodie with edgy graphics and a stealthy aesthetic inspired by city nights.",
      price: 89,
      originalPrice: 129,
      image: urbanPhantomImage,
      isNew: true
    },
    {
      id: 3,
      name: "NEON REBELLION",
      description: "A statement piece with vibrant neon details and rebellious street art influences for a standout look.", 
      price: 89,
      originalPrice: 129,
      image: neonRebellionImage,
      isNew: true
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase">
              NEW DROPS
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stand out with our latest collection—bold designs, premium fabrics, and street-ready fits. Once they're gone, they're gone. Don't miss out!
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-card rounded-3xl overflow-hidden">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.isNew && (
                      <div className="absolute top-6 left-6">
                        <span className="bg-foreground text-background text-xs font-semibold px-4 py-2 rounded-full uppercase">
                          NEW
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">{product.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-foreground">${product.price}</span>
                        <span className="text-base text-muted-foreground line-through">${product.originalPrice}</span>
                      </div>
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