import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    ShoppingBag,
    MessageSquare,
    Settings,
    LogOut,
    Package,
    Search,
    TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col">
            <div className="p-6 border-b border-slate-100">
                <Link to="/" className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <Package className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold text-xl text-slate-800">Wasan<span className="text-primary">App</span></span>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                <div className="px-3 pb-2 pt-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">Online Trading</div>
                <Link to="/app/messages">
                    <Button variant={isActive("/app/messages") ? "secondary" : "ghost"} className={`w-full justify-start gap-3 mb-1 ${isActive("/app/messages") ? "" : "text-slate-600"}`}>
                        <MessageSquare className="w-4 h-4" />
                        Messages
                    </Button>
                </Link>
                <Link to="/app/orders">
                    <Button variant={isActive("/app/orders") ? "secondary" : "ghost"} className={`w-full justify-start gap-3 mb-1 ${isActive("/app/orders") ? "" : "text-slate-600"}`}>
                        <ShoppingBag className="w-4 h-4" />
                        Orders
                    </Button>
                </Link>
                <Link to="/app/cart">
                    <Button variant={isActive("/app/cart") ? "secondary" : "ghost"} className={`w-full justify-start gap-3 mb-1 ${isActive("/app/cart") ? "" : "text-slate-600"}`}>
                        <span className="font-bold w-4 h-4 text-center">$</span>
                        Payment
                    </Button>
                </Link>
                <Link to="/app/favorites">
                    <Button variant={isActive("/app/favorites") ? "secondary" : "ghost"} className={`w-full justify-start gap-3 mb-1 ${isActive("/app/favorites") ? "" : "text-slate-600"}`}>
                        <span className="w-4 h-4">♡</span>
                        Saved & history
                    </Button>
                </Link>

                <div className="px-3 pb-2 pt-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Marketplace</div>
                <Link to="/top-ranking">
                    <Button variant={isActive("/top-ranking") ? "secondary" : "ghost"} className={`w-full justify-start gap-3 mb-1 ${isActive("/top-ranking") ? "" : "text-slate-600"}`}>
                        <TrendingUp className="w-4 h-4" />
                        Top Ranking
                    </Button>
                </Link>

                <div className="px-3 pb-2 pt-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Add-on Services</div>
                <Link to="#">
                    <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-slate-600">
                        <Package className="w-4 h-4" />
                        Logistics services
                    </Button>
                </Link>
                <Link to="#">
                    <Button variant="ghost" className="w-full justify-start gap-3 mb-1 text-slate-600">
                        <Package className="w-4 h-4" />
                        Dropshipping
                    </Button>
                </Link>

                <div className="px-3 pb-2 pt-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Settings</div>
                <Link to="/app/settings">
                    <Button variant={isActive("/app/settings") ? "secondary" : "ghost"} className={`w-full justify-start gap-3 mb-1 ${isActive("/app/settings") ? "" : "text-slate-600"}`}>
                        <Settings className="w-4 h-4" />
                        Account settings
                    </Button>
                </Link>
            </nav>

            <div className="p-4 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-xl mb-4">
                    <p className="text-xs font-medium text-slate-500 mb-2">Current Plan</p>
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-800">Pro Business</span>
                        <Badge variant="outline" className="text-xs border-primary text-primary bg-primary/5">Active</Badge>
                    </div>
                </div>
                <Link to="/">
                    <Button variant="outline" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50 border-red-100">
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </Button>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
