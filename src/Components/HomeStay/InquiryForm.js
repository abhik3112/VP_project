import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Send, PartyPopper } from "lucide-react";
import { SendEmail } from "@/integrations/Core";

export default function InquiryForm() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        address: "",
        travelers: "",
        nights: "",
        date: "",
        flexibleDates: false,
        wantsUpgrade: "no",
        upgradeType: "",
        placesOfInterest: "",
        comments: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const uniqueId = Math.random().toString(36).substring(2, 8).toUpperCase();
        const subject = `Mairun Gaon Homestay Inquiry: ID:${uniqueId} / Name:${formData.name}`;
        
        const body = `
            A new inquiry has been submitted for Mairung Gaon Homestay.
            
            Enquiry ID: ${uniqueId}
            --------------------------------------------------
            Name: ${formData.name}
            Contact: ${formData.contact}
            Address: ${formData.address}
            
            Number of Travelers: ${formData.travelers}
            Number of Nights: ${formData.nights}
            Preferred Date: ${formData.date || 'Not specified'}
            Dates are Flexible: ${formData.flexibleDates ? 'Yes' : 'No'}
            
            Interested in Adventure Upgrade: ${formData.wantsUpgrade}
            ${formData.wantsUpgrade === 'yes' ? `Upgrade Type: ${formData.upgradeType}` : ''}
            ${formData.wantsUpgrade === 'yes' && formData.upgradeType === 'Sight-seeing packages' ? `Places of Interest: ${formData.placesOfInterest}` : ''}
            
            Additional Comments:
            ${formData.comments || 'None'}
            --------------------------------------------------
        `;

        try {
            await SendEmail({
                to: "contact@viewporjoton.co.in",
                subject,
                body
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Failed to send email", error);
            alert("Sorry, something went wrong. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-20">
                <PartyPopper className="w-16 h-16 mx-auto text-green-500 mb-4" />
                <h2 className="text-3xl font-bold text-primary mb-2">Thank You!</h2>
                <p className="text-lg text-gray-700">Your inquiry has been sent. We'll be in touch with you shortly!</p>
            </div>
        );
    }
    
    return (
        <Card className="shadow-2xl">
            <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center">Plan Your Stay</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal & Trip Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input placeholder="Full Name *" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} required />
                        <Input placeholder="Contact Number *" value={formData.contact} onChange={(e) => handleInputChange('contact', e.target.value)} required />
                        <Input placeholder="Address (City, State)" value={formData.address} onChange={(e) => handleInputChange('address', e.target.value)} />
                        <Select value={formData.travelers} onValueChange={(value) => handleInputChange('travelers', value)}>
                            <SelectTrigger><SelectValue placeholder="Number of Travelers" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1 person</SelectItem>
                                <SelectItem value="2-4">2-4 people</SelectItem>
                                <SelectItem value="5+">5+ people</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select value={formData.nights} onValueChange={(value) => handleInputChange('nights', value)}>
                            <SelectTrigger><SelectValue placeholder="Number of Nights" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1-2">1-2 nights</SelectItem>
                                <SelectItem value="3-5">3-5 nights</SelectItem>
                                <SelectItem value="6+">6+ nights</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input type="date" value={formData.date} onChange={(e) => handleInputChange('date', e.target.value)} />
                    </div>
                    <div className="flex items-center space-x-2"><Checkbox id="flexible" checked={formData.flexibleDates} onCheckedChange={(checked) => handleInputChange('flexibleDates', checked)} /><Label htmlFor="flexible">My dates are flexible</Label></div>

                    {/* Adventure Upgrade */}
                    <div>
                        <Label>Are you interested in upgrading your adventure?</Label>
                        <RadioGroup value={formData.wantsUpgrade} onValueChange={(value) => handleInputChange('wantsUpgrade', value)} className="flex space-x-4 mt-2">
                            <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="yes" /><Label htmlFor="yes">Yes</Label></div>
                            <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="no" /><Label htmlFor="no">No</Label></div>
                        </RadioGroup>
                    </div>

                    {formData.wantsUpgrade === 'yes' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-4 pl-4 border-l-2 border-accent">
                            <RadioGroup value={formData.upgradeType} onValueChange={(value) => handleInputChange('upgradeType', value)}>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Only pick-up/drop to and from Homestay" id="pickup" /><Label htmlFor="pickup">Only pick-up/drop</Label></div>
                                <div className="flex items-center space-x-2"><RadioGroupItem value="Sight-seeing packages" id="sightseeing" /><Label htmlFor="sightseeing">Sight-seeing packages</Label></div>
                            </RadioGroup>
                            {formData.upgradeType === 'Sight-seeing packages' && (
                                <Textarea placeholder="Which places are you interested in?" value={formData.placesOfInterest} onChange={(e) => handleInputChange('placesOfInterest', e.target.value)} />
                            )}
                        </motion.div>
                    )}

                    {/* Comments & Submit */}
                    <Textarea placeholder="Any other comments or special requests?" value={formData.comments} onChange={(e) => handleInputChange('comments', e.target.value)} />
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-orange-600 text-white py-3 text-lg font-semibold rounded-full">
                        {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5 mr-2" /> Send Inquiry</>}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}