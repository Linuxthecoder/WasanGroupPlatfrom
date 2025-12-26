import { Grid3X3, FileText, ShoppingBag, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActionButtons = () => {
  const quickActions = [
    { 
      icon: Grid3X3, 
      label: "All Categories", 
      path: "/categories",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    { 
      icon: FileText, 
      label: "RFQ", 
      path: "/rfq",
      color: "bg-green-500 hover:bg-green-600"
    },
    { 
      icon: ShoppingBag, 
      label: "My Orders", 
      path: "/orders",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    { 
      icon: MessageSquare, 
      label: "Messages", 
      path: "/messages",
      color: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  return (
    <div className="bg-white py-4 px-4 md:hidden">
      <div className="grid grid-cols-4 gap-3">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              to={action.path}
              className={`${action.color} text-white rounded-xl p-4 flex flex-col items-center space-y-2 transition-colors shadow-sm`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium text-center leading-tight">
                {action.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActionButtons;
