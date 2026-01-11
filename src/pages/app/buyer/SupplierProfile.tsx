import { useState } from "react";
import {
    MapPin,
    ShieldCheck,
    MessageSquare,
    Star,
    Users,
    Trophy,
    Globe,
    Calendar,
    CheckCircle2,
    Filter,
    Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

const SupplierProfile = () => {
    const [activeTab, setActiveTab] = useState("products");

    const supplier = {
        name: "Shenzhen Audio Tech Co., Ltd.",
        banner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        logo: "SAT",
        tagline: "Leading Manufacturer of Premium Audio Devices Since 2015",
        rating: 4.9,
        reviews: 520,
        responseRate: "98%",
        deliveryRate: "99.5%",
        years: 8,
        employeeCount: "101-200",
        revenue: "$10M - $50M",
        certifications: ["ISO 9001", "CE", "FCC", "RoHS"],
        location: "Shenzhen, Guangdong, China",
        mainProducts: ["Wireless Earbuds", "Bluetooth Speakers", "Smart Wearables"]
    };

    const showcaseProducts = [
        { id: 1, name: "Wireless Earbuds Pro", price: "$12 - $15", moq: "100 Units", supplier: "Shenzhen Audio Tech", rating: 4.8 },
        { id: 11, name: "Sports Bluetooth Headset", price: "$8 - $12", moq: "500 Units", supplier: "Shenzhen Audio Tech", rating: 4.7 },
        { id: 12, name: "Noise Cancelling Headphones", price: "$25 - $35", moq: "50 Units", supplier: "Shenzhen Audio Tech", rating: 4.9 },
        { id: 13, name: "Mini Portable Speaker", price: "$5 - $8", moq: "200 Units", supplier: "Shenzhen Audio Tech", rating: 4.6 },
    ];

    return (
        <div className="flex h-screen bg-slate-50">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <AppHeader title="Supplier Profile" />

                <div className="flex-1 overflow-y-auto">
                    {/* Banner */}
                    <div className="h-64 w-full relative">
                        <img src={supplier.banner} className="w-full h-full object-cover" alt="Company Banner" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-6 max-w-7xl flex items-end justify-between">
                            <div className="flex items-end gap-6">
                                <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center text-slate-800 font-bold text-2xl border-4 border-white mb-[-10px]">
                                    {supplier.logo}
                                </div>
                                <div className="text-white pb-2">
                                    <h1 className="text-3xl font-bold mb-1 flex items-center gap-2">
                                        {supplier.name}
                                        <Badge className="bg-orange-500 hover:bg-orange-600 border-none text-white"><ShieldCheck className="w-3 h-3 mr-1" /> Verified Pro</Badge>
                                    </h1>
                                    <p className="text-slate-200 text-lg opacity-90">{supplier.tagline}</p>
                                </div>
                            </div>
                            <div className="hidden md:flex gap-3 pb-2">
                                <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold">
                                    <Star className="w-4 h-4 mr-2" /> Follow
                                </Button>
                                <Button className="bg-primary hover:bg-blue-600 font-bold">
                                    <MessageSquare className="w-4 h-4 mr-2" /> Contact Supplier
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 py-8 max-w-7xl pt-12">
                        <div className="grid lg:grid-cols-4 gap-8">
                            {/* Left Sidebar Info */}
                            <div className="space-y-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-slate-900 mb-4">Business Overview</h3>
                                        <div className="space-y-4 text-sm">
                                            <div>
                                                <p className="text-slate-500 mb-1">Business Type</p>
                                                <p className="font-medium text-slate-900">Manufacturer</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 mb-1">Years Established</p>
                                                <p className="font-medium text-slate-900">{supplier.years} Years</p>
                                            </div>
                                            <div>
                                                <p className="text-slate-500 mb-1">Main Products</p>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    {supplier.mainProducts.map(p => (
                                                        <Badge key={p} variant="secondary" className="font-normal">{p}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="pt-2 border-t">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <MapPin className="w-4 h-4 text-slate-400" />
                                                    <span className="text-slate-600">{supplier.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Globe className="w-4 h-4 text-slate-400" />
                                                    <a href="#" className="text-blue-600 hover:underline">Visit Website</a>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-slate-900 mb-4">Performance</h3>
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-600">Response Rate</span>
                                                <span className="font-bold text-slate-900">{supplier.responseRate}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-600">On-time Delivery</span>
                                                <span className="font-bold text-slate-900">{supplier.deliveryRate}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-600">Rating</span>
                                                <span className="flex items-center font-bold text-slate-900">
                                                    <Star className="w-3 h-3 fill-current text-yellow-500 mr-1" />
                                                    {supplier.rating} ({supplier.reviews})
                                                </span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Main Content Area */}
                            <div className="lg:col-span-3">
                                <Tabs defaultValue="products" className="w-full">
                                    <div className="border-b mb-6">
                                        <TabsList className="bg-transparent h-auto p-0 gap-8">
                                            <TabsTrigger value="products" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 text-base">Products</TabsTrigger>
                                            <TabsTrigger value="profile" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 text-base">Company Profile</TabsTrigger>
                                            <TabsTrigger value="factory" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 text-base">Factory Tour</TabsTrigger>
                                        </TabsList>
                                    </div>

                                    <TabsContent value="products" className="space-y-6">
                                        {/* Filter Bar */}
                                        <div className="flex gap-4 mb-6">
                                            <div className="relative flex-1">
                                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                                <Input placeholder="Search within store..." className="pl-10" />
                                            </div>
                                            <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                                        </div>

                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {showcaseProducts.map(p => (
                                                <ProductCard key={p.id} product={p} />
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="profile">
                                        <Card>
                                            <CardContent className="p-8">
                                                <h3 className="text-xl font-bold mb-4">About Us</h3>
                                                <p className="text-slate-600 leading-relaxed mb-6">
                                                    Founded in 2015, Shenzhen Audio Tech Co., Ltd. is a high-tech enterprise dedicated to the R&D, manufacturing, and sales of premium audio products. With over 8 years of experience in the industry, we have established ourselves as a trusted partner for global brands.
                                                </p>
                                                <p className="text-slate-600 leading-relaxed mb-8">
                                                    Our state-of-the-art manufacturing facility covers 5,000 square meters and employs over 200 skilled workers. We are committed to strict quality control processes and have obtained ISO 9001, CE, FCC, and RoHS certifications.
                                                </p>

                                                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {supplier.certifications.map(cert => (
                                                        <div key={cert} className="border rounded-lg p-4 flex flex-col items-center justify-center text-center bg-slate-50">
                                                            <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
                                                            <span className="font-bold text-slate-900">{cert}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="factory">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center text-slate-500">
                                                Factory Video Placeholder
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-sm p-4">Production Line 1</div>
                                                <div className="bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-sm p-4">QA Testing Lab</div>
                                                <div className="bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-sm p-4">Warehouse</div>
                                                <div className="bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-sm p-4">R&D Center</div>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SupplierProfile;
