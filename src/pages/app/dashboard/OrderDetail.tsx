import { Link, useParams } from "react-router-dom";
import {
    ChevronLeft,
    Printer,
    Package,
    Truck,
    CheckCircle2,
    MapPin,
    CreditCard,
    MessageSquare,
    FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";

const OrderDetail = () => {
    const { id } = useParams();

    return (
        <div className="flex h-screen bg-[#F0F2F5]">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <AppHeader title={`Order Details`} />

                <div className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8 max-w-5xl">

                        <div className="flex items-center gap-4 mb-6">
                            <Link to="/app/orders">
                                <Button variant="ghost" size="icon">
                                    <ChevronLeft className="w-5 h-5 text-slate-500" />
                                </Button>
                            </Link>
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                                    Order #{id || 'ORD-2024-8832'}
                                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">Processing</Badge>
                                </h1>
                                <p className="text-slate-500 text-sm mt-1">Placed on March 15, 2024</p>
                            </div>
                            <div className="ml-auto flex gap-2">
                                <Button variant="outline" className="hidden sm:flex" onClick={() => window.print()}>
                                    <Printer className="w-4 h-4 mr-2" /> Print Invoice
                                </Button>
                                <Button className="bg-primary hover:bg-blue-600 font-bold">Track Shipment</Button>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 space-y-6">
                                {/* Order Timeline */}
                                <Card>
                                    <CardContent className="p-8">
                                        <div className="relative">
                                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
                                            <div className="space-y-8 relative">
                                                <div className="flex gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-white shadow-sm z-10 flex items-center justify-center">
                                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900">Order Placed</div>
                                                        <div className="text-xs text-slate-500">Mar 15, 10:30 AM</div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-white shadow-sm z-10 flex items-center justify-center">
                                                        <CreditCard className="w-4 h-4 text-white" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900">Payment Confirmed</div>
                                                        <div className="text-xs text-slate-500">Mar 15, 10:35 AM</div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-orange-500 border-4 border-white shadow-sm z-10 flex items-center justify-center text-white">
                                                        <Package className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-orange-600">Processing</div>
                                                        <div className="text-xs text-slate-500">Supplier is preparing your goods</div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4 opacity-50">
                                                    <div className="w-8 h-8 rounded-full bg-slate-200 border-4 border-white shadow-sm z-10 flex items-center justify-center">
                                                        <Truck className="w-4 h-4 text-slate-400" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-500">Shipped</div>
                                                        <div className="text-xs text-slate-400">Pending</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Items List */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">Items Ordered</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0">
                                        <div className="divide-y divide-slate-100">
                                            {[1, 2].map((item, idx) => (
                                                <div key={idx} className="p-6 flex flex-col sm:flex-row gap-6">
                                                    <div className="w-20 h-20 bg-slate-100 rounded-lg flex-shrink-0">
                                                        {/* Image Mockup */}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-bold text-slate-900 mb-1">Industrial Grade Wireless Earbuds Pro</h3>
                                                        <p className="text-sm text-slate-500 mb-2">Model: WE-PRO-001 • Color: Black</p>
                                                        <div className="text-sm font-medium text-slate-700">Qty: 100 x $12.50</div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="font-bold text-lg text-slate-900">$1,250.00</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-6 bg-slate-50 border-t border-slate-100">
                                            <div className="flex justify-end gap-12 text-sm">
                                                <div className="text-right space-y-2">
                                                    <p className="text-slate-500">Subtotal</p>
                                                    <p className="text-slate-500">Shipping (Express)</p>
                                                    <p className="text-slate-500">Tax</p>
                                                    <p className="font-bold text-slate-900 text-lg pt-2">Total</p>
                                                </div>
                                                <div className="text-right space-y-2 font-medium text-slate-900">
                                                    <p>$1,490.00</p>
                                                    <p>$120.00</p>
                                                    <p>$0.00</p>
                                                    <p className="font-bold text-lg text-primary pt-2">$1,610.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">Shipping Details</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm">
                                        <div className="font-bold text-slate-900 mb-1">John Doe</div>
                                        <div className="text-slate-600 leading-relaxed mb-4">
                                            123 Business Park Way,<br />
                                            Suite 400<br />
                                            New York, NY 10001<br />
                                            United States
                                        </div>
                                        <div className="pt-4 border-t border-slate-100">
                                            <p className="text-slate-500 mb-1 text-xs uppercase font-bold">Contact</p>
                                            <p className="text-slate-900">+1 (555) 123-4567</p>
                                            <p className="text-slate-900">john.doe@example.com</p>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">Supplier</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">SAT</div>
                                            <div>
                                                <div className="font-bold text-slate-900 text-sm">Shenzhen Audio Tech</div>
                                                <div className="text-xs text-green-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Verified</div>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full font-bold">
                                            <MessageSquare className="w-4 h-4 mr-2" /> Contact Supplier
                                        </Button>
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

export default OrderDetail;
