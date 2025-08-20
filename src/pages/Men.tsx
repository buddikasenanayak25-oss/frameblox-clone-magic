import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Import images
import blackTee from "@/assets/black-tee.jpg";
import hoodieNeon from "@/assets/hoodie-neon-rebellion.jpg";
import hoodieUrban from "@/assets/hoodie-urban-phantom.jpg";
import heroModel from "@/assets/hero-model.jpg";

const menCategories = [
  {
    id: 1,
    name: "T-Shirts",
    description: "Essential premium tees",
    image: blackTee,
    link: "/men/tshirts",
    count: "12 items"
  },
  {
    id: 2,
    name: "Hoodies",
    description: "Streetwear hoodies collection",
    image: hoodieNeon,
    link: "/men/hoodies",
    count: "8 items"
  },
  {
    id: 3,
    name: "Jackets",
    description: "Premium outerwear",
    image: heroModel,
    link: "/men/jackets",
    count: "6 items"
  },
  {
    id: 4,
    name: "Jeans",
    description: "Premium denim collection",
    image: hoodieUrban,
    link: "/men/jeans",
    count: "10 items"
  }
];

const featuredProducts = [
  {
    id: 1,
    name: "Black Essential Tee",
    price: 29.99,
    originalPrice: 39.99,
    image: blackTee,
    badge: "BESTSELLER"
  },
  {
    id: 2,
    name: "Neon Rebellion Hoodie",
    price: 79.99,
    image: hoodieNeon,
    badge: "LIMITED"
  },
  {
    id: 3,
    name: "Urban Phantom Hoodie",
    price: 89.99,
    image: hoodieUrban,
    badge: "NEW"
  }
];

const Men = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-r from-primary/20 to-primary/10">
          <div className="container-custom h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
                MEN'S
                <br />
                COLLECTION
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Discover premium streetwear designed for the modern man. From essential tees to statement hoodies.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="px-8">
                  Shop Now
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  View Lookbook
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="container-custom py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              SHOP BY CATEGORY
            </h2>
            <p className="text-muted-foreground">
              Find your perfect style across our curated collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menCategories.map((category) => (
              <Link key={category.id} to={category.link} className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                        <p className="text-sm opacity-90">{category.count}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="container-custom py-16 bg-muted/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              TRENDING NOW
            </h2>
            <p className="text-muted-foreground">
              Most popular items in men's collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2">
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-foreground">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button className="w-full">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Men;