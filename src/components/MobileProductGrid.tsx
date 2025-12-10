import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Star, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const MobileProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Smart Bluetooth Earbuds",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop",
      price: "$8.50-$15.00",
      moq: "50 pieces",
      supplier: "TechSource Ltd",
      rating: 4.8,
      verified: true,
      badge: "Hot Sale"
    },
    {
      id: 2,
      name: "Wireless Charging Pad",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
      price: "$10.00-$22.00",
      moq: "100 pieces",
      supplier: "PowerTech Co",
      rating: 4.6,
      verified: true,
      badge: "New"
    },
    {
      id: 3,
      name: "USB-C Hub Multi-Port",
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&h=300&fit=crop",
      price: "$18.00-$35.00",
      moq: "25 pieces",
      supplier: "ConnectPro",
      rating: 4.9,
      verified: true,
      badge: "Best Seller"
    },
    {
      id: 4,
      name: "Smart Watch Fitness",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      price: "$25.00-$45.00",
      moq: "20 pieces",
      supplier: "WearTech Inc",
      rating: 4.7,
      verified: true,
      badge: "Featured"
    }
  ];

  return (
    <div className="bg-white py-4 md:hidden">
      <div className="px-4 mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Recommended Products</h3>
        <Link to="/categories" className="text-primary text-sm font-medium">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 px-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Card className="border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-3">
                <div className="relative mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-2 left-2 text-xs bg-red-500 text-white"
                  >
                    {product.badge}
                  </Badge>
                </div>
                
                <h4 className="font-medium text-sm text-gray-900 mb-2 line-clamp-2 leading-tight">
                  {product.name}
                </h4>
                
                <div className="space-y-1 mb-3">
                  <p className="text-sm font-semibold text-green-600">{product.price}</p>
                  <p className="text-xs text-gray-500">MOQ: {product.moq}</p>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                  {product.verified && (
                    <div className="flex items-center space-x-1">
                      <Shield className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-blue-500">Verified</span>
                    </div>
                  )}
                </div>
                
                <p className="text-xs text-gray-600 mb-3 truncate">{product.supplier}</p>
                
                <Button size="sm" className="w-full text-xs h-8">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  Chat Now
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileProductGrid;
