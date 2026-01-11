import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Search,
    Filter,
    Package,
    ChevronRight,
    Truck,
    AlertCircle,
    CheckCircle2,
    Calendar,
    ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";

const Orders = () => {
    // Mock Orders
    const orders = [
        {
            id: "ORD-2024-8832",
            date: "Mar 15, 2024",
            total: "$1,492.50",
            status: "Processing",
            supplier: "Shenzhen Audio Tech Co., Ltd.",
            items: 2,
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=100"
        },
        {
            id: "ORD-2024-8100",
            date: "Feb 28, 2024",
            total: "$450.00",
            status: "Shipped",
            supplier: "Guangzhou Textiles Imp & Exp Corp",
            items: 50,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100"
        },
        {
            id: "ORD-2024-7540",
            date: "Jan 10, 2024",
            total: "$2,100.00",
            status: "Delivered",
            supplier: "Ningbo Electronics Ltd.",
            items: 10,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100"
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Delivered": return "bg-green-100 text-green-700 hover:bg-green-100 border-green-200";
            case "Shipped": return "bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200";
            case "Processing": return "bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200";
            default: return "bg-slate-100 text-slate-700 hover:bg-slate-100 border-slate-200";
        }
    };

    return (
        <div className="flex h-screen bg-[#F0F2F5]">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <AppHeader title="My Orders" />

                <div className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8 max-w-5xl">

                        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input placeholder="Search by Order ID or Product..." className="pl-10 bg-white" />
                            </div>
                            <div className="flex gap-2 w-full md:w-auto">
                                <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                                <Button variant="outline"><Calendar className="w-4 h-4 mr-2" /> Date Range</Button>
                            </div>
                        </div>

                        <Tabs defaultValue="all" className="space-y-6">
                            <TabsList className="bg-transparent p-0 gap-2 overflow-x-auto justify-start w-full">
                                <TabsTrigger value="all" className="rounded-full border border-slate-200 bg-white px-6 data-[state=active]:bg-slate-900 data-[state=active]:text-white">All Orders</TabsTrigger>
                                <TabsTrigger value="unpaid" className="rounded-full border border-slate-200 bg-white px-6 data-[state=active]:bg-slate-900 data-[state=active]:text-white">Unpaid</TabsTrigger>
                                <TabsTrigger value="processing" className="rounded-full border border-slate-200 bg-white px-6 data-[state=active]:bg-slate-900 data-[state=active]:text-white">Processing</TabsTrigger>
                                <TabsTrigger value="shipped" className="rounded-full border border-slate-200 bg-white px-6 data-[state=active]:bg-slate-900 data-[state=active]:text-white">Shipped</TabsTrigger>
                            </TabsList>

                            <TabsContent value="all" className="space-y-4">
                                {orders.map(order => (
                                    <div key={order.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:border-blue-300 transition-colors cursor-pointer group">
                                        {/* Order Header */}
                                        <div className="bg-slate-50/50 p-4 border-b border-slate-100 flex flex-wrap gap-4 items-center justify-between text-sm">
                                            <div className="flex gap-6">
                                                <div>
                                                    <span className="text-slate-500 block text-xs uppercase font-bold">Order Place</span>
                                                    <span className="font-medium text-slate-900">{order.date}</span>
                                                </div>
                                                <div>
                                                    <span className="text-slate-500 block text-xs uppercase font-bold">Total</span>
                                                    <span className="font-medium text-slate-900">{order.total}</span>
                                                </div>
                                                <div>
                                                    <span className="text-slate-500 block text-xs uppercase font-bold">Ship To</span>
                                                    <span className="font-medium text-blue-600 hover:underline cursor-pointer">John Doe</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="font-mono text-slate-500">Order # {order.id}</span>
                                                <div className="h-4 w-px bg-slate-300"></div>
                                                <Link to={`/app/order/${order.id}`} className="text-blue-600 font-bold hover:underline flex items-center">
                                                    View Invoice
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Order Items */}
                                        <div className="p-6 flex flex-col sm:flex-row gap-6 items-center">
                                            <div className="w-20 h-20 bg-slate-100 rounded-lg flex-shrink-0 border border-slate-200 overflow-hidden">
                                                <img src={order.image} className="w-full h-full object-cover" alt="Product" />
                                            </div>
                                            <div className="flex-1 space-y-2 text-center sm:text-left">
                                                <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                                                    Order from {order.supplier}
                                                </h3>
                                                <p className="text-slate-500 text-sm">{order.items} Items in this order</p>
                                                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                                                    <Badge variant="outline" className={getStatusColor(order.status)}>
                                                        {order.status === 'Delivered' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                                                        {order.status === 'Processing' && <Package className="w-3 h-3 mr-1" />}
                                                        {order.status === 'Shipped' && <Truck className="w-3 h-3 mr-1" />}
                                                        {order.status}
                                                    </Badge>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2 w-full sm:w-auto">
                                                <Button className="w-full bg-blue-600 hover:bg-blue-700 font-bold">
                                                    Track Package
                                                </Button>
                                                <Button variant="outline" className="w-full">
                                                    Buy Again
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </TabsContent>
                        </Tabs>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Orders;
