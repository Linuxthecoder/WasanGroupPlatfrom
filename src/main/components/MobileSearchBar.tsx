import { Search, Mic, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MobileSearchBar = () => {
  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3 md:hidden">
      <div className="flex items-center space-x-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search products, suppliers..."
            className="pl-10 pr-4 py-3 rounded-full border-gray-300 focus:border-primary"
          />
        </div>
        <Button variant="ghost" size="sm" className="p-2 rounded-full">
          <Mic className="w-5 h-5 text-gray-600" />
        </Button>
        <Button variant="ghost" size="sm" className="p-2 rounded-full">
          <Camera className="w-5 h-5 text-gray-600" />
        </Button>
      </div>
    </div>
  );
};

export default MobileSearchBar;
