import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Smartphone,
  Shirt,
  Factory,
  CarFront,
  House,
  HeartPulse,
  Laptop,
  Wrench,
  Package,
  Zap,
  Coffee,
  Gamepad2
} from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      name: "Electronics & Technology",
      icon: Smartphone,
      count: "12,450+",
      description: "Consumer electronics, mobile accessories, smart devices",
      subcategories: ["Mobile Accessories", "Smart Watches", "Bluetooth Speakers", "Chargers", "Cables"]
    },
    {
      name: "Textiles & Apparel",
      icon: Shirt,
      count: "8,320+",
      description: "Fabrics, clothing, fashion accessories, home textiles",
      subcategories: ["Cotton Fabrics", "Polyester", "Custom Apparel", "Fashion Accessories", "Home Textiles"]
    },
    {
      name: "Machinery & Equipment",
      icon: Factory,
      count: "5,670+",
      description: "Industrial machinery, manufacturing equipment, tools",
      subcategories: ["Conveyor Systems", "Automation Equipment", "Industrial Tools", "Custom Machinery"]
    },
    {
      name: "Automotive Parts",
      icon: CarFront,
      count: "4,230+",
      description: "Auto parts, accessories, maintenance equipment",
      subcategories: ["Brake Systems", "Engine Parts", "Accessories", "Custom Components"]
    },
    {
      name: "Home & Garden",
      icon: House,
      count: "6,890+",
      description: "Furniture, home decor, garden tools, appliances",
      subcategories: ["Office Furniture", "Home Furniture", "Garden Tools", "Home Appliances"]
    },
    {
      name: "Health & Beauty",
      icon: HeartPulse,
      count: "3,450+",
      description: "Cosmetics, personal care, medical equipment",
      subcategories: ["Cosmetics", "Personal Care", "Medical Devices", "Health Supplements"]
    },
    {
      name: "Computer Hardware",
      icon: Laptop,
      count: "2,890+",
      description: "PC components, servers, networking equipment",
      subcategories: ["Motherboards", "Graphics Cards", "Storage", "Networking"]
    },
    {
      name: "Tools & Hardware",
      icon: Wrench,
      count: "4,120+",
      description: "Hand tools, power tools, construction hardware",
      subcategories: ["Hand Tools", "Power Tools", "Construction", "Safety Equipment"]
    },
    {
      name: "Packaging & Printing",
      icon: Package,
      count: "3,670+",
      description: "Packaging materials, printing services, labels",
      subcategories: ["Boxes", "Labels", "Printing", "Custom Packaging"]
    },
    {
      name: "Energy & Power",
      icon: Zap,
      count: "2,340+",
      description: "Solar panels, batteries, power supplies, generators",
      subcategories: ["Solar Panels", "Batteries", "Power Supplies", "Generators"]
    },
    {
      name: "Food & Beverage",
      icon: Coffee,
      count: "1,890+",
      description: "Food processing equipment, packaging, ingredients",
      subcategories: ["Processing Equipment", "Food Packaging", "Ingredients", "Beverages"]
    },
    {
      name: "Sports & Entertainment",
      icon: Gamepad2,
      count: "2,560+",
      description: "Sports equipment, toys, gaming accessories",
      subcategories: ["Sports Equipment", "Toys", "Gaming", "Outdoor Gear"]
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.subcategories.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">Product Categories</h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Explore thousands of high-quality products across various industries from verified suppliers
            </p>
          </div>
          
          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search categories and products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg border-2 focus:border-primary"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-0 shadow-md h-full"
            >
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-sm font-medium mt-1">
                      {category.count}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-base font-semibold text-foreground">Popular Products:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.subcategories.slice(0, 4).map((sub, subIndex) => (
                      <Badge key={subIndex} variant="outline" className="text-sm py-1 px-3">
                        {sub}
                      </Badge>
                    ))}
                  </div>
                  <Link to={`/suppliers?category=${encodeURIComponent(category.name)}`}>
                    <Button variant="outline" className="w-full mt-6 h-11 text-base font-semibold hover:bg-primary hover:text-white">
                      View Suppliers
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No categories found matching your search.</p>
            <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
              Clear Search
            </Button>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Categories;
