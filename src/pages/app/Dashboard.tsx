import { useState } from "react";
import { Link } from "react-router-dom";
import {
    MessageSquare,
    ShoppingBag,
    FileText,
    Ticket,
    ChevronRight,
    ShieldCheck,
    Search,
    Package,
    Heart,
    History
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Sidebar from "./components/Sidebar";
import AppHeader from "./components/AppHeader";

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-[#F0F2F5]">
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <AppHeader title="My Wasan" />

                <div className="p-6 max-w-[1600px] mx-auto space-y-6">

                    {/* Top Profile Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Profile & Stats Card */}
                        <Card className="lg:col-span-3 border-none shadow-sm">
                            <CardContent className="p-8 flex flex-col md:flex-row items-center gap-12 relative">
                                <div className="absolute top-6 right-6">
                                    <a href="#" className="flex items-center gap-1 text-slate-500 hover:text-primary text-sm font-medium border-b border-transparent hover:border-primary">
                                        <MessageSquare className="w-4 h-4" />
                                        Online support
                                    </a>
                                </div>
                                {/* Profile Info */}
                                <div className="flex flex-col items-center md:items-start gap-4 min-w-[200px]">
                                    <div className="w-20 h-20 rounded-full border-4 border-white shadow-sm overflow-hidden relative">
                                        <img
                                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                                            alt="User"
                                            className="w-full h-full object-cover bg-blue-100"
                                        />
                                    </div>
                                    <div className="text-center md:text-left w-full">
                                        <h2 className="font-bold text-xl text-slate-900 mb-1">Muhammad</h2>
                                        <Link to="/app/settings" className="text-sm text-slate-500 hover:text-primary underline">Profile</Link>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="hidden md:block w-px h-24 bg-slate-200"></div>

                                {/* Stats Grid */}
                                <div className="flex-1 grid grid-cols-3 gap-8 w-full text-center">
                                    <div className="flex flex-col items-center justify-center p-2 cursor-pointer transition-colors group">
                                        <h3 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">0</h3>
                                        <p className="text-sm text-slate-500 font-medium">Unread messages</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2 cursor-pointer transition-colors group">
                                        <h3 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">0</h3>
                                        <p className="text-sm text-slate-500 font-medium">New quotes</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-2 cursor-pointer transition-colors group">
                                        <h3 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">0</h3>
                                        <p className="text-sm text-slate-500 font-medium">Coupons</p>
                                    </div>
                                </div>
                            </CardContent>

                            {/* Verification Banner */}
                            <div className="bg-slate-50 border-t border-slate-100 p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-slate-700 text-sm">Get verified for tax-exempt status</span>
                                </div>
                                <Link to="/app/settings" className="text-sm text-slate-500 flex items-center hover:text-primary">
                                    Verify business information <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>
                        </Card>

                        {/* Favorites Widget (Right Side) */}
                        <Card className="border-none shadow-sm h-full">
                            <CardContent className="p-6 h-full flex flex-col">
                                <h3 className="font-bold text-lg text-slate-900 mb-6">Favorites</h3>
                                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3">
                                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-2">
                                        <Heart className="w-8 h-8 text-slate-300 fill-slate-300" />
                                    </div>
                                    <p className="font-bold text-slate-800">No favorites yet</p>
                                    <Link to="/explore/marketplace/products" className="text-sm text-blue-600 hover:underline">Explore Products</Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Bottom Section: Orders & History */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                        {/* Orders Section */}
                        <div className="lg:col-span-3 space-y-6">
                            <Card className="border-none shadow-sm min-h-[400px]">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="font-bold text-xl text-slate-900">Orders</h3>
                                        <Link to="/app/orders" className="text-sm text-slate-500 hover:text-primary flex items-center">
                                            View all <ChevronRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </div>

                                    <Tabs defaultValue="all" className="w-full">
                                        <TabsList className="bg-transparent p-0 gap-4 mb-8 w-full border-b border-slate-100 justify-start h-auto pb-2">
                                            <TabsTrigger value="all" className="rounded-full border border-slate-200 px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white">All</TabsTrigger>
                                            <TabsTrigger value="confirming" className="rounded-full border border-slate-200 px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white">Confirming</TabsTrigger>
                                            <TabsTrigger value="unpaid" className="rounded-full border border-slate-200 px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white">Unpaid</TabsTrigger>
                                            <TabsTrigger value="preparing" className="rounded-full border border-slate-200 px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white">Preparing to ship</TabsTrigger>
                                            <TabsTrigger value="delivering" className="rounded-full border border-slate-200 px-4 py-2 text-sm data-[state=active]:bg-slate-900 data-[state=active]:text-white">Delivering</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="all" className="min-h-[200px] flex flex-col items-center justify-center text-center">
                                            <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 rotate-12">
                                                <FileText className="w-10 h-10 text-slate-300" />
                                            </div>
                                            <p className="font-bold text-slate-800 text-lg mb-1">No orders yet</p>
                                            <p className="text-slate-500 mb-6">Start browsing to find products you need</p>
                                            <Link to="/explore/marketplace/products">
                                                <Button variant="outline" className="font-bold">Browse Marketplace</Button>
                                            </Link>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Browsing History (Right Side) */}
                        <Card className="border-none shadow-sm">
                            <CardContent className="p-6 h-full flex flex-col">
                                <h3 className="font-bold text-lg text-slate-900 mb-6">Browsing history</h3>
                                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3 min-h-[200px]">
                                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-2">
                                        <History className="w-8 h-8 text-slate-300" />
                                    </div>
                                    <p className="font-bold text-slate-800">No history yet</p>
                                    <Link to="/explore/marketplace/products" className="text-sm text-blue-600 hover:underline">Explore</Link>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
