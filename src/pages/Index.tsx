import { useState } from "react";
import { InquiryForm } from "@/components/InquiryForm";
import { EstimateResult } from "@/components/EstimateResult";
import heroImage from "@/assets/boutique-hero.jpg";

interface FormData {
  name: string;
  phone: string;
  clothingType: string;
  fabric: string;
  style: string;
  budget: string;
  deliveryTime: string;
}

interface EstimateData extends FormData {
  estimatedPrice: string;
  estimatedDays: string;
}

const Index = () => {
  const [showEstimate, setShowEstimate] = useState(false);
  const [estimateData, setEstimateData] = useState<EstimateData | null>(null);

  const calculateEstimate = (data: FormData): EstimateData => {
    // Simple estimation logic based on clothing type and delivery time
    let basePrice = 0;
    let baseDays = 0;

    // Base pricing by clothing type
    switch (data.clothingType) {
      case "ghaghra":
        basePrice = 15000;
        baseDays = 20;
        break;
      case "saree":
        basePrice = 8000;
        baseDays = 15;
        break;
      case "suit":
        basePrice = 6000;
        baseDays = 12;
        break;
      case "gown":
        basePrice = 12000;
        baseDays = 18;
        break;
      default:
        basePrice = 10000;
        baseDays = 15;
    }

    // Adjust based on delivery time
    if (data.deliveryTime === "urgent") {
      basePrice = Math.round(basePrice * 1.3);
      baseDays = Math.round(baseDays * 0.5);
    } else if (data.deliveryTime === "relaxed") {
      basePrice = Math.round(basePrice * 0.9);
    }

    // Add fabric premium if premium fabrics mentioned
    const premiumFabrics = ["silk", "velvet", "brocade", "chanderi"];
    if (premiumFabrics.some((fabric) => data.fabric.toLowerCase().includes(fabric))) {
      basePrice = Math.round(basePrice * 1.2);
    }

    const priceRange = `₹${basePrice.toLocaleString("en-IN")} - ₹${(basePrice * 1.5).toLocaleString("en-IN")}`;
    const daysRange = `${baseDays}-${baseDays + 5} days`;

    return {
      ...data,
      estimatedPrice: priceRange,
      estimatedDays: daysRange,
    };
  };

  const handleFormSubmit = (data: FormData) => {
    const estimate = calculateEstimate(data);
    setEstimateData(estimate);
    setShowEstimate(true);
  };

  const handleBack = () => {
    setShowEstimate(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Hero Section */}
      <header className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Samariaa Fashion Boutique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-tight">
            Samariaa
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Crafting Your Dreams into Exquisite Indian Fashion
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16">
        {!showEstimate ? (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Create Your Custom Order
              </h2>
              <p className="text-lg text-muted-foreground">
                Share your vision with us and we'll bring it to life. Our expert artisans specialize in
                creating stunning traditional and contemporary Indian wear tailored to your preferences.
              </p>
            </div>
            <InquiryForm onSubmit={handleFormSubmit} />
          </div>
        ) : (
          estimateData && <EstimateResult data={estimateData} onBack={handleBack} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Samariaa Fashion Boutique. Crafted with love for you.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
