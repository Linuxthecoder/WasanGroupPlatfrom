import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, MessageCircle, Building2, CheckCircle } from "lucide-react";
import { useState } from "react";

interface SupplierCardProps {
  id: string;
  name: string;
  location: string;
  category: string;
  rating: number;
  verified?: boolean;
  description: string;
  products: string[];
  image?: string;
  onContact?: () => void;
  onViewProfile?: () => void;
}

// Helper to render star rating (with half stars)
const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const value = i + 1;
    return (
      <Star
        key={value}
        className={`h-4 w-4 ${
          rating >= value
            ? "fill-yellow-400 text-yellow-400"
            : rating > value - 0.5
            ? "fill-yellow-400/70 text-yellow-400/70"
            : "fill-transparent text-muted-foreground"
        }`}
      />
    );
  });
  return <div className="flex">{stars}</div>;
};

const SupplierCard = ({
  name,
  location,
  category,
  rating,
  verified = false,
  description,
  products,
  image,
  onContact,
  onViewProfile,
}: SupplierCardProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const maxDescriptionLines = isDescriptionExpanded ? Infinity : 2;
  const shouldExpand = description.split("\n").length > 2;

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden"
      aria-labelledby={`supplier-${name.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <CardContent className="p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Company Logo/Image */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center overflow-hidden border">
              {image && !imgError ? (
                <img
                  src={image}
                  alt={`${name} logo`}
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <Building2 className="h-8 w-8 text-primary" aria-hidden="true" />
              )}
            </div>
          </div>

          {/* Company Info */}
          <div className="flex-1 min-w-0 flex flex-col">
            {/* Name & Verified Badge */}
            <div className="flex items-center justify-between">
              <h3
                id={`supplier-${name.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate"
              >
                {name}
              </h3>
              {verified && (
                <CheckCircle
                  className="h-5 w-5 text-success ml-2 shrink-0"
                  aria-label="Verified supplier"
                />
              )}
            </div>

            {/* Location & Rating */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{location}</span>
              </div>
              <div className="flex items-center space-x-1">
                <StarRating rating={rating} />
                <span className="ml-1">{rating.toFixed(1)}</span>
              </div>
            </div>

            {/* Description with Expand/Collapse */}
            <p
              className={`text-sm text-muted-foreground mt-2 leading-relaxed ${
                isDescriptionExpanded ? "" : "line-clamp-2"
              }`}
              style={
                !isDescriptionExpanded
                  ? { WebkitLineClamp: maxDescriptionLines, display: "-webkit-box" }
                  : {}
              }
            >
              {description}
            </p>

            {shouldExpand && (
              <button
                type="button"
                className="text-xs text-primary hover:underline mt-1 self-start"
                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              >
                {isDescriptionExpanded ? "Show less" : "Show more"}
              </button>
            )}

            {/* Product Categories */}
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge variant="secondary" className="px-2 py-1 text-xs">
                {category}
              </Badge>
              {products.slice(0, 2).map((product, index) => (
                <Badge key={index} variant="outline" className="px-2 py-1 text-xs">
                  {product}
                </Badge>
              ))}
              {products.length > 2 && (
                <Badge variant="outline" className="px-2 py-1 text-xs">
                  +{products.length - 2} more
                </Badge>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 group"
                onClick={onContact}
                aria-label={`Contact ${name}`}
              >
                <MessageCircle className="h-4 w-4 mr-2 opacity-70 group-hover:opacity-100" />
                Contact
              </Button>
              <Button
                variant="default"
                size="sm"
                className="flex-1"
                onClick={onViewProfile}
                aria-label={`View profile of ${name}`}
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierCard;