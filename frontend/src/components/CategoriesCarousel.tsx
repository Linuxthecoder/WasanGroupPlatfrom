import {
  Smartphone,
  Shirt,
  Factory,
  CarFront,
  HeartPulse,
  Laptop,
  House,
  Utensils,
  Briefcase,
  Gamepad2
} from "lucide-react";
import { Link } from "react-router-dom";

const CategoriesCarousel = () => {
  const categories = [
    { icon: Factory, name: "Machinery", color: "bg-blue-100 text-blue-600" },
    { icon: Shirt, name: "Apparel", color: "bg-purple-100 text-purple-600" },
    { icon: Smartphone, name: "Electronics", color: "bg-green-100 text-green-600" },
    { icon: CarFront, name: "Automotive", color: "bg-red-100 text-red-600" },
    { icon: HeartPulse, name: "Health", color: "bg-pink-100 text-pink-600" },
    { icon: Laptop, name: "Computers", color: "bg-indigo-100 text-indigo-600" },
    { icon: House, name: "Home & Garden", color: "bg-orange-100 text-orange-600" },
    { icon: Utensils, name: "Food & Beverage", color: "bg-yellow-100 text-yellow-600" },
    { icon: Briefcase, name: "Business", color: "bg-gray-100 text-gray-600" },
    { icon: Gamepad2, name: "Sports", color: "bg-teal-100 text-teal-600" }
  ];

  return (
    <div className="bg-white py-6 md:hidden border-b border-gray-100">
      <div className="px-4 mb-4 flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-900">Explore Categories</h3>
        <Link to="/categories" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">
          View All
        </Link>
      </div>

      <div className="relative">
        {/* Gradient Masks for Scroll Hints */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <div className="flex overflow-x-auto scrollbar-hide space-x-3 px-4 pb-2 snap-x snap-mandatory">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={index}
                to="/categories"
                className="snap-start flex-shrink-0 flex flex-col items-center space-y-3 p-3 w-24 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-active:scale-95 transition-all duration-200 shadow-sm group-hover:border-primary/20 group-hover:bg-primary/5">
                  <Icon className="w-6 h-6 text-slate-600 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-medium text-slate-600 text-center leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCarousel;
