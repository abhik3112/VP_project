import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Heart,
    Globe,
    Users,
    Leaf,
    Mountain,
    Award,
    Target,
    Eye
} from "lucide-react";

export default function About() {
    const values = [
        {
            icon: Heart,
            title: "Authentic Experiences",
            description: "We believe in genuine connections with local communities and cultures"
        },
        {
            icon: Leaf,
            title: "Sustainable Tourism",
            description: "Promoting eco-conscious travel that benefits local communities"
        },
        {
            icon: Users,
            title: "Community Driven",
            description: "Supporting local businesses and creating meaningful employment"
        },
        {
            icon: Globe,
            title: "Global Perspective",
            description: "Connecting India with the world through thoughtful travel experiences"
        }
    ];

    const stats = [
        { number: "2025", label: "Year Founded" },
        { number: "500+", label: "Travelers Served" },
        { number: "50+", label: "Destinations" },
        { number: "4.9", label: "Average Rating" }
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
                            About View Porjoton
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            You dream the destination, we deliver the experience
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-accent text-white px-6 py-2 text-lg">
                                Authentic Experiences
                            </Badge>
                            <Badge className="bg-white text-primary px-6 py-2 text-lg">
                                Sustainable Tourism
                            </Badge>
                            <Badge className="bg-accent text-white px-6 py-2 text-lg">
                                Community Driven
                            </Badge>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-warm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="h-full p-8 shadow-xl">
                                <CardContent className="p-0">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                                            <Eye className="w-8 h-8 text-primary" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        To become a one-stop platform and most trusted name for meaningful travel,
                                        blending local homestays with curated travel experiences across India and beyond India.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="h-full p-8 shadow-xl">
                                <CardContent className="p-0">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-accent/10 p-3 rounded-full mr-4">
                                            <Target className="w-8 h-8 text-accent" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Our mission is to make offbeat destinations accessible and comfortable by blending
                                        hospitality, culture and community-driven experiences under one travel platform.
                                        We are committed to promoting eco-conscious and socially responsible tourism that
                                        benefits both our guests and communities we operate in.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                            Our Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide every journey we create
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <Card className="h-full p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                                    <CardContent className="p-0">
                                        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                                            <value.icon className="w-8 h-8 text-primary mx-auto" />
                                        </div>
                                        <h3 className="text-xl font-bold text-primary mb-3">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our Journey So Far
                        </h2>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Building trust through meaningful experiences
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-200 text-lg">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-warm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                                alt="Mountain landscape"
                                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center mb-6">
                                <Mountain className="w-8 h-8 text-accent mr-3" />
                                <h2 className="text-3xl font-bold text-primary">Our Story</h2>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    View Porjoton was born from a passion for authentic travel experiences
                                    and a deep love for the hidden gems of India. Starting with our homestay
                                    in the serene village of Mairung Gaon in Kalimpong, we've been crafting
                                    meaningful journeys that connect travelers with local communities.
                                </p>
                                <p>
                                    Our journey began with a simple belief: travel should be more than just
                                    visiting places—it should be about creating connections, understanding
                                    cultures, and leaving a positive impact on the communities we visit.
                                </p>
                                <p>
                                    From our base in the Himalayas, we've expanded to offer curated experiences
                                    across India and beyond, always maintaining our commitment to sustainable
                                    and responsible tourism.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}