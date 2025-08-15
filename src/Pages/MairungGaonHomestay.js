
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VerticalGallery from '../components/homestay/VerticalGallery';
import NearbyPlacesSlider from '../components/homestay/NearbyPlacesSlider';
import InquiryForm from '../components/homestay/InquiryForm';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

import {
    MapPin,
    Mountain,
    Navigation,
    Plane,
    Info,
    Calendar,
    CloudRain,
    Thermometer,
    BedDouble,
    Users,
    DollarSign,
    Baby,
    Utensils,
    Coffee,
    Wind,
    Car,
    Star,
    Heart,
    Footprints,
    Bird,
    Waves,
    Trees,
    BookOpen,
    Home
} from 'lucide-react';

export default function MairungGaonHomestay() {

    const homestayInfo = [
        { icon: BedDouble, label: 'Number of Rooms', value: '2' },
        { icon: Users, label: 'Max Occupancy', value: '4 per room (+1 cot on request)' },
        { icon: DollarSign, label: 'Per Day Tariff', value: 'INR 1500 (seasonal variations apply)' },
        { icon: Baby, label: 'Child Policy', value: 'Under 5: Free | 5-12 years: Half rate | 12+: Full price' },
    ];

    const facilities = [
        { icon: Utensils, text: "Delicious homemade food (organic & locally sourced!)" },
        { icon: Wind, text: "Hot water for those chilly mountain mornings" },
        { icon: Coffee, text: "On-demand tea/coffee/hot chocolate (extra charge)" },
        { icon: Wind, text: "Room heater for cozy nights (extra charge)" },
        { icon: Wind, text: "Basic bath supplies (shampoo, soap, towels, slippers)" },
        { icon: Wind, text: "Electric kettle in each room" },
        { icon: Wind, text: "A warm welcome drink to start your stay right" },
        { icon: Star, text: "Board games available upon request" }
    ];

    const activities = [
        { icon: Footprints, title: 'Nature Walk', description: 'Get lost in the right direction.' },
        { icon: Bird, title: 'Bird-watching', description: "It's like Pokémon Go, but with real birds and less phone battery drain." },
        { icon: Trees, title: 'Short Hikes in Jungle', description: 'Leg day, but with better views and zero judgment.' },
        { icon: Waves, title: 'Community Swimming Pool', description: 'Take a dip in the coolest pool in town. Literally. (Not in package)' },
        { icon: Mountain, title: 'Hike to Changay Falls', description: 'A 2km hike to a waterfall. Your Instagram will thank you.' },
        { icon: BookOpen, title: 'Meditation at Stupa', description: 'Find your inner peace, or at least a quiet place to escape the family for an hour.' },
    ];

    return (
        <div className="min-h-screen bg-warm text-gray-800">
            {/* Custom Header for Homestay Page */}
            <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to={createPageUrl("Home")}>
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c81764d61_Homestay_Logo_Transparent_Compact.png"
                                alt="Mairung Gaon Homestay"
                                className="h-16 w-auto object-contain"
                            />
                        </Link>
                        <Link
                            to={createPageUrl("Home")}
                            className="font-semibold text-primary hover:text-accent transition-colors flex items-center space-x-2"
                        >
                            <Home className="w-4 h-4" />
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="pt-20">
                <VerticalGallery />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* About Mairung Gaon */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <Card className="shadow-xl overflow-hidden">
                            <CardHeader className="bg-primary text-white">
                                <CardTitle className="text-3xl font-bold flex items-center">
                                    <Mountain className="w-8 h-8 mr-3" />
                                    About Mairung Gaon: Your Head in the Clouds (Literally)
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div>
                                    <p className="text-lg leading-relaxed mb-6">
                                        Welcome to Mairung Gaon, a place so close to nature, you'll start to suspect you're part-tree. This serene village is where the mountains whisper secrets to the clouds, and the clouds like to hug the landscape. If you've ever wanted to know what it feels like to live inside a postcard, this is your chance.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start"><Mountain className="w-5 h-5 mr-3 mt-1 text-primary" /><span><strong>Altitude:</strong> approx 5350 feet (Just high enough to feel on top of the world).</span></div>
                                        <div className="flex items-start"><MapPin className="w-5 h-5 mr-3 mt-1 text-primary" /><span><strong>District:</strong> Kalimpong, West Bengal.</span></div>
                                        <div className="flex items-start"><Plane className="w-5 h-5 mr-3 mt-1 text-primary" /><span><strong>Nearest Airport:</strong> Bagdogra (IXB).</span></div>
                                        <div className="flex items-start"><Navigation className="w-5 h-5 mr-3 mt-1 text-primary" /><span><strong>Nearest Railway:</strong> New Mal Junction (NMZ) / New Jalpaiguri (NJP).</span></div>
                                    </div>
                                </div>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-bold text-xl text-primary mb-4 flex items-center"><Info className="w-6 h-6 mr-2" />A Heads-Up from a Friend</h4>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start"><CloudRain className="w-5 h-5 mr-3 mt-1 text-accent" /><span><strong>Monsoon (Jun-Sep):</strong> Bring a raincoat. Unless you enjoy surprise showers from Mother Nature.</span></div>
                                        <div className="flex items-start"><Thermometer className="w-5 h-5 mr-3 mt-1 text-accent" /><span><strong>Winter (Oct-Feb):</strong> Pack warm clothes. Shivering is a fun workout, but a jacket is more comfortable.</span></div>
                                        <div className="flex items-start"><Calendar className="w-5 h-5 mr-3 mt-1 text-accent" /><span><strong>When to Visit:</strong> Anytime! Every season puts on a different, spectacular show. We don't play favorites.</span></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.section>

                    {/* Nearby Places */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <h2 className="text-4xl font-bold text-primary text-center mb-4">Explore the Neighborhood</h2>
                        <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">Mairung Gaon is a great base camp for your adventures. Here are just a few of the amazing places you can visit nearby.</p>
                        <NearbyPlacesSlider />
                    </motion.section>

                    {/* Homestay Information */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <Card className="shadow-xl">
                            <CardHeader className="bg-primary text-white">
                                <CardTitle className="text-3xl font-bold flex items-center">
                                    <BedDouble className="w-8 h-8 mr-3" />
                                    Homestay Deets: Your Home on the Hill
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-1">
                                    <h4 className="text-2xl font-semibold text-primary mb-4">The Essentials</h4>
                                    <div className="space-y-4">
                                        {homestayInfo.map(info => (
                                            <div key={info.label} className="flex items-center">
                                                <info.icon className="w-6 h-6 mr-4 text-accent" />
                                                <div>
                                                    <p className="font-bold">{info.label}</p>
                                                    <p className="text-gray-600">{info.value}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-2xl font-semibold text-primary mb-4">Facilities & Comforts</h4>
                                        <div className="space-y-3">
                                            {facilities.map(facility => (
                                                <div key={facility.text} className="flex items-center">
                                                    <facility.icon className="w-5 h-5 mr-3 text-green-600" />
                                                    <span className="text-gray-700">{facility.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-600 mt-4 italic">
                                            <strong>A gentle reminder on food:</strong> Our hosts are culinary wizards, not psychics! Please discuss your meal preferences beforehand.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-semibold text-primary mb-4">Activities</h4>
                                        <div className="space-y-3">
                                            {activities.map(activity => (
                                                <div key={activity.title} className="flex items-start">
                                                    <activity.icon className="w-5 h-5 mr-3 mt-1 text-accent" />
                                                    <div>
                                                        <p className="font-bold">{activity.title}</p>
                                                        <p className="text-sm text-gray-600">{activity.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.section>

                    {/* Optional Services */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <div className="bg-primary rounded-2xl p-12 text-center shadow-lg">
                            <Car className="w-12 h-12 mx-auto mb-4 text-white" />
                            <h2 className="text-3xl font-bold mb-4 text-white">Want to Upgrade Your Adventure?</h2>
                            <p className="text-lg mb-6 max-w-3xl mx-auto text-gray-200">
                                We offer optional services like private car rentals to and from the airport/station, curated sight-seeing tours, and activity packages. Just let us know what you need when you book. You give us a date, and we'll craft the perfect trip for you!
                            </p>
                        </div>
                    </motion.section>

                    {/* Inquiry Form */}
                    <motion.section
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-primary text-center mb-4">Ready to Book Your Escape?</h2>
                        <p className="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto">Fill out the form below and we'll get back to you faster than a Himalayan breeze.</p>
                        <InquiryForm />
                    </motion.section>
                </div>
            </div>
            {/* Custom Footer for this page */}
            <footer className="bg-primary text-white py-8">
                <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 View Porjoton. All rights reserved. Crafted with passion for meaningful travel.</p>
                </div>
            </footer>
        </div>
    );
}
