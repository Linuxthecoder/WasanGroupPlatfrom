import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LazyImage from "@/components/LazyImage";

interface Product {
    id: number;
    name: string;
    price: string;
    moq: string;
    supplier: string;
    rating: number;
    image?: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <Link to={`/app/product/${product.id}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-slate-100 bg-white">
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                    {product.image ? (
                        <LazyImage
                            src={product.image}
                            alt={product.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-slate-300 bg-slate-200">
                            Product Image
                        </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-[10px] font-medium bg-slate-100 text-slate-600">{product.supplier}</Badge>
                        <span className="flex items-center text-xs font-bold text-amber-500">
                            ★ {product.rating}
                        </span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1 leading-snug group-hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
                    <div className="flex items-end justify-between mt-4">
                        <div>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Price</p>
                            <p className="text-lg font-bold text-primary">{product.price}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">MOQ</p>
                            <p className="font-medium text-slate-700 text-sm">{product.moq}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductCard;
