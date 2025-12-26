import { Home, Search, FileText, MessageSquare, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileBottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Search", path: "/categories" },
    { icon: FileText, label: "RFQ", path: "/rfq" },
    { icon: MessageSquare, label: "Messages", path: "/messages" },
    { icon: User, label: "Account", path: "/account" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 md:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 min-w-0 ${
                isActive 
                  ? "text-primary" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? "text-primary" : ""}`} />
              <span className={`text-xs font-medium truncate ${
                isActive ? "text-primary" : ""
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
