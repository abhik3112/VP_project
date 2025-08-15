import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Camera,
  Mountain,
  Plane,
  Cherry,
  Filter
} from "lucide-react";

const destinations = {
  himalayan: [
    {
      name: "Mairung Gaon Homestay",
      location: "Kalimpong, West Bengal",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      duration: "2-7 days",
      capacity: "4-6 guests",
      rating: 4.9,
      highlights: ["Village Life", "Mountain Views", "Guided Trekking"],
      description: "Experience authentic Himalayan village life in our serene homestay surrounded by pristine nature.",
      activities: ["Nature Walks", "Village Tours", "Traditional Cooking", "Stargazing"],
      nearbyAttractions: ["Nathula Pass", "Zuluk", "Neora Valley", "Changey Falls"]
    },
    {
      name: "Nathula & Zuluk Circuit",
      location: "Old Silk Route, Sikkim",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      duration: "3-5 days",
      capacity: "8-12 guests",
      rating: 4.8,
      highlights: ["Historic Silk Route", "Border Views", "Alpine Scenery"],
      description: "Journey through the historic Old Silk Route with breathtaking mountain vistas and cultural experiences.",
      activities: ["Historical Tours", "Photography", "Local Markets", "Cultural Interactions"],
      nearbyAttractions: ["Baba Harbhajan Singh Mandir", "Kupup Lake", "Elephant Lake"]
    },
    {
      name: "Neora Valley National Park",
      location: "Kalimpong, West Bengal",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      duration: "2-4 days",
      capacity: "6-10 guests",
      rating: 4.7,
      highlights: ["Wildlife Sanctuary", "Dense Forests", "Rare Species"],
      description: "Explore one of the richest biodiversity hotspots in the Eastern Himalayas.",
      activities: ["Wildlife Spotting", "Forest Trekking", "Bird Watching", "Nature Photography"],
      nearbyAttractions: ["Duka Valley", "Lava", "Lolegaon", "Rishop"]
    }
  ],
  spiritual: [
    {
      name: "Char Dhaam Helicopter Tour",
      location: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
      duration: "5-7 days",
      capacity: "4-6 per helicopter",
      rating: 4.9,
      highlights: ["Sacred Temples", "Aerial Views", "Spiritual Journey"],
      description: "Complete the sacred Char Dhaam pilgrimage by helicopter, visiting all four holy sites.",
      activities: ["Temple Visits", "Aerial Sightseeing", "Spiritual Ceremonies", "Cultural Immersion"],
      nearbyAttractions: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"]
    },
    {
      name: "Kedarnath Temple",
      location: "Kedarnath, Uttarakhand",
      image: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=800&q=80",
      duration: "2-3 days",
      capacity: "10-15 guests",
      rating: 4.8,
      highlights: ["Ancient Temple", "Spiritual Significance", "Mountain Setting"],
      description: "Visit one of the twelve Jyotirlingas of Lord Shiva, set amidst stunning Himalayan peaks.",
      activities: ["Temple Darshan", "Meditation", "Spiritual Discourses", "Mountain Trekking"],
      nearbyAttractions: ["Vasuki Tal", "Gandhi Sarovar", "Chorabari Tal"]
    }
  ],
  international: [
    {
      name: "Japan Cherry Blossom Experience",
      location: "Tokyo & Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&q=80",
      duration: "7-10 days",
      capacity: "12-20 guests",
      rating: 4.9,
      highlights: ["Sakura Season", "Cultural Immersion", "Traditional Gardens"],
      description: "Witness the magical cherry blossom season with curated experiences in Japan's most beautiful locations.",
      activities: ["Hanami Picnics", "Temple Visits", "Cultural Workshops", "Traditional Ceremonies"],
      nearbyAttractions: ["Mount Fuji", "Kyoto Gardens", "Tokyo Temples", "Osaka Castle"]
    }
  ]
};

export default function Destinations() {
  const [activeTab, setActiveTab] = useState("himalayan");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const tabCategories = [
    { id: "himalayan", label: "Himalayan", icon: Mountain, count: destinations.himalayan.length },
    { id: "spiritual", label: "Spiritual", icon: Star, count: destinations.spiritual.length },
    { id: "international", label: "International", icon: Plane, count: destinations.international.length }
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
              Discover Amazing Destinations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              From serene Himalayan villages to sacred temples and international wonders
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-accent text-white px-6 py-2 text-lg">
                50+ Destinations
              </Badge>
              <Badge className="bg-white text-primary px-6 py-2 text-lg">
                Expert Guides
              </Badge>
              <Badge className="bg-accent text-white px-6 py-2 text-lg">
                Authentic Experiences
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Content */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-white rounded-full p-2 shadow-lg">
                {tabCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center space-x-2 rounded-full py-3 px-6 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    <category.icon className="w-5 h-5" />
                    <span>{category.label}</span>
                    <Badge variant="secondary" className="ml-2">
                      {category.count}
                    </Badge>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(destinations).map(([key, categoryDestinations]) => (
                <TabsContent key={key} value={key} className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryDestinations.map((destination, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group"
                      >
                        <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                          <div className="relative h-64 overflow-hidden">
                            <img 
                              src={destination.image} 
                              alt={destination.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <div className="flex items-center space-x-1 text-white">
                                <Star className="w-4 h-4 fill-current text-yellow-400" />
                                <span className="text-sm font-semibold">{destination.rating}</span>
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <div className="flex items-center space-x-2 mb-2">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{destination.location}</span>
                              </div>
                              <div className="flex space-x-2">
                                {destination.highlights.map((highlight, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {highlight}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">
                              {destination.name}
                            </h3>
                            
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {destination.description}
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-accent" />
                                <span>{destination.duration}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Users className="w-4 h-4 text-accent" />
                                <span>{destination.capacity}</span>
                              </div>
                            </div>
                            
                            <div className="mb-4">
                              <h4 className="font-semibold text-primary mb-2">Activities</h4>
                              <div className="flex flex-wrap gap-2">
                                {destination.activities.slice(0, 3).map((activity, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {activity}
                                  </Badge>
                                ))}
                                {destination.activities.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{destination.activities.length - 3} more
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex space-x-2">
                              <Button 
                                className="flex-1 bg-primary hover:bg-green-700 text-white rounded-full"
                                onClick={() => setSelectedDestination(destination)}
                              >
                                View Details
                              </Button>
                              <Button 
                                variant="outline" 
                                size="icon"
                                className="rounded-full"
                              >
                                <Camera className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Let us create a personalized itinerary that matches your interests and dreams
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Plan My Trip
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
              >
                Get Custom Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}