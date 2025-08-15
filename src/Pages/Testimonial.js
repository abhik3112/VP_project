import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, MapPin, Calendar, Users } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1494790108755-2616b056d045?w=150&q=80",
    rating: 5,
    experience: "Mairung Gaon Homestay",
    date: "October 2024",
    text: "The homestay in Mairung Gaon was absolutely magical. Waking up to mountain views and experiencing authentic village life was unforgettable. The hosts were incredibly warm and made us feel like family. The guided trekking through local trails was the highlight of our trip.",
    highlights: ["Authentic Experience", "Mountain Views", "Warm Hospitality"],
    tripType: "Family Trip"
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    rating: 5,
    experience: "Char Dhaam Helicopter Tour",
    date: "May 2024",
    text: "The Char Dhaam helicopter tour was a spiritual journey like no other. Professional service and breathtaking views made it worth every penny. The logistics were perfectly handled, and we could focus entirely on the spiritual experience. Highly recommended for elderly pilgrims.",
    highlights: ["Spiritual Journey", "Professional Service", "Breathtaking Views"],
    tripType: "Pilgrimage"
  },
  {
    name: "Sarah Johnson",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    rating: 5,
    experience: "Japan Cherry Blossom",
    date: "April 2024",
    text: "Cherry blossom season in Japan through View Porjoton was perfectly curated. Every detail was thoughtfully planned, from traditional ryokan stays to private garden visits. The cultural immersion experiences were extraordinary. Best travel decision I've made!",
    highlights: ["Perfect Curation", "Cultural Immersion", "Attention to Detail"],
    tripType: "Cultural Tour"
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad, Gujarat",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    rating: 4,
    experience: "Nathula & Zuluk Circuit",
    date: "September 2024",
    text: "The Old Silk Route journey exceeded all expectations. The historical significance combined with stunning landscapes made for an educational and beautiful trip. Our guide was knowledgeable and passionate about the region's history.",
    highlights: ["Historical Significance", "Stunning Landscapes", "Knowledgeable Guide"],
    tripType: "Adventure"
  },
  {
    name: "Dr. Meera Reddy",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&q=80",
    rating: 5,
    experience: "Neora Valley National Park",
    date: "November 2024",
    text: "As a nature enthusiast, the Neora Valley experience was phenomenal. The biodiversity, the peaceful environment, and the expert naturalist guide made it a learning adventure. Perfect for wildlife photography and bird watching.",
    highlights: ["Rich Biodiversity", "Expert Guide", "Photography Opportunities"],
    tripType: "Wildlife Tour"
  },
  {
    name: "Michael Thompson",
    location: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&q=80",
    rating: 5,
    experience: "Complete North Bengal Circuit",
    date: "December 2024",
    text: "View Porjoton crafted a comprehensive North Bengal experience for us. From Darjeeling tea gardens to Kalimpong monasteries, every day was filled with new discoveries. The seamless transportation and accommodation arrangements made it stress-free.",
    highlights: ["Comprehensive Experience", "Seamless Logistics", "Daily Discoveries"],
    tripType: "Cultural Circuit"
  }
];

const experienceCategories = [
  { name: "All Experiences", value: "all" },
  { name: "Homestays", value: "homestay" },
  { name: "Spiritual Tours", value: "spiritual" },
  { name: "Adventure", value: "adventure" },
  { name: "International", value: "international" }
];

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => 
        testimonial.experience.toLowerCase().includes(selectedCategory) ||
        testimonial.tripType.toLowerCase().includes(selectedCategory)
      );

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
              Stories from Our Travelers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover why thousands choose View Porjoton for their meaningful journeys
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-accent text-white px-6 py-2 text-lg">
                500+ Happy Travelers
              </Badge>
              <Badge className="bg-white text-primary px-6 py-2 text-lg">
                4.9★ Average Rating
              </Badge>
              <Badge className="bg-accent text-white px-6 py-2 text-lg">
                Authentic Reviews
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Destinations</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {experienceCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.value
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary text-lg">
                          {testimonial.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          {testimonial.location}
                        </div>
                        <div className="flex text-yellow-400">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-accent/10 text-accent">
                          {testimonial.experience}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {testimonial.date}
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Users className="w-4 h-4 mr-1" />
                        {testimonial.tripType}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="relative mb-4">
                      <Quote className="w-8 h-8 text-accent/20 absolute -top-2 -left-2" />
                      <p className="text-gray-700 leading-relaxed italic pl-6">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {testimonial.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Create Your Own Story?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Join hundreds of satisfied travelers who've discovered the magic of meaningful journeys with View Porjoton
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Share Your Story
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}