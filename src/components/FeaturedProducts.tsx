import iphoneCaseImage from "@/assets/iphone-case.jpg";
import springJacketImage from "@/assets/spring-jacket.jpg";
import summerCapImage from "@/assets/summer-cap.jpg";
import whiteTeeImage from "@/assets/white-tee.jpg";
import blackTeeImage from "@/assets/black-tee.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Sleek iPhone Case",
      description: "Durable and slim, the SleekGuard iPhone Case offers stylish protection against drops and scratches.",
      image: iphoneCaseImage,
    },
    {
      id: 2,
      name: "Spring Jacket",
      description: "Lightweight and versatile, the BreezeLite Spring Jacket combines comfort and style to keep you cozy on breezy days.",
      image: springJacketImage,
    },
    {
      id: 3,
      name: "Summer Cap",
      description: "Stay cool and protected with the SunShade Summer Cap, featuring breathable fabric and UV protection for sunny days.",
      image: summerCapImage,
    },
    {
      id: 4,
      name: "White Summer Tee",
      description: "Lightweight and breathable, the BreezeFit White Summer Tee keeps you cool and fresh all summer long.",
      image: whiteTeeImage,
    },
    {
      id: 5,
      name: "Black Summer Tee",
      description: "Stay stylish and comfortable in the CoolCore Black Summer Tee, crafted from breathable fabric perfect for warm days.",
      image: blackTeeImage,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground">
              Featured Drops: Stand Out, Stay Ahead
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Exclusive designs, premium materials, and street-ready vibes—these must-have pieces are setting the trend. Get yours before they're gone!
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-brand transition-all duration-300 group-hover:scale-[1.02]">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-subtle">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
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

export default FeaturedProducts;