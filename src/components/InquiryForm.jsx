import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

export const InquiryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    clothingType: "",
    fabric: "",
    style: "",
    budget: "",
    deliveryTime: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardTitle className="text-2xl text-foreground">Custom Order Inquiry</CardTitle>
        <CardDescription className="text-muted-foreground">
          Tell us about your dream outfit and we'll create it for you
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-border focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter your phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="border-border focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="clothingType">Clothing Type</Label>
            <Select
              value={formData.clothingType}
              onValueChange={(value) => setFormData({ ...formData, clothingType: value })}
              required
            >
              <SelectTrigger className="border-border focus:ring-primary">
                <SelectValue placeholder="Select clothing type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ghaghra">Ghaghra/Lehenga</SelectItem>
                <SelectItem value="saree">Saree</SelectItem>
                <SelectItem value="suit">Suit/Salwar Kameez</SelectItem>
                <SelectItem value="gown">Designer Gown</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fabric">Fabric Preference</Label>
            <Input
              id="fabric"
              placeholder="e.g., Silk, Cotton, Velvet, Georgette"
              value={formData.fabric}
              onChange={(e) => setFormData({ ...formData, fabric: e.target.value })}
              className="border-border focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="style">Style & Design Preference</Label>
            <Textarea
              id="style"
              placeholder="Describe the style, colors, embroidery, or any specific details you want"
              value={formData.style}
              onChange={(e) => setFormData({ ...formData, style: e.target.value })}
              className="min-h-24 border-border focus:ring-primary resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range (₹)</Label>
              <Input
                id="budget"
                placeholder="e.g., 10,000 - 15,000"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="border-border focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deliveryTime">When do you need it?</Label>
              <Select
                value={formData.deliveryTime}
                onValueChange={(value) => setFormData({ ...formData, deliveryTime: value })}
              >
                <SelectTrigger className="border-border focus:ring-primary">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urgent">Urgent (7-10 days)</SelectItem>
                  <SelectItem value="normal">Normal (15-20 days)</SelectItem>
                  <SelectItem value="relaxed">Flexible (30+ days)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" variant="elegant" size="lg" className="w-full">
            <MessageCircle className="mr-2 h-5 w-5" />
            Generate Estimate & Contact via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
