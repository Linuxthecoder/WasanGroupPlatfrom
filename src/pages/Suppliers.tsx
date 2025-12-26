import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SupplierCard from "@/components/SupplierCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, MapPin, ChevronDown, Star, CheckCircle, MessageCircle, User, Building2, Phone, Mail, Globe, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import suppliersHeader from "@/assets/suppliers-header.png";

// Mock data for suppliers
const mockSuppliers = [
  {
    id: "1",
    name: "Shanghai Electronics Co., Ltd.",
    location: "Shanghai, China",
    category: "Electronics",
    rating: 4.8,
    verified: true,
    description: "Leading manufacturer of consumer electronics, mobile accessories, and smart devices. ISO certified with 15+ years experience.",
    products: ["Mobile Accessories", "Smart Watches", "Bluetooth Speakers", "Chargers"],
    contactPerson: "Li Wei",
    contactEmail: "sales@shanghaielectronics.com",
    contactPhone: "+86 21 1234 5678",
    website: "www.shanghaielectronics.com",
    established: "2008",
    employees: "500+",
    certifications: ["ISO 9001", "CE", "RoHS"]
  },
  {
    id: "2",
    name: "Guangzhou Textile Manufacturing",
    location: "Guangzhou, China",
    category: "Textiles",
    rating: 4.6,
    verified: true,
    description: "Premium textile manufacturer specializing in cotton fabrics, polyester blends, and custom clothing production.",
    products: ["Cotton Fabrics", "Polyester", "Custom Apparel", "Home Textiles"],
    contactPerson: "Chen Mei",
    contactEmail: "info@guangzhoutextile.com",
    contactPhone: "+86 20 8765 4321",
    website: "www.guangzhoutextile.com",
    established: "2010",
    employees: "300+",
    certifications: ["OEKO-TEX", "GOTS"]
  },
  {
    id: "3",
    name: "Shenzhen Tech Solutions",
    location: "Shenzhen, China",
    category: "Technology",
    rating: 4.9,
    verified: true,
    description: "Innovative technology solutions provider specializing in IoT devices, PCB manufacturing, and electronic components.",
    products: ["IoT Devices", "PCB Boards", "Sensors", "Microcontrollers"],
    contactPerson: "Zhang Wei",
    contactEmail: "contact@sztechsolutions.com",
    contactPhone: "+86 755 1122 3344",
    website: "www.sztechsolutions.com",
    established: "2015",
    employees: "200+",
    certifications: ["ISO 9001", "ISO 14001", "IECQ"]
  },
  {
    id: "4",
    name: "Ningbo Machinery Works",
    location: "Ningbo, China",
    category: "Machinery",
    rating: 4.7,
    verified: false,
    description: "Industrial machinery manufacturer with expertise in automation equipment, conveyor systems, and custom machinery solutions.",
    products: ["Conveyor Systems", "Automation Equipment", "Custom Machinery", "Industrial Tools"],
    contactPerson: "Wang Li",
    contactEmail: "sales@ningbomachinery.com",
    contactPhone: "+86 574 5566 7788",
    website: "www.ningbomachinery.com",
    established: "2012",
    employees: "400+",
    certifications: ["CE", "ISO 9001"]
  },
  {
    id: "5",
    name: "Xiamen Furniture Factory",
    location: "Xiamen, China",
    category: "Furniture",
    rating: 4.5,
    verified: true,
    description: "High-quality furniture manufacturer offering modern office furniture, home furniture, and custom woodworking solutions.",
    products: ["Office Furniture", "Home Furniture", "Custom Woodwork", "Chairs & Tables"],
    contactPerson: "Lin Hua",
    contactEmail: "info@xiamenfurniture.com",
    contactPhone: "+86 592 3344 5566",
    website: "www.xiamenfurniture.com",
    established: "2009",
    employees: "250+",
    certifications: ["FSC", "ISO 9001"]
  },
  {
    id: "6",
    name: "Dongguan Automotive Parts",
    location: "Dongguan, China",
    category: "Automotive",
    rating: 4.8,
    verified: true,
    description: "Automotive parts manufacturer supplying brake systems, engine components, and aftermarket accessories worldwide.",
    products: ["Brake Systems", "Engine Parts", "Accessories", "Custom Components"],
    contactPerson: "Zhou Ming",
    contactEmail: "sales@dongguanauto.com",
    contactPhone: "+86 769 6677 8899",
    website: "www.dongguanauto.com",
    established: "2011",
    employees: "350+",
    certifications: ["ISO/TS 16949", "ISO 14001"]
  }
];

const categories = ["All Categories", "Electronics", "Textiles", "Technology", "Machinery", "Furniture", "Automotive"];
const locations = ["All Locations", "Shanghai", "Guangzhou", "Shenzhen", "Ningbo", "Xiamen", "Dongguan"];
const ratings = ["All Ratings", "4.5+", "4.0+", "3.5+"];

const Suppliers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [suppliers] = useState(mockSuppliers);
  const [filteredSuppliers, setFilteredSuppliers] = useState(mockSuppliers);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Filter suppliers based on criteria
  useEffect(() => {
    const filtered = suppliers.filter(supplier => {
      const matchesSearch = supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        supplier.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        supplier.products.some(product => product.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All Categories" || supplier.category === selectedCategory;
      const matchesLocation = selectedLocation === "All Locations" || supplier.location.includes(selectedLocation);
      const matchesRating = selectedRating === "All Ratings" ||
        (selectedRating === "4.5+" && supplier.rating >= 4.5) ||
        (selectedRating === "4.0+" && supplier.rating >= 4.0) ||
        (selectedRating === "3.5+" && supplier.rating >= 3.5);

      return matchesSearch && matchesCategory && matchesLocation && matchesRating;
    });

    setFilteredSuppliers(filtered);
  }, [searchQuery, selectedCategory, selectedLocation, selectedRating, suppliers]);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedLocation("All Locations");
    setSelectedRating("All Ratings");
  };

  // Get active filters count
  const activeFilters = [
    selectedCategory !== "All Categories",
    selectedLocation !== "All Locations",
    selectedRating !== "All Ratings",
    searchQuery !== ""
  ].filter(Boolean).length;

  // Handle contact form submission
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(`Message sent to ${selectedSupplier.name}!`);
    setContactForm({ name: "", email: "", message: "" });
  };

  // Handle contact form input changes
  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="relative overflow-hidden py-20 md:py-24">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${suppliersHeader})` }}
        />
        <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Global Supplier Directory
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Connect with verified manufacturers and trusted suppliers worldwide
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search suppliers, products, or company names..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base md:text-lg border-transparent focus:border-primary rounded-xl bg-white shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="h-12 text-base border-transparent focus:border-primary rounded-xl bg-white shadow-sm">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="h-12 text-base border-transparent focus:border-primary rounded-xl bg-white shadow-sm">
                  <MapPin className="w-5 h-5 mr-2 text-gray-500" />
                  <SelectValue placeholder="All Locations" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                className="h-12 border-transparent bg-white shadow-sm rounded-xl justify-between hover:bg-gray-50"
                onClick={() => setShowFilters(!showFilters)}
              >
                <span className="flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-gray-500" />
                  More Filters
                  {activeFilters > 0 && (
                    <Badge className="ml-2" variant="secondary">{activeFilters}</Badge>
                  )}
                </span>
                <ChevronDown className={`h-5 w-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Minimum Rating</label>
                    <Select value={selectedRating} onValueChange={setSelectedRating}>
                      <SelectTrigger className="h-12 text-base border border-input rounded-lg">
                        <SelectValue placeholder="All Ratings" />
                      </SelectTrigger>
                      <SelectContent>
                        {ratings.map(rating => (
                          <SelectItem key={rating} value={rating}>
                            <div className="flex items-center">
                              {rating === "All Ratings" ? "All Ratings" : (
                                <>
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                                  <span>{rating}</span>
                                </>
                              )}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Verification</label>
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm">Verified Only</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Button variant="ghost" onClick={clearFilters} className="mr-2">
                    Clear All
                  </Button>
                  <Button onClick={() => setShowFilters(false)}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
          <div>
            <p className="text-muted-foreground text-lg font-medium">
              Showing {filteredSuppliers.length} suppliers
            </p>
            {activeFilters > 0 && (
              <div className="flex items-center mt-2">
                <span className="text-sm text-muted-foreground mr-2">Active filters:</span>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== "All Categories" && (
                    <Badge variant="secondary" className="text-xs">
                      {selectedCategory}
                    </Badge>
                  )}
                  {selectedLocation !== "All Locations" && (
                    <Badge variant="secondary" className="text-xs">
                      {selectedLocation}
                    </Badge>
                  )}
                  {selectedRating !== "All Ratings" && (
                    <Badge variant="secondary" className="text-xs">
                      {selectedRating}+
                    </Badge>
                  )}
                  {searchQuery && (
                    <Badge variant="secondary" className="text-xs">
                      "{searchQuery}"
                    </Badge>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-6">
          {filteredSuppliers.map(supplier => (
            <SupplierCard
              key={supplier.id}
              {...supplier}
              onViewProfile={() => setSelectedSupplier(supplier)}
              onContact={() => setSelectedSupplier(supplier)}
            />
          ))}
        </div>

        {filteredSuppliers.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">No suppliers found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Supplier Profile Modal */}
      {selectedSupplier && (
        <Dialog open={!!selectedSupplier} onOpenChange={() => setSelectedSupplier(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedSupplier.name}</DialogTitle>
            </DialogHeader>

            <Tabs defaultValue="profile" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile">Company Profile</TabsTrigger>
                <TabsTrigger value="contact">Contact Supplier</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card className="mt-4">
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          {selectedSupplier.verified && (
                            <CheckCircle className="h-6 w-6 text-green-500" />
                          )}
                          <Badge variant="secondary" className="text-sm">
                            {selectedSupplier.category}
                          </Badge>
                          <div className="flex items-center">
                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                            <span className="ml-1 font-medium">{selectedSupplier.rating}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {selectedSupplier.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Location</h4>
                            <p className="text-muted-foreground">{selectedSupplier.location}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Established</h4>
                            <p className="text-muted-foreground">{selectedSupplier.established}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Employees</h4>
                            <p className="text-muted-foreground">{selectedSupplier.employees}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Website</h4>
                            <a href={`https://${selectedSupplier.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                              {selectedSupplier.website}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-4">Main Products</h3>
                        <div className="grid gap-2">
                          {selectedSupplier.products.map((product, index) => (
                            <Badge key={index} variant="outline" className="w-fit">
                              {product}
                            </Badge>
                          ))}
                        </div>

                        <h3 className="text-lg font-semibold mt-6 mb-4">Certifications</h3>
                        <div className="grid gap-2">
                          {selectedSupplier.certifications.map((cert, index) => (
                            <Badge key={index} variant="secondary" className="w-fit">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact">
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle>Contact {selectedSupplier.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <User className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{selectedSupplier.contactPerson}</p>
                            <p className="text-sm text-muted-foreground">Contact Person</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{selectedSupplier.contactPhone}</p>
                            <p className="text-sm text-muted-foreground">Phone</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{selectedSupplier.contactEmail}</p>
                            <p className="text-sm text-muted-foreground">Email</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Globe className="h-5 w-5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">{selectedSupplier.website}</p>
                            <p className="text-sm text-muted-foreground">Website</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <form onSubmit={handleContactSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Your Name *</label>
                            <Input
                              id="name"
                              name="name"
                              value={contactForm.name}
                              onChange={handleContactChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Your Email *</label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={contactForm.email}
                              onChange={handleContactChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message *</label>
                            <textarea
                              id="message"
                              name="message"
                              value={contactForm.message}
                              onChange={handleContactChange}
                              className="w-full p-3 border rounded-lg min-h-32"
                              placeholder={`I'm interested in your ${selectedSupplier.products[0]} and would like to discuss potential collaboration...`}
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full">
                            Send Message
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </form>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  );
};

export default Suppliers;