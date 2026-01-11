import { Link } from "react-router-dom";
import {
    LayoutDashboard,
    Package,
    ShoppingBag,
    MessageSquare,
    Settings,
    LogOut,
    Store
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SellerSidebar = () => {
    return (
        <aside className="w-64 bg-slate-900 text-white border-r border-slate-800 hidden md:flex flex-col">
            <div className="p-6 border-b border-slate-800">
                <Link to="/app/seller" className="flex items-center gap-2">
                    <div className="bg-orange-500 p-2 rounded-lg">
                        <Store className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl text-white">Wasan<span className="text-orange-500">Seller</span></span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                <Link to="/app/seller">
                    <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-slate-300 hover:text-white hover:bg-slate-800">
                        <LayoutDashboard className="w-4 h-4" />
                        Overview
                    </Button>
                </Link>
                <Link to="/app/seller/products">
                    <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-slate-300 hover:text-white hover:bg-slate-800">
                        <Package className="w-4 h-4" />
                        Products
                    </Button>
                </Link>
                <Link to="/app/seller/orders">
                    <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-slate-300 hover:text-white hover:bg-slate-800">
                        <ShoppingBag className="w-4 h-4" />
                        Orders
                    </Button>
                </Link>
                <Link to="/app/messages">
                    <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-slate-300 hover:text-white hover:bg-slate-800">
                        <MessageSquare className="w-4 h-4" />
                        Inquiries
                    </Button>
                </Link>
                <Link to="/app/settings">
                    <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-slate-300 hover:text-white hover:bg-slate-800">
                        <Settings className="w-4 h-4" />
                        Shop Settings
                    </Button>
                </Link>
            </nav>

            <div className="p-4 border-t border-slate-800">
                <Link to="/">
                    <Button variant="ghost" className="w-full justify-start gap-3 text-red-400 hover:text-red-300 hover:bg-slate-800">
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </Button>
                </Link>
            </div>
        </aside>
    );
};

export default SellerSidebar;
