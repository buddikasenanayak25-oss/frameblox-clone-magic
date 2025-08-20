import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Import product images
import blackTee from "@/assets/black-tee.jpg";
import whiteTee from "@/assets/white-tee.jpg";
import hoodieNeon from "@/assets/hoodie-neon-rebellion.jpg";
import hoodieShadow from "@/assets/hoodie-shadow-drip.jpg";
import hoodieUrban from "@/assets/hoodie-urban-phantom.jpg";
import springJacket from "@/assets/spring-jacket.jpg";
import summerCap from "@/assets/summer-cap.jpg";
import iphoneCase from "@/assets/iphone-case.jpg";

const products = [
  {
    id: 1,
    name: "Black Essential Tee",
    price: 29.99,
    originalPrice: 39.99,
    category: "Men",
    subcategory: "T-Shirts",
    image: blackTee,
    badge: "SALE"
  },
  {
    id: 2,
    name: "White Premium Tee",
    price: 32.99,
    category: "Women",
    subcategory: "T-Shirts",
    image: whiteTee,
    badge: "NEW"
  },
  {
    id: 3,
    name: "Neon Rebellion Hoodie",
    price: 79.99,
    category: "Men",
    subcategory: "Hoodies",
    image: hoodieNeon,
    badge: "TRENDING"
  },
  {
    id: 4,
    name: "Shadow Drip Hoodie",
    price: 84.99,
    category: "Women",
    subcategory: "Hoodies",
    image: hoodieShadow,
    badge: "LIMITED"
  },
  {
    id: 5,
    name: "Urban Phantom Hoodie",
    price: 89.99,
    category: "Men",
    subcategory: "Hoodies",
    image: hoodieUrban,
    badge: "EXCLUSIVE"
  },
  {
    id: 6,
    name: "Spring Essential Jacket",
    price: 129.99,
    category: "Women",
    subcategory: "Jackets",
    image: springJacket,
    badge: "NEW"
  },
  {
    id: 7,
    name: "Summer Vibes Cap",
    price: 24.99,
    category: "Accessories",
    subcategory: "Caps",
    image: summerCap
  },
  {
    id: 8,
    name: "Premium iPhone Case",
    price: 19.99,
    category: "Accessories",
    subcategory: "Phone Cases",
    image: iphoneCase,
    badge: "BESTSELLER"
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const categories = ["All", "Men", "Women", "Accessories"];
  const subcategories = ["All", "T-Shirts", "Hoodies", "Jackets", "Caps", "Phone Cases"];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === "All" || product.subcategory === selectedSubcategory;
    return categoryMatch && subcategoryMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container-custom py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-4">
            SHOP ALL
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our complete collection of premium streetwear and accessories
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="flex gap-2">
            {subcategories.map((subcategory) => (
              <Button
                key={subcategory}
                variant={selectedSubcategory === subcategory ? "secondary" : "ghost"}
                onClick={() => setSelectedSubcategory(subcategory)}
                className="text-xs"
              >
                {subcategory}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <Badge className="absolute top-2 left-2 text-xs">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    {product.category} • {product.subcategory}
                  </p>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button className="w-full" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/men" className="group">
            <Card className="h-32 bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all duration-300">
              <CardContent className="h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    MEN'S COLLECTION
                  </h3>
                  <p className="text-muted-foreground">Explore men's streetwear</p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <Link to="/women" className="group">
            <Card className="h-32 bg-gradient-to-r from-secondary/10 to-secondary/5 hover:from-secondary/20 hover:to-secondary/10 transition-all duration-300">
              <CardContent className="h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    WOMEN'S COLLECTION
                  </h3>
                  <p className="text-muted-foreground">Discover women's fashion</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;