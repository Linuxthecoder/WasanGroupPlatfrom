import {
    DollarSign,
    ShoppingBag,
    Eye,
    TrendingUp,
    ArrowUpRight,
    Package,
    AlertCircle,
    MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SellerSidebar from "../components/SellerSidebar";
import AppHeader from "../components/AppHeader";

const SellerDashboard = () => {
    return (
        <div className="flex h-screen bg-slate-50">
            <SellerSidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <AppHeader title="Seller Dashboard" />

                <div className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8 max-w-7xl">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                                            <DollarSign className="w-6 h-6" />
                                        </div>
                                        <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">
                                            +12.5%
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-1">Total Revenue</p>
                                    <h3 className="text-2xl font-bold text-slate-900">$24,500</h3>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                            <ShoppingBag className="w-6 h-6" />
                                        </div>
                                        <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                                            +5.2%
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-1">Total Orders</p>
                                    <h3 className="text-2xl font-bold text-slate-900">145</h3>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                                            <Eye className="w-6 h-6" />
                                        </div>
                                        <Badge variant="outline" className="text-purple-600 border-purple-200 bg-purple-50">
                                            +18%
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-1">Product Views</p>
                                    <h3 className="text-2xl font-bold text-slate-900">8.2k</h3>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                        <Badge variant="outline" className="text-slate-500 border-slate-200">
                                            0%
                                        </Badge>
                                    </div>
                                    <p className="text-sm text-slate-500 mb-1">Conversion Rate</p>
                                    <h3 className="text-2xl font-bold text-slate-900">1.8%</h3>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Main Chart Area Placeholder */}
                            <div className="lg:col-span-2 space-y-8">
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <CardTitle>Sales Overview</CardTitle>
                                        <Button variant="outline" size="sm">Download Report</Button>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center border border-dashed border-slate-300">
                                            <p className="text-slate-400">Chart Visualization Placeholder</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Recent Orders</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center">
                                                            <Package className="w-5 h-5 text-slate-500" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-slate-900">Order #ORD-2024-{100 + i}</p>
                                                            <p className="text-xs text-slate-500">2 items • $1,200.00</p>
                                                        </div>
                                                    </div>
                                                    <Badge variant={i === 1 ? 'default' : 'secondary'} className={i === 1 ? 'bg-orange-100 text-orange-700 hover:bg-orange-200 border-orange-200' : ''}>
                                                        {i === 1 ? 'Pending' : 'Shipped'}
                                                    </Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right Sidebar - Action Items */}
                            <div className="space-y-6">
                                <Card className="bg-blue-600 text-white border-none">
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-2">Upgrade to Pro</h3>
                                        <p className="text-blue-100 text-sm mb-4">Get access to premium analytics, priority support, and verified badges.</p>
                                        <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold">Upgrade Plan</Button>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">Action Items</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
                                            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-bold text-red-700">2 Unfulfilled Orders</p>
                                                <p className="text-xs text-red-600">Shipment deadline approaching today.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
                                            <MessageSquare className="w-5 h-5 text-blue-500 mt-0.5" />
                                            <div>
                                                <p className="text-sm font-bold text-blue-700">5 New Inquiries</p>
                                                <p className="text-xs text-blue-600">Potential leads waiting for response.</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-base">Top Products</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="h-10 w-10 bg-slate-100 rounded-lg"></div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-bold text-slate-800 line-clamp-1">Wireless Earbuds Pro Model X</p>
                                                    <p className="text-xs text-slate-500">124 sold this month</p>
                                                </div>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SellerDashboard;
