import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Mail,
  Phone,
  MapPin,
  Globe,
  Upload,
  CheckCircle,
  Star,
  Users,
  Package,
  Award,
  Camera,
  FileText,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ListBusiness = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    businessType: "",
    establishedYear: "",
    employeeCount: "",
    website: "",
    
    // Contact Information
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    
    // Business Details
    mainProducts: "",
    categories: [] as string[],
    certifications: "",
    description: "",
    
    // Verification
    businessLicense: null,
    certificationDocs: null,
    agreeToTerms: false
  });
  const { toast } = useToast();

  const categories = [
    "Electronics", "Textiles & Apparel", "Machinery", "Automotive", 
    "Home & Garden", "Health & Beauty", "Computer Hardware", "Tools & Hardware",
    "Packaging & Printing", "Energy & Power", "Food & Beverage", "Sports & Entertainment"
  ];

  const businessTypes = [
    "Manufacturer", "Trading Company", "Distributor", "Wholesaler", "Service Provider"
  ];

  const employeeCounts = [
    "1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"
  ];

  const countries = [
    "China", "India", "United States", "Germany", "Japan", 
    "South Korea", "Vietnam", "Bangladesh", "Pakistan", "Other"
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCategoryToggle = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 2-3 business days.",
    });
  };

  const nextStep = () => {
    // Add validation for each step
    if (currentStep === 1) {
      if (!formData.companyName || !formData.businessType || !formData.establishedYear) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields in Company Information.",
          variant: "destructive"
        });
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.contactPerson || !formData.email || !formData.phone || 
          !formData.address || !formData.city || !formData.country) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields in Contact Details.",
          variant: "destructive"
        });
        return;
      }
    }
    if (currentStep === 3) {
      if (formData.categories.length === 0 || !formData.mainProducts || !formData.description) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields in Business Details.",
          variant: "destructive"
        });
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const steps = [
    { number: 1, title: "Company Info", icon: Building },
    { number: 2, title: "Contact Details", icon: Mail },
    { number: 3, title: "Business Details", icon: Package },
    { number: 4, title: "Verification", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Grow Your Business Globally
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              List Your Business
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join thousands of verified suppliers on WasanGroup and reach global buyers worldwide
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-10 relative">
            {/* Progress Line */}
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted -z-10 mx-10">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${(currentStep - 1) * 33.33}%` }}
              ></div>
            </div>
            
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center relative z-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentStep >= step.number 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-background border-2 border-muted text-muted-foreground'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs md:text-sm font-medium text-foreground">{step.title}</p>
                </div>
              </div>
            ))}
          </div>

          <Card className="shadow-xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="pb-6 pt-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold">Step {currentStep} of {steps.length}</CardTitle>
                  <CardDescription className="text-base mt-1">
                    {steps[currentStep - 1].title}
                  </CardDescription>
                </div>
                <div className="hidden md:block">
                  <Badge variant="outline" className="px-3 py-1 text-sm">
                    {currentStep === 1 && "Company Information"}
                    {currentStep === 2 && "Contact Details"}
                    {currentStep === 3 && "Business Profile"}
                    {currentStep === 4 && "Verification"}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Company Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          placeholder="Enter your company name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            {businessTypes.map(type => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="establishedYear">Established Year *</Label>
                        <Input
                          id="establishedYear"
                          type="number"
                          min="1900"
                          max="2024"
                          value={formData.establishedYear}
                          onChange={(e) => handleInputChange("establishedYear", e.target.value)}
                          placeholder="e.g., 2010"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="employeeCount">Number of Employees</Label>
                        <Select value={formData.employeeCount} onValueChange={(value) => handleInputChange("employeeCount", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employee count" />
                          </SelectTrigger>
                          <SelectContent>
                            {employeeCounts.map(count => (
                              <SelectItem key={count} value={count}>{count}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website">Company Website</Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="website"
                            type="url"
                            value={formData.website}
                            onChange={(e) => handleInputChange("website", e.target.value)}
                            placeholder="https://www.yourcompany.com"
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contactPerson">Contact Person *</Label>
                        <Input
                          id="contactPerson"
                          value={formData.contactPerson}
                          onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                          placeholder="Full name of contact person"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Business Email *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="contact@yourcompany.com"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="+86 138 0013 8000"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map(country => (
                              <SelectItem key={country} value={country}>{country}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Business Address *</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          placeholder="Street address"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="City name"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Business Details */}
                {currentStep === 3 && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Label className="text-lg font-medium">Product Categories *</Label>
                      <p className="text-sm text-muted-foreground">Select all that apply to your business</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {categories.map(category => (
                          <div 
                            key={category} 
                            className={`border rounded-lg p-3 cursor-pointer transition-all ${
                              formData.categories.includes(category)
                                ? 'border-primary bg-primary/5'
                                : 'border-muted hover:border-primary/30'
                            }`}
                            onClick={() => handleCategoryToggle(category)}
                          >
                            <div className="flex items-center">
                              <Checkbox
                                id={category}
                                checked={formData.categories.includes(category)}
                                className="mr-3"
                              />
                              <Label htmlFor={category} className="text-sm font-medium cursor-pointer">
                                {category}
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mainProducts">Main Products *</Label>
                      <Textarea
                        id="mainProducts"
                        value={formData.mainProducts}
                        onChange={(e) => handleInputChange("mainProducts", e.target.value)}
                        placeholder="List your main products and services (comma separated)"
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Company Description *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Describe your company, capabilities, and what makes you unique. Include key differentiators, experience, and value proposition."
                        rows={5}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="certifications">Certifications & Standards</Label>
                      <Input
                        id="certifications"
                        value={formData.certifications}
                        onChange={(e) => handleInputChange("certifications", e.target.value)}
                        placeholder="e.g., ISO 9001, CE, FDA, etc. (comma separated)"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Verification */}
                {currentStep === 4 && (
                  <div className="space-y-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Verification Documents</h3>
                      <p className="text-muted-foreground mt-2">
                        Upload required documents to complete your verification
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label className="flex items-center">
                            <FileText className="w-4 h-4 mr-2" />
                            Business License *
                          </Label>
                          <div className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-6 text-center transition-colors hover:border-primary/30">
                            <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground mb-3">
                              Upload your business license or registration certificate
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              <Upload className="w-4 h-4 mr-2" />
                              Choose File
                            </Button>
                            <p className="text-xs text-muted-foreground mt-2">
                              PDF, JPG, PNG up to 5MB
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label className="flex items-center">
                            <Award className="w-4 h-4 mr-2" />
                            Certification Documents
                          </Label>
                          <div className="border-2 border-dashed border-muted-foreground/25 rounded-xl p-6 text-center transition-colors hover:border-primary/30">
                            <Camera className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground mb-3">
                              Upload quality certifications (ISO, CE, etc.)
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              <Upload className="w-4 h-4 mr-2" />
                              Choose Files
                            </Button>
                            <p className="text-xs text-muted-foreground mt-2">
                              Multiple files allowed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                          className="mt-1"
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                          I agree to the WasanGroup{" "}
                          <a href="#" className="text-primary hover:underline font-medium">Supplier Terms</a>{" "}
                          and confirm that all information provided is accurate and complete.
                        </Label>
                      </div>
                      
                      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                        <div className="flex">
                          <ShieldCheck className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-blue-800">Verification Process</h4>
                            <p className="text-sm text-blue-700 mt-1">
                              Your application will be reviewed within 2-3 business days. 
                              We may contact you for additional information if needed.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-6"
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button 
                      type="button" 
                      onClick={nextStep}
                      className="px-8"
                    >
                      Next Step
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      disabled={!formData.agreeToTerms}
                      className="px-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Why List Your Business?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a trusted global marketplace with proven benefits for suppliers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-7 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Reach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with buyers from over 190 countries worldwide and expand your market reach
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-7 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Badge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get verified status to build trust and credibility with potential buyers
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
              <CardContent className="p-7 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Showcase Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Display your products with detailed descriptions and high-quality images
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListBusiness;