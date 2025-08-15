import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageCircle,
    Calendar,
    Users,
    Mountain
} from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        travelDates: "",
        groupSize: ""
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            content: "Mairung Gaon, Kalimpong District, West Bengal, India",
            subContent: "Nestled in the serene Himalayas"
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+91 XXX XXX XXXX",
            subContent: "Mon-Sat: 9:00 AM - 6:00 PM"
        },
        {
            icon: Mail,
            title: "Email Us",
            content: "info@viewporjoton.com",
            subContent: "We respond within 24 hours"
        },
        {
            icon: Clock,
            title: "Office Hours",
            content: "Monday - Saturday",
            subContent: "9:00 AM - 6:00 PM IST"
        }
    ];

    const serviceOptions = [
        "Mairung Gaon Homestay",
        "Char Dhaam Helicopter Tour",
        "Japan Cherry Blossom Tour",
        "Train & Flight Booking",
        "Visa & Permits",
        "Transportation Services",
        "Custom Tour Package",
        "Other"
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="hero-gradient py-32 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Let's Plan Your Journey
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Ready to embark on a meaningful travel experience? We're here to help make it happen.
                        </p>
                        <div className="flex items-center justify-center space-x-4">
                            <Mountain className="w-8 h-8 text-accent" />
                            <span className="text-lg">Your Adventure Starts Here</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-warm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're here to answer your questions and help plan your perfect journey
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <Card className="h-full text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                                    <CardContent className="p-8">
                                        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                            <info.icon className="w-8 h-8 text-primary mx-auto" />
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-2">
                                            {info.title}
                                        </h3>
                                        <p className="text-gray-700 font-medium mb-1">
                                            {info.content}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {info.subContent}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="shadow-xl">
                                <CardContent className="p-8">
                                    <div className="flex items-center mb-6">
                                        <MessageCircle className="w-8 h-8 text-accent mr-3" />
                                        <h2 className="text-3xl font-bold text-primary">Send Us a Message</h2>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <Input
                                                    placeholder="Your full name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                    required
                                                    className="w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <Input
                                                    type="email"
                                                    placeholder="your@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                                    required
                                                    className="w-full"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <Input
                                                    type="tel"
                                                    placeholder="+91 XXX XXX XXXX"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Service Interest
                                                </label>
                                                <Select
                                                    value={formData.service}
                                                    onValueChange={(value) => handleInputChange('service', value)}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a service" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {serviceOptions.map((service) => (
                                                            <SelectItem key={service} value={service}>
                                                                {service}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    <Calendar className="w-4 h-4 inline mr-1" />
                                                    Preferred Travel Dates
                                                </label>
                                                <Input
                                                    type="date"
                                                    value={formData.travelDates}
                                                    onChange={(e) => handleInputChange('travelDates', e.target.value)}
                                                    className="w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    <Users className="w-4 h-4 inline mr-1" />
                                                    Group Size
                                                </label>
                                                <Select
                                                    value={formData.groupSize}
                                                    onValueChange={(value) => handleInputChange('groupSize', value)}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Number of travelers" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="1">1 person</SelectItem>
                                                        <SelectItem value="2">2 people</SelectItem>
                                                        <SelectItem value="3-5">3-5 people</SelectItem>
                                                        <SelectItem value="6-10">6-10 people</SelectItem>
                                                        <SelectItem value="10+">10+ people</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <Textarea
                                                placeholder="Tell us about your travel plans, preferences, and any special requirements..."
                                                value={formData.message}
                                                onChange={(e) => handleInputChange('message', e.target.value)}
                                                required
                                                className="w-full h-32"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-primary hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                                        >
                                            <Send className="w-5 h-5 mr-2" />
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Map & Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Map Placeholder */}
                            <Card className="shadow-xl">
                                <CardContent className="p-0">
                                    <div className="h-64 bg-gradient-to-br from-primary to-mountain-blue rounded-t-lg relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20" />
                                        <div className="absolute inset-0 flex items-center justify-center text-white">
                                            <div className="text-center">
                                                <MapPin className="w-16 h-16 mx-auto mb-4" />
                                                <h3 className="text-2xl font-bold mb-2">Find Us Here</h3>
                                                <p className="text-gray-200">Mairung Gaon, Kalimpong</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-primary mb-3">
                                            Our Location
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Located in the serene village of Mairung Gaon in Kalimpong district,
                                            our headquarters is surrounded by pristine nature and breathtaking mountain views.
                                        </p>
                                        <div className="space-y-2 text-sm">
                                            <p><strong>Distance from Kalimpong:</strong> 15 km</p>
                                            <p><strong>Nearest Airport:</strong> Bagdogra (80 km)</p>
                                            <p><strong>Nearest Railway:</strong> New Jalpaiguri (65 km)</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Response Promise */}
                            <Card className="shadow-xl bg-gradient-to-r from-accent to-orange-500 text-white">
                                <CardContent className="p-8 text-center">
                                    <h3 className="text-2xl font-bold mb-4">
                                        Quick Response Guarantee
                                    </h3>
                                    <p className="mb-4">
                                        We understand that planning your dream trip is exciting!
                                        That's why we promise to respond to all inquiries within 24 hours.
                                    </p>
                                    <div className="flex justify-center space-x-8 text-sm">
                                        <div>
                                            <p className="font-bold text-lg">24 hrs</p>
                                            <p>Response Time</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">7 days</p>
                                            <p>Per Week</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">365 days</p>
                                            <p>Per Year</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}