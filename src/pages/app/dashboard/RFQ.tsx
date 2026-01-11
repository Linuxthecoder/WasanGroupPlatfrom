import { useState } from "react";
import {
    FileText,
    Upload,
    Info,
    CheckCircle2,
    Plus,
    ChevronRight,
    Package,
    Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AppHeader from "../components/AppHeader";
import Sidebar from "../components/Sidebar";

const RFQ = () => {
    const [activeTab, setActiveTab] = useState("post");

    // Mock Active Requests
    const activeRequests = [
        { id: "RFQ-2024-001", title: "Looking for Bulk Cotton T-Shirts", qty: "10,000 Pcs", status: "Open", bids: 12, date: "2024-03-15" },
        { id: "RFQ-2024-002", title: "Custom Packaging Boxes", qty: "5,000 Units", status: "Reviewing", bids: 24, date: "2024-03-10" },
    ];

    return (
        <div className="flex h-screen bg-[#F0F2F5]">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <AppHeader title="Request for Quotation" />

                <div className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8 max-w-5xl">

                        {/* Introduction Banner */}
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8 shadow-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-2xl font-bold mb-2">Post a Request, Get Multiple Quotes</h1>
                                    <p className="text-blue-100 max-w-xl">Tell suppliers what you need and receive competitive bids within 24 hours. Compare prices, lead times, and terms efficiently.</p>
                                </div>
                                <FileText className="w-24 h-24 text-white/20 hidden md:block" />
                            </div>
                        </div>

                        <Tabs defaultValue="post" className="space-y-8">
                            <TabsList className="bg-white p-1 border border-slate-200 rounded-xl h-auto w-full md:w-auto inline-flex">
                                <TabsTrigger value="post" className="py-3 px-8 rounded-lg text-sm font-medium data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Post New RFQ</TabsTrigger>
                                <TabsTrigger value="manage" className="py-3 px-8 rounded-lg text-sm font-medium data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">Manage Requests</TabsTrigger>
                            </TabsList>

                            <TabsContent value="post">
                                <div className="grid lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2 space-y-6">
                                        <Card>
                                            <CardContent className="p-8 space-y-6">
                                                <div className="space-y-4">
                                                    <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                                                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">1</span>
                                                        Product Information
                                                    </h3>

                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-slate-700">Product Name <span className="text-red-500">*</span></label>
                                                        <Input placeholder="e.g., Wireless Bluetooth Headphones" />
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-slate-700">Category</label>
                                                            <Select>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select Category" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="electronics">Consumer Electronics</SelectItem>
                                                                    <SelectItem value="apparel">Apparel</SelectItem>
                                                                    <SelectItem value="machinery">Machinery</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-slate-700">Quantity <span className="text-red-500">*</span></label>
                                                            <div className="flex gap-2">
                                                                <Input placeholder="1000" type="number" />
                                                                <Select defaultValue="pcs">
                                                                    <SelectTrigger className="w-24">
                                                                        <SelectValue />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectItem value="pcs">Pcs</SelectItem>
                                                                        <SelectItem value="units">Units</SelectItem>
                                                                        <SelectItem value="sets">Sets</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-slate-700">Specifications / Details</label>
                                                        <Textarea placeholder="Describe specs, material, color, packaging requirements, etc." className="h-32" />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium text-slate-700">Attachments</label>
                                                        <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-slate-500 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
                                                            <Upload className="w-8 h-8 mb-2 text-slate-400" />
                                                            <p className="text-sm font-medium">Click to upload or drag files here</p>
                                                            <p className="text-xs text-slate-400 mt-1">Images, PDF, Drawings (Max 10MB)</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="space-y-4 pt-6 border-t">
                                                    <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2">
                                                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">2</span>
                                                        Sourcing Requirements
                                                    </h3>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-slate-700">Target Unit Price (USD)</label>
                                                            <Input placeholder="Optional" type="number" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-sm font-medium text-slate-700">Payment Terms</label>
                                                            <Select>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="T/T" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="tt">T/T</SelectItem>
                                                                    <SelectItem value="lc">L/C</SelectItem>
                                                                    <SelectItem value="paypal">PayPal</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <Button className="w-full h-12 text-base font-bold bg-slate-900 hover:bg-slate-800">
                                                    Submit Request
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </div>

                                    <div className="space-y-6">
                                        <Card className="bg-yellow-50 border-yellow-100">
                                            <CardContent className="p-6">
                                                <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                                                    <Info className="w-4 h-4" /> Improving Success Rate
                                                </h4>
                                                <ul className="text-sm text-yellow-700 space-y-2 list-disc pl-4">
                                                    <li>Be specific about specifications and certification requirements.</li>
                                                    <li>Upload reference images or technical drawings.</li>
                                                    <li>Set a realistic target price.</li>
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="manage">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="font-bold text-lg">My Requests</h3>
                                            <div className="flex gap-2">
                                                <Select defaultValue="all">
                                                    <SelectTrigger className="w-32 h-9 text-sm">
                                                        <SelectValue placeholder="Status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="all">All Status</SelectItem>
                                                        <SelectItem value="open">Open</SelectItem>
                                                        <SelectItem value="closed">Closed</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            {activeRequests.map(req => (
                                                <div key={req.id} className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors bg-white">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div>
                                                            <h4 className="font-bold text-slate-900">{req.title}</h4>
                                                            <p className="text-xs text-slate-500 font-mono mt-1">{req.id} • Posted on {req.date}</p>
                                                        </div>
                                                        <Badge className={req.status === 'Open' ? 'bg-green-100 text-green-700 hover:bg-green-100' : 'bg-blue-100 text-blue-700 hover:bg-blue-100'}>
                                                            {req.status}
                                                        </Badge>
                                                    </div>
                                                    <div className="flex items-center gap-6 mt-4 text-sm text-slate-600">
                                                        <div className="flex items-center gap-2">
                                                            <Package className="w-4 h-4 text-slate-400" />
                                                            {req.qty}
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <FileText className="w-4 h-4 text-slate-400" />
                                                            <span className="font-bold text-slate-900">{req.bids} Bids</span> Received
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 flex gap-3">
                                                        <Button size="sm" variant="outline" className="text-xs">View Quotes</Button>
                                                        <Button size="sm" variant="ghost" className="text-xs text-slate-500">Edit</Button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default RFQ;
