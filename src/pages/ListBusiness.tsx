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

import listBusinessHeader from "@/assets/list-business-header.jpg";
import listBusinessFormBg from "@/assets/list_business_header_bg_2.png";

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
      <section className="relative bg-background border-b overflow-hidden">
        {/* Background Image & Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${listBusinessHeader})` }}
        />
        <div className="absolute inset-0 bg-gray-900/80 mix-blend-multiply" />

        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 px-4 py-1 text-sm font-medium bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Grow Your Business Globally
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              List Your Business
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Join thousands of verified suppliers on WasanGroup and reach global buyers worldwide
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Professional Card Container */}
          <Card className="shadow-2xl shadow-gray-900/10 border border-gray-100 rounded-3xl overflow-hidden bg-white">

            {/* Progress Header */}
            <div className="relative bg-slate-900 px-8 py-10 overflow-hidden">
              {/* Header Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${listBusinessFormBg})` }}
              />
              <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply" />

              <div className="max-w-3xl mx-auto">
                <div className="flex justify-between items-center relative z-10">
                  {/* Connecting Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -z-10 mx-4 md:mx-12">
                    <div
                      className="h-full bg-primary transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.5)]"
                      style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    />
                  </div>

                  {steps.map((step) => (
                    <div key={step.number} className="flex flex-col items-center relative z-10 group cursor-default">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-4 ${currentStep >= step.number
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-110'
                            : 'bg-slate-800 border-slate-600 text-slate-400 group-hover:border-slate-500'
                          }`}
                      >
                        {currentStep > step.number ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <step.icon className="w-5 h-5" />
                        )}
                      </div>
                      <div className="mt-4 text-center absolute -bottom-8 w-32 -left-10">
                        <p className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${currentStep >= step.number ? 'text-white' : 'text-slate-500'
                          }`}>
                          {step.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Title & Description (Moved inside header) */}
              <div className="relative z-10 mt-16 text-center">
                <h2 className="text-3xl font-bold text-white tracking-tight">{steps[currentStep - 1].title}</h2>
                <p className="text-gray-300 mt-2 text-lg">Please provide accurate information for verification.</p>
              </div>
            </div>

            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Company Information */}
                {currentStep === 1 && (
                  <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-3 md:col-span-2">
                      <Label htmlFor="companyName" className="text-base font-semibold text-gray-700">Company Name <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          placeholder="Registered Legal Company Name"
                          className="pl-12 h-14 bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-lg transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="businessType" className="text-base font-semibold text-gray-700">Business Type <span className="text-red-500">*</span></Label>
                      <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
                        <SelectTrigger className="h-14 bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-base">
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map(type => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="establishedYear" className="text-base font-semibold text-gray-700">Established Year <span className="text-red-500">*</span></Label>
                      <Input
                        id="establishedYear"
                        type="number"
                        min="1900"
                        max="2025"
                        value={formData.establishedYear}
                        onChange={(e) => handleInputChange("establishedYear", e.target.value)}
                        placeholder="YYYY"
                        className="h-14 bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-base transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="employeeCount" className="text-base font-semibold text-gray-700">Employees</Label>
                      <Select value={formData.employeeCount} onValueChange={(value) => handleInputChange("employeeCount", value)}>
                        <SelectTrigger className="h-14 bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-base">
                          <SelectValue placeholder="Select Range" />
                        </SelectTrigger>
                        <SelectContent>
                          {employeeCounts.map(count => (
                            <SelectItem key={count} value={count}>{count}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="website" className="text-base font-semibold text-gray-700">Website URL</Label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="website"
                          type="url"
                          value={formData.website}
                          onChange={(e) => handleInputChange("website", e.target.value)}
                          placeholder="https://www.example.com"
                          className="pl-12 h-14 bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-base transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-3">
                      <Label htmlFor="contactPerson" className="text-base font-semibold text-gray-700">Contact Person <span className="text-red-500">*</span></Label>
                      <Input
                        id="contactPerson"
                        value={formData.contactPerson}
                        onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                        placeholder="Full Legal Name"
                        className="h-14 bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-base transition-all"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base font-semibold text-gray-700">Business Email <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="name@company.com"
                          className="pl-12 h-14 bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-base transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-base font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="pl-12 h-14 bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-base transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="country" className="text-base font-semibold text-gray-700">Country/Region <span className="text-red-500">*</span></Label>
                      <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                        <SelectTrigger className="h-14 bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-base">
                          <SelectValue placeholder="Select Country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map(country => (
                            <SelectItem key={country} value={country}>{country}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3 md:col-span-2">
                      <Label htmlFor="address" className="text-base font-semibold text-gray-700">Registered Address <span className="text-red-500">*</span></Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange("address", e.target.value)}
                          placeholder="Street Address, Building, Suite"
                          className="pl-12 h-14 bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-base transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Business Details */}
                {currentStep === 3 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold text-gray-700">Product Categories <span className="text-red-500">*</span></Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories.map(category => (
                          <div
                            key={category}
                            className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${formData.categories.includes(category)
                              ? 'border-primary bg-primary/5 shadow-sm'
                              : 'border-gray-100 bg-gray-50 hover:border-primary/30 hover:bg-white'
                              }`}
                            onClick={() => handleCategoryToggle(category)}
                          >
                            <Checkbox
                              id={category}
                              checked={formData.categories.includes(category)}
                              className="mr-3 rounded-md data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                            />
                            <Label htmlFor={category} className="text-sm font-medium cursor-pointer text-gray-700 flex-1">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="description" className="text-base font-semibold text-gray-700">Business Description <span className="text-red-500">*</span></Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="Tell us about your company, manufacturing capabilities, and what sets you apart..."
                        className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-primary focus:bg-white text-base p-4 resize-y"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Verification */}
                {currentStep === 4 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-6 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50 hover:bg-white hover:border-primary/50 transition-all text-center group cursor-pointer">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <FileText className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Business License</h4>
                        <p className="text-sm text-gray-500 mb-6">Upload clear scan of registration</p>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                          <Upload className="w-4 h-4 mr-2" /> Upload Document
                        </Button>
                      </div>

                      <div className="p-6 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/50 hover:bg-white hover:border-primary/50 transition-all text-center group cursor-pointer">
                        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Award className="w-8 h-8" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h4>
                        <p className="text-sm text-gray-500 mb-6">ISO, CE, FDA or other certificates</p>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                          <Upload className="w-4 h-4 mr-2" /> Upload Files
                        </Button>
                      </div>
                    </div>

                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-6 flex gap-4">
                      <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-blue-900">Verification Terms</h5>
                        <div className="flex items-center gap-2 mt-2">
                          <Checkbox
                            id="terms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                          />
                          <Label htmlFor="terms" className="text-sm text-blue-800 cursor-pointer">
                            I confirm the information is accurate and agree to the <a href="#" className="underline font-semibold">Terms of Service</a>.
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="text-gray-500 hover:text-gray-900 text-base font-medium pl-0 hover:bg-transparent"
                  >
                    {currentStep > 1 && "Start Over"} {currentStep > 1 && <span className="mx-2">or</span>} Go Back
                  </Button>

                  {currentStep < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      size="lg"
                      className="bg-gray-900 text-white hover:bg-black px-8 h-14 text-base font-semibold rounded-xl shadow-xl shadow-gray-200"
                    >
                      Continue to Next Step
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!formData.agreeToTerms}
                      size="lg"
                      className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white px-10 h-14 text-lg font-bold rounded-xl shadow-xl shadow-blue-200 transition-all transform hover:-translate-y-1"
                    >
                      Submit Application
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Improved Benefits Section */}
        <div className="max-w-7xl mx-auto mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Why Partner With Us?</h2>
            <p className="text-lg text-gray-500">World-class infrastructure to scale your business</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Global Access", desc: "Reach active buyers in 190+ countries instantly." },
              { icon: ShieldCheck, title: "Verified Status", desc: "Gain instant credibility with our verification badge." },
              { icon: Package, title: "Smart Showcasing", desc: "AI-powered product display to target right buyers." },
              { icon: CheckCircle, title: "Secure Payments", desc: "Guaranteed payments with our Trade Assurance." },
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-sm bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-primary">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListBusiness;