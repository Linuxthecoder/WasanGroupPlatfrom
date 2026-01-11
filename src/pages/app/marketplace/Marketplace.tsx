import { useState } from "react";
import { Search, Filter, ChevronRight, Zap, Truck, ShieldCheck, Shirt, Headphones, Watch, Gem, Dumbbell, Sofa } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "../../../main/components/Navigation";
import Footer from "../../../main/components/Footer";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

import productsData from "../../../json_files/products/data.json";

const categories = ["Consumer Electronics", "Apparel & Fashion", "Home & Garden", "Machinery", "Beauty & Personal Care", "Packaging & Printing", "Sports & Entertainment"];

const products: any[] = productsData;

const categoryItems = [
    { name: "Apparel & Accessories", icon: Shirt },
    { name: "Consumer Electronics", icon: Headphones },
    { name: "Home & Garden", icon: Sofa },
    { name: "Sports & Entertainment", icon: Dumbbell },
    { name: "Jewelry & Watches", icon: Watch },
    { name: "Beauty & Personal Care", icon: Gem },
    { name: "Packaging & Printing", icon: Truck },
    { name: "Industrial Machinery", icon: Zap },
    { name: "Vehicles & Parts", icon: Truck },
    { name: "Lights & Lighting", icon: Zap },
    { name: "Furniture", icon: Sofa },
    { name: "Luggage & Bags", icon: Shirt },
    { name: "Tools & Hardware", icon: Dumbbell },
];

const Marketplace = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-slate-900">
            <Navigation />
            <main className="flex-1 flex flex-col relative">

                <div className="container max-w-7xl mx-auto px-4 lg:px-6 py-8 space-y-8">

                    {/* Page Navigation Tabs */}
                    <div className="flex items-center gap-8 mb-8 overflow-x-auto pb-2">
                        <Link to="/explore/marketplace/products" className="text-2xl font-bold text-blue-600 border-b-4 border-blue-600 pb-1 whitespace-nowrap">
                            Products
                        </Link>
                        <Link to="/explore/marketplace/manufacturers" className="text-2xl font-bold text-slate-800 hover:text-blue-600 pb-1 whitespace-nowrap transition-colors">
                            Manufacturers
                        </Link>
                        <Link to="/explore/marketplace/worldwide" className="text-2xl font-bold text-slate-800 hover:text-blue-600 pb-1 whitespace-nowrap transition-colors">
                            Worldwide
                        </Link>
                        <Link to="/top-ranking" className="text-2xl font-bold text-slate-800 hover:text-blue-600 pb-1 whitespace-nowrap transition-colors">
                            Top Ranking
                        </Link>
                    </div>

                    {/* Hero Grid Section - Redesigned Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 h-auto lg:h-[350px]">

                        {/* 1. Category Sidebar - Scrollable */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col h-full lg:col-span-1 overflow-hidden">
                            <div className="p-4 border-b border-slate-100 bg-white z-10 shrink-0">
                                <h3 className="font-extrabold text-slate-900 text-base">Source by category</h3>
                            </div>
                            <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
                                {categoryItems.map((item, index) => (
                                    <div key={`${item.name}-${index}`} className="flex items-center gap-3 p-2.5 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-slate-200 transition-all">
                                            <item.icon className="w-4 h-4 text-slate-600 group-hover:text-primary transition-colors" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 flex-1 truncate">{item.name}</span>
                                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Frequent Item 1 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col h-full lg:col-span-1 group cursor-pointer hover:shadow-md transition-all">
                            <div className="mb-4">
                                <h4 className="font-bold text-slate-900 leading-tight">Frequently searched</h4>
                                <p className="text-sm text-slate-500 mt-1">Smart Watches</p>
                            </div>
                            <div className="flex-1 flex items-center justify-center p-2">
                                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300" className="max-h-32 object-contain group-hover:scale-105 transition-transform duration-500" alt="Watch" />
                            </div>
                        </div>

                        {/* 3. Frequent Item 2 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col h-full lg:col-span-1 group cursor-pointer hover:shadow-md transition-all">
                            <div className="mb-4">
                                <h4 className="font-bold text-slate-900 leading-tight">Frequently searched</h4>
                                <p className="text-sm text-slate-500 mt-1">Electric Cars</p>
                            </div>
                            <div className="flex-1 flex items-center justify-center p-2">
                                <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=300" className="max-h-32 object-contain group-hover:scale-105 transition-transform duration-500" alt="Car" />
                            </div>
                        </div>

                        {/* 4. Banner Card */}
                        <div className="bg-slate-900 rounded-xl shadow-lg border border-slate-800 relative overflow-hidden h-full lg:col-span-2 group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-700" alt="Trends" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-0 mb-3">New Arrival</Badge>
                                <h2 className="text-3xl font-bold text-white mb-2 leading-tight">Discover the <br />latest trends</h2>
                                <p className="text-slate-300 mb-6 line-clamp-2">Connect with top suppliers for trending consumer electronics.</p>
                                <Button className="bg-white text-slate-900 hover:bg-slate-100 rounded-full font-bold px-8">
                                    View More
                                </Button>
                            </div>
                        </div>

                    </div>

                    {/* Section: Tailored Selections */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            Tailored Selection
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Re-using existing cards but ensuring matching white/rounded style */}
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-all cursor-pointer group">
                                <h4 className="font-bold text-slate-800 text-lg">Eco-friendly Packaging</h4>
                                <p className="text-sm text-slate-500 mb-4">Sustainable choices for your brand</p>
                                <div className="grid grid-cols-2 gap-3 h-32">
                                    <div className="bg-slate-100 rounded-lg overflow-hidden h-full"><img src="https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform" /></div>
                                    <div className="bg-slate-100 rounded-lg overflow-hidden h-full"><img src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform" /></div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-all cursor-pointer group">
                                <h4 className="font-bold text-slate-800 text-lg">Smart Office Setup</h4>
                                <p className="text-sm text-slate-500 mb-4">Upgrade your workplace</p>
                                <div className="grid grid-cols-2 gap-3 h-32">
                                    <div className="bg-slate-100 rounded-lg overflow-hidden h-full"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform" /></div>
                                    <div className="bg-slate-100 rounded-lg overflow-hidden h-full"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform" /></div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-all cursor-pointer group">
                                <h4 className="font-bold text-slate-800 text-lg">Industrial Tools</h4>
                                <p className="text-sm text-slate-500 mb-4">Heavy duty equipment</p>
                                <div className="grid grid-cols-2 gap-3 h-32">
                                    <div className="bg-slate-100 rounded-lg overflow-hidden h-full"><img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform" /></div>
                                    <div className="bg-slate-100 rounded-lg overflow-hidden h-full"><img src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Product Grid (Full Width) */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-slate-900">Recommended Products</h2>
                            <Tabs defaultValue="grid" className="w-[140px]">
                                <TabsList className="grid w-full grid-cols-2 h-9 p-1 bg-white border border-slate-200">
                                    <TabsTrigger value="grid" className="text-xs">Grid</TabsTrigger>
                                    <TabsTrigger value="list" className="text-xs">List</TabsTrigger>
                                </TabsList>
                            </Tabs>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center">
                            <Button variant="outline" className="px-8 border-slate-300 text-slate-600 hover:text-primary hover:border-primary lg:px-12 rounded-full">Load More Products</Button>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <Footer />
                </div>
            </main>
        </div>
    );
};

export default Marketplace;
