import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Watch, Smartphone, Backpack, Glasses, Headphones, Wallet } from "lucide-react";

const Accessories = () => {
  const accessories = [
    {
      id: 1,
      name: "Urban Backpack",
      category: "Bags",
      price: "$89.99",
      image: "/placeholder.svg",
      icon: Backpack,
      description: "Spacious and stylish backpack for everyday carry"
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Tech",
      price: "$249.99",
      image: "/placeholder.svg",
      icon: Watch,
      description: "Track your style and fitness in one"
    },
    {
      id: 3,
      name: "Phone Case",
      category: "Tech",
      price: "$29.99",
      image: "/placeholder.svg",
      icon: Smartphone,
      description: "Premium protection with streetwear aesthetic"
    },
    {
      id: 4,
      name: "Classic Sunglasses",
      category: "Eyewear",
      price: "$129.99",
      image: "/placeholder.svg",
      icon: Glasses,
      description: "UV protection meets urban style"
    },
    {
      id: 5,
      name: "Wireless Headphones",
      category: "Tech",
      price: "$199.99",
      image: "/placeholder.svg",
      icon: Headphones,
      description: "Premium sound for your daily soundtrack"
    },
    {
      id: 6,
      name: "Leather Wallet",
      category: "Essentials",
      price: "$79.99",
      image: "/placeholder.svg",
      icon: Wallet,
      description: "Minimalist design with maximum functionality"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter">
                Complete Your Look
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Elevate your streetwear game with our curated collection of accessories. 
                From tech essentials to everyday carry, find the perfect pieces to express your style.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Bags", "Tech", "Eyewear", "Essentials"].map((category) => (
                <div 
                  key={category}
                  className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer border border-border"
                >
                  <h3 className="font-bold text-lg">{category}</h3>
                  <p className="text-sm text-muted-foreground mt-2">Explore collection</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black tracking-tighter mb-4">
                Featured Accessories
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Essential pieces designed to complement your streetwear aesthetic
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessories.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.id}
                    className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                      <Icon className="h-32 w-32 text-muted-foreground/20 group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-primary uppercase tracking-wider">
                            {item.category}
                          </span>
                          <span className="text-xs text-muted-foreground">Coming Soon</span>
                        </div>
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-2xl font-black">{item.price}</span>
                        <Button disabled>Notify Me</Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Accessories */}
        <section className="py-20 bg-foreground text-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-black tracking-tighter mb-12 text-center">
                Built for Streetwear Culture
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <div className="text-3xl font-black">01</div>
                  <h3 className="text-xl font-bold">Premium Quality</h3>
                  <p className="text-background/70">
                    Every accessory is crafted with attention to detail and built to last
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-black">02</div>
                  <h3 className="text-xl font-bold">Functional Design</h3>
                  <p className="text-background/70">
                    Style meets utility in every piece we create
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="text-3xl font-black">03</div>
                  <h3 className="text-xl font-bold">Urban Aesthetic</h3>
                  <p className="text-background/70">
                    Designed to complement your streetwear wardrobe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center space-y-6">
              <h2 className="text-4xl font-black tracking-tighter">
                Stay Updated
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Be the first to know when new accessories drop. Join our community and never miss a release.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/shop">Explore All Products</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accessories;
