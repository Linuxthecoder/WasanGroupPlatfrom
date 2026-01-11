import { useState } from "react";
import {
    Plus,
    Search,
    Filter,
    MoreVertical,
    Edit,
    Trash2,
    Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import SellerSidebar from "../components/SellerSidebar";
import AppHeader from "../components/AppHeader";

const SellerProducts = () => {
    const products = [
        { id: 1, name: "Wireless Earbuds Pro", sku: "WE-PRO-001", price: "$12.00", stock: 1240, status: "Active", views: 4500 },
        { id: 2, name: "Bluetooth Speaker Mini", sku: "BS-MINI-002", price: "$8.50", stock: 50, status: "Low Stock", views: 2300 },
        { id: 3, name: "Smart Watch Series 5", sku: "SW-S5-003", price: "$45.00", stock: 0, status: "Out of Stock", views: 8900 },
        { id: 4, name: "Noise Cancelling Headphones", sku: "NC-HP-004", price: "$32.00", stock: 500, status: "Active", views: 1200 },
    ];

    return (
        <div className="flex h-screen bg-slate-50">
            <SellerSidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <AppHeader title="Product Management" />

                <div className="flex-1 overflow-y-auto">
                    <div className="container mx-auto px-4 py-8 max-w-7xl">

                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                            <div className="flex gap-4 w-full md:w-auto flex-1 max-w-lg">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <Input placeholder="Search products by name or SKU..." className="pl-10" />
                                </div>
                                <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                            </div>
                            <Button className="bg-primary hover:bg-blue-600 font-bold">
                                <Plus className="w-4 h-4 mr-2" /> Add New Product
                            </Button>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                            <Table>
                                <TableHeader className="bg-slate-50">
                                    <TableRow>
                                        <TableHead className="w-[100px]">Image</TableHead>
                                        <TableHead>Product Name</TableHead>
                                        <TableHead>SKU</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Stock</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {products.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>
                                                <div className="w-12 h-12 bg-slate-100 rounded-lg"></div>
                                            </TableCell>
                                            <TableCell className="font-medium text-slate-900">{product.name}</TableCell>
                                            <TableCell className="text-slate-500">{product.sku}</TableCell>
                                            <TableCell className="font-bold text-slate-900">{product.price}</TableCell>
                                            <TableCell className={product.stock < 100 ? "text-red-500 font-bold" : "text-slate-600"}>{product.stock}</TableCell>
                                            <TableCell>
                                                <Badge variant={product.status === 'Active' ? 'default' : product.status === 'Low Stock' ? 'secondary' : 'destructive'}
                                                    className={
                                                        product.status === 'Active' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                                                            product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100' :
                                                                'bg-red-100 text-red-700 hover:bg-red-100'
                                                    }
                                                >
                                                    {product.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon">
                                                            <MoreVertical className="w-4 h-4 text-slate-400" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem><Edit className="w-4 h-4 mr-2" /> Edit</DropdownMenuItem>
                                                        <DropdownMenuItem><Eye className="w-4 h-4 mr-2" /> View</DropdownMenuItem>
                                                        <DropdownMenuItem className="text-red-600"><Trash2 className="w-4 h-4 mr-2" /> Delete</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="flex items-center justify-between mt-4 text-sm text-slate-500">
                            <p>Showing 1-4 of 4 products</p>
                            <div className="flex gap-2">
                                <Button variant="outline" size="sm" disabled>Previous</Button>
                                <Button variant="outline" size="sm" disabled>Next</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default SellerProducts;
