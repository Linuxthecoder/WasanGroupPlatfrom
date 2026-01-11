import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const MobileDealsCarousel = () => {
  const deals = [
    {
      title: "Trade Show Special",
      subtitle: "Up to 70% off machinery",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
      badge: "Limited Time",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "New Supplier Deals",
      subtitle: "Electronics from verified suppliers",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
      badge: "Hot Deal",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Bulk Order Discount",
      subtitle: "Save more on large quantities",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=200&fit=crop",
      badge: "Best Value",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="bg-gray-50 py-4 md:hidden">
      <div className="px-4 mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Deals & Promotions</h3>
        <Link to="/deals" className="text-primary text-sm font-medium">
          View All
        </Link>
      </div>
      <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4">
        {deals.map((deal, index) => (
          <Link
            key={index}
            to="/deals"
            className="flex-shrink-0 w-72 relative rounded-xl overflow-hidden shadow-sm"
          >
            <div className={`bg-gradient-to-r ${deal.color} p-4 text-white relative`}>
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-white/20 text-white border-0">
                  {deal.badge}
                </Badge>
              </div>
              <div className="mt-2">
                <h4 className="text-lg font-bold mb-1">{deal.title}</h4>
                <p className="text-sm opacity-90 mb-3">{deal.subtitle}</p>
                <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-0">
                  Shop Now
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileDealsCarousel;
