import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
    MapPin,
    Users,
    Calendar,
    Mountain,
    Send,
    ArrowLeft,
    Clock,
    Camera,
    Compass,
    TreePine
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function PlanTrip() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        address: "",
        travelers: "",
        nights: "",
        date: "",
        flexibleDates: false,
        destination: "",
        activities: [],
        notes: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleActivityChange = (activity, checked) => {
        setFormData(prev => ({
            ...prev,
            activities: checked
                ? [...prev.activities, activity]
                : prev.activities.filter(a => a !== activity)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log("Trip planning form submitted:", formData);
        alert("Thank you! We'll get back to you within 24 hours with a personalized itinerary.");

        setIsSubmitting(false);
    };

    const destinationOptions = [
        "Mairung Gaon, Kalimpong",
        "Meghalaya (Caravan Tour)",
        "Japan (Cherry Blossom)",
        "North Bengal Circuit",
        "North East India",
        "Custom Destination"
    ];

    const activityOptions = [
        { id: "sightseeing", label: "Sight-seeing", icon: Camera },
        { id: "leisure", label: "Leisure & Relaxation", icon: TreePine },
        { id: "trekking", label: "Trekking/Hiking", icon: Mountain },
        { id: "cultural", label: "Cultural Experiences", icon: Compass },
        { id: "adventure", label: "Adventure Sports", icon: Mountain },
        { id: "photography", label: "Photography Tours", icon: Camera }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="hero-gradient py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="flex items-center justify-center mb-6">
                            <Link to={createPageUrl("Home")} className="mr-4">
                                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-primary">
                                    <ArrowLeft className="w-4 h-4" />
                                </Button>
                            </Link>
                            <h1 className="text-4xl md:text-6xl font-bold">
                                Plan Your Perfect Journey
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Tell us about your dream destination and we'll craft a personalized experience just for you
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                            <Mountain className="w-8 h-8 text-accent" />
                            <span className="text-lg">Your Adventure Awaits</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-20 bg-warm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Card className="shadow-2xl">
                            <CardHeader className="bg-primary text-white rounded-t-lg">
                                <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                                    <Send className="w-6 h-6 mr-3" />
                                    Trip Planning Form
                                </CardTitle>
                                <p className="text-center text-gray-200 mt-2">
                                    Fill out the details below and we'll create a customized itinerary for you
                                </p>
                            </CardHeader>

                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Personal Information */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-semibold text-primary border-b border-gray-200 pb-2">
                                            Personal Information
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                                                    Full Name *
                                                </Label>
                                                <Input
                                                    id="name"
                                                    placeholder="Your full name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                    required
                                                    className="w-full"
                                                />
                                            </div>

                                            <div>
                                                <Label htmlFor="contact" className="text-sm font-medium text-gray-700 mb-2 block">
                                                    Contact Number *
                                                </Label>
                                                <Input
                                                    id="contact"
                                                    type="tel"
                                                    placeholder="+91 XXX XXX XXXX"
                                                    value={formData.contact}
                                                    onChange={(e) => handleInputChange('contact', e.target.value)}
                                                    required
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <Label htmlFor="address" className="text-sm font-medium text-gray-700 mb-2 block">
                                                Address
                                            </Label>
                                            <Input
                                                id="address"
                                                placeholder="Your city, state"
                                                value={formData.address}
                                                onChange={(e) => handleInputChange('address', e.target.value)}
                                                className="w-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Trip Details */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-semibold text-primary border-b border-gray-200 pb-2">
                                            Trip Details
                                        </h3>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <div>
                                                <Label htmlFor="travelers" className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                                                    <Users className="w-4 h-4 mr-1" />
                                                    Number of Travelers *
                                                </Label>
                                                <Select value={formData.travelers} onValueChange={(value) => handleInputChange('travelers', value)} required>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select travelers" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1">1 person</SelectItem>
                                                        <SelectItem value="2">2 people</SelectItem>
                                                        <SelectItem value="3-4">3-4 people</SelectItem>
                                                        <SelectItem value="5-8">5-8 people</SelectItem>
                                                        <SelectItem value="9+">9+ people</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div>
                                                <Label htmlFor="nights" className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    Number of Nights *
                                                </Label>
                                                <Select value={formData.nights} onValueChange={(value) => handleInputChange('nights', value)} required>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select nights" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1-2">1-2 nights</SelectItem>
                                                        <SelectItem value="3-5">3-5 nights</SelectItem>
                                                        <SelectItem value="6-10">6-10 nights</SelectItem>
                                                        <SelectItem value="10+">10+ nights</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div>
                                                <Label htmlFor="date" className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    Preferred Date
                                                </Label>
                                                <Input
                                                    id="date"
                                                    type="date"
                                                    value={formData.date}
                                                    onChange={(e) => handleInputChange('date', e.target.value)}
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id="flexible"
                                                checked={formData.flexibleDates}
                                                onCheckedChange={(checked) => handleInputChange('flexibleDates', checked)}
                                            />
                                            <Label htmlFor="flexible" className="text-sm text-gray-700">
                                                My dates are flexible
                                            </Label>
                                        </div>
                                    </div>

                                    {/* Destination */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-semibold text-primary border-b border-gray-200 pb-2">
                                            Destination Preferences
                                        </h3>

                                        <div>
                                            <Label htmlFor="destination" className="text-sm font-medium text-gray-700 mb-2 block flex items-center">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                Where do you want to go? *
                                            </Label>
                                            <Select value={formData.destination} onValueChange={(value) => handleInputChange('destination', value)} required>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select destination" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {destinationOptions.map((destination) => (
                                                        <SelectItem key={destination} value={destination}>
                                                            {destination}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* Activities */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-semibold text-primary border-b border-gray-200 pb-2">
                                            Activity Preferences
                                        </h3>

                                        <div>
                                            <Label className="text-sm font-medium text-gray-700 mb-4 block">
                                                What kind of activities are you looking for? (Select all that apply)
                                            </Label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {activityOptions.map((activity) => (
                                                    <div key={activity.id} className="flex items-center space-x-3">
                                                        <Checkbox
                                                            id={activity.id}
                                                            checked={formData.activities.includes(activity.id)}
                                                            onCheckedChange={(checked) => handleActivityChange(activity.id, checked)}
                                                        />
                                                        <Label htmlFor={activity.id} className="flex items-center space-x-2 text-sm text-gray-700">
                                                            <activity.icon className="w-4 h-4" />
                                                            <span>{activity.label}</span>
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Notes */}
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-semibold text-primary border-b border-gray-200 pb-2">
                                            Additional Information
                                        </h3>

                                        <div>
                                            <Label htmlFor="notes" className="text-sm font-medium text-gray-700 mb-2 block">
                                                Tell us more about your preferences, special requirements, or anything else we should know
                                            </Label>
                                            <Textarea
                                                id="notes"
                                                placeholder="E.g., dietary restrictions, accessibility needs, special occasions, budget preferences, specific interests..."
                                                value={formData.notes}
                                                onChange={(e) => handleInputChange('notes', e.target.value)}
                                                className="w-full h-32"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-6 border-t border-gray-200">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-primary hover:bg-green-700 text-white py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                                    Planning Your Journey...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-3" />
                                                    Plan My Journey
                                                </>
                                            )}
                                        </Button>

                                        <p className="text-center text-sm text-gray-500 mt-4">
                                            We'll get back to you within 24 hours with a personalized itinerary and quote
                                        </p>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}