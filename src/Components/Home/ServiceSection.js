
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Home, 
  Truck, 
  Cherry, 
  Ticket, 
  FileText, 
  Car,
  Clock,
  MapPin,
  Star
} from "lucide-react";

const immediateServices = [
  {
    icon: Home,
    title: "Mairung Gaon Homestay",
    description: "Experience authentic village life in our serene homestay nestled in the Himalayas",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/26b8ca136_Homestay.jpg", 
    features: ["Available from Sept 1, 2025", "Curated Nature and Sight-seeing Tours", "Guided Trekking"],
    highlight: "Book Now",
    location: "Mairung Gaon, Kalimpong",
    link: createPageUrl("MairungGaonHomestay")
  },
  {
    icon: Truck,
    title: "Explore Meghalaya on Caravan",
    description: "Discover the Scotland of the East with our fully-equipped caravans complete with chauffeur, accommodation and cook",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1f4cdf8a6_Caravan.jpg",
    features: ["Chauffeur Included", "Mobile Accommodation", "Equipped With Full Kitchen"],
    highlight: "Ultimate Comfort",
    location: "Meghalaya",
    link: createPageUrl("PlanTrip")
  },
  {
    icon: Cherry,
    title: "Japan Cherry Blossom",
    description: "Witness the magical sakura season with our curated seasonal packages",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800&q=80",
    features: ["Seasonal Tours", "Curated Experiences", "Cultural Immersion"],
    highlight: "Limited Availability",
    location: "Japan",
    link: createPageUrl("PlanTrip")
  }
];

const otherServices = [
  {
    icon: Ticket,
    title: "Train & Flight Bookings",
    description: "Hassle-free ticket booking for your travel needs",
    link: createPageUrl("Contact")
  },
  {
    icon: FileText,
    title: "Visa & Permits",
    description: "Complete documentation support for your journeys",
    link: createPageUrl("Contact")
  },
  {
    icon: Car,
    title: "Regional Transportation",
    description: "Comfortable transport across North Bengal & North East India",
    link: createPageUrl("Contact")
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Travel Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From authentic homestays to caravan adventures, we create meaningful journeys 
            that connect you with culture, nature, and yourself.
          </p>
        </motion.div>

        {/* Immediate Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">
            Featured Experiences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {immediateServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Link to={service.link}>
                  <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-accent text-white">
                          {service.highlight}
                        </Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{service.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-primary">{service.title}</h4>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-accent" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Button className="w-full bg-primary hover:bg-green-700 text-white rounded-full py-3 font-semibold transition-all duration-300">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.link}>
                  <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 bg-white border-2 border-transparent hover:border-primary/20 cursor-pointer">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                        <service.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-primary text-white rounded-3xl p-12 mx-auto max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Your Next Adventure?
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              Let us craft a personalized journey that awakens your spirit of exploration
            </p>
            <div className="flex justify-center">
              <Link to={createPageUrl("PlanTrip")}>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Plan My Journey
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
