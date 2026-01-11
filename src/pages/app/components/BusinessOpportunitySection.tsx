import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  MessageSquare,
  Building,
  ArrowRight,
  Smartphone,
  Headphones,
  Shirt,
  House,
  Factory,
  CarFront,
  HeartPulse,
  Laptop,
  Dumbbell,
  Baby,
  Utensils,
  Briefcase,
  Gamepad2,
  Camera,
  Watch,
  Gem,
  Package,
  Bolt,
  Leaf,
  Stethoscope,
  Plane,
  Armchair,
  ShoppingBag,
  FileText,
  ShieldCheck,
  PawPrint
} from "lucide-react";
import { Link } from "react-router-dom";

const BusinessOpportunitySection = () => {
  const topCategories = [
    { 
      name: "Smart Glasses", 
      price: "$15.00-$25.00", 
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop&crop=center",
      moq: "2 pieces (Min. order)"
    },
    { 
      name: "Wireless Earbuds", 
      price: "$8.50-$15.00", 
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop&crop=center",
      moq: "50 pieces (Min. order)"
    },
    { 
      name: "Smart Watch", 
      price: "$25.00-$45.00", 
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop&crop=center",
      moq: "10 pieces (Min. order)"
    },
    { 
      name: "Bluetooth Speaker", 
      price: "$12.00-$28.00", 
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop&crop=center",
      moq: "20 pieces (Min. order)"
    },
  ];

  const newArrivals = [
    { 
      name: "USB-C Hub", 
      price: "$18.00-$35.00", 
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=300&fit=crop&crop=center",
      badge: "Just added today",
      moq: "100 pieces (Min. order)"
    },
    { 
      name: "Wireless Charger", 
      price: "$10.00-$22.00", 
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center",
      badge: "New arrivals",
      moq: "50 pieces (Min. order)"
    },
    { 
      name: "Phone Stand", 
      price: "$5.00-$12.00", 
      image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&h=300&fit=crop&crop=center",
      badge: "Hot deals",
      moq: "200 pieces (Min. order)"
    },
  ];

  const topDeals = [
    { 
      name: "Gaming Headset", 
      price: "$15.00-$35.00", 
      image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=300&fit=crop&crop=center",
      discount: "Up to 50% off",
      moq: "30 pieces (Min. order)"
    },
    { 
      name: "Laptop Stand", 
      price: "$20.00-$40.00", 
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop&crop=center",
      discount: "Best sellers",
      moq: "25 pieces (Min. order)"
    },
    { 
      name: "Desk Organizer", 
      price: "$8.00-$18.00", 
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center",
      discount: "Featured",
      moq: "100 pieces (Min. order)"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6 tracking-tight">
            Discover your next business opportunity
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Explore top-ranking products and suppliers across various categories. Find the perfect match for your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Top Ranking Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">Top ranking</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                  Hot selling
                </Badge>
              </div>
              
              <div className="space-y-3 flex-1">
                {topCategories.map((category, index) => (
                  <Link key={index} to="/categories" className="group block">
                    <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors truncate">
                          {category.name}
                        </h4>
                        <p className="text-xs text-green-600 font-medium">{category.price}</p>
                        <p className="text-xs text-muted-foreground truncate">{category.moq}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
              
              <Link to="/categories" className="block mt-4">
                <Button className="w-full" variant="outline" size="sm">
                  View all categories
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </div>

          {/* New Arrivals Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">New arrivals</h3>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                  Just added today
                </Badge>
              </div>
              
              <div className="space-y-4 flex-1">
                {newArrivals.map((item, index) => (
                  <Link key={index} to="/categories" className="group block">
                    <Card className="border shadow-sm hover:shadow-md transition-all duration-200">
                      <CardContent className="p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors truncate">
                                {item.name}
                              </h4>
                              <Badge variant="outline" className="text-xs flex-shrink-0">
                                {item.badge}
                              </Badge>
                            </div>
                            <p className="text-xs text-green-600 font-medium">{item.price}</p>
                            <p className="text-xs text-muted-foreground truncate">{item.moq}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              
              <Link to="/categories" className="block mt-4">
                <Button className="w-full" size="sm">
                  Explore new products
                  <Search className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Top Deals Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground">Top deals</h3>
                <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                  Limited time
                </Badge>
              </div>
              
              <div className="space-y-4 flex-1">
                {topDeals.map((deal, index) => (
                  <Link key={index} to="/categories" className="group block">
                    <Card className="border shadow-sm hover:shadow-md transition-all duration-200 bg-gradient-to-r from-blue-50 to-purple-50">
                      <CardContent className="p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={deal.image} 
                              alt={deal.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors mb-1 truncate">
                              {deal.name}
                            </h4>
                            <p className="text-xs text-green-600 font-medium">{deal.price}</p>
                            <p className="text-xs text-muted-foreground mb-1 truncate">{deal.moq}</p>
                            <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                              {deal.discount}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
              
              <Link to="/categories" className="block mt-4">
                <Button className="w-full" variant="default" size="sm">
                  View all deals
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Source Direct from Factory CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Source direct-from-factory</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Connect directly with verified manufacturers. Get better prices, faster delivery, and quality assurance for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/categories">
              <Button variant="secondary" size="lg" className="min-w-48">
                <Search className="mr-2 h-5 w-5" />
                Find Suppliers
              </Button>
            </Link>
            <Link to="/list-business">
              <Button variant="outline" size="lg" className="min-w-48 border-white text-white">
                <Building className="mr-2 h-5 w-5" />
                List Your Business
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOpportunitySection;
