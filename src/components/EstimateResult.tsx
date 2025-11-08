import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageCircle, Calendar, IndianRupee, ArrowLeft } from "lucide-react";

interface EstimateData {
  name: string;
  phone: string;
  clothingType: string;
  fabric: string;
  style: string;
  budget: string;
  deliveryTime: string;
  estimatedPrice: string;
  estimatedDays: string;
}

interface EstimateResultProps {
  data: EstimateData;
  onBack: () => void;
}

export const EstimateResult = ({ data, onBack }: EstimateResultProps) => {
  const generateWhatsAppMessage = () => {
    const message = `Hello Samariaa! 

I'm interested in ordering a custom ${data.clothingType}.

*Customer Details:*
Name: ${data.name}
Phone: ${data.phone}

*Design Preferences:*
- Clothing Type: ${data.clothingType}
- Fabric: ${data.fabric || "Any suitable fabric"}
- Style: ${data.style || "Open to suggestions"}
- Budget: ₹${data.budget || "Flexible"}
- Delivery Timeline: ${data.deliveryTime}

*Estimated Details:*
- Price Range: ${data.estimatedPrice}
- Production Time: ${data.estimatedDays}

Looking forward to working with you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Form
      </Button>

      <Card className="shadow-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
          <CardTitle className="text-2xl text-foreground">Your Custom Order Estimate</CardTitle>
          <CardDescription className="text-muted-foreground">
            Based on your preferences, here's what we recommend
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground text-lg">Order Details</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Customer:</span> {data.name}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Clothing Type:</span>{" "}
                  <Badge variant="secondary" className="ml-2">
                    {data.clothingType}
                  </Badge>
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Fabric:</span> {data.fabric || "To be decided"}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Style:</span> {data.style || "Custom design"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground text-lg">Estimates</h3>
              <div className="space-y-3">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 mb-1">
                    <IndianRupee className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">Price Range</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{data.estimatedPrice}</p>
                </div>

                <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-5 w-5 text-accent-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Production Time</span>
                  </div>
                  <p className="text-2xl font-bold text-accent-foreground">{data.estimatedDays}</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-4">
            <div className="bg-secondary/50 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">What's Next?</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Click the button below to send your inquiry via WhatsApp</li>
                <li>Our team will review your requirements and confirm the details</li>
                <li>We'll schedule a consultation to finalize the design</li>
                <li>Your custom outfit will be crafted with care and delivered on time</li>
              </ul>
            </div>

            <Button
              onClick={generateWhatsAppMessage}
              variant="elegant"
              size="lg"
              className="w-full text-lg py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Send Inquiry via WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
