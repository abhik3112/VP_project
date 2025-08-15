import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const slides = [
  {
    id: 1,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e1a6cd3a1_HomeStay_View.jpg",
    title: "Discover Hidden Himalayas",
    subtitle: "Stay in our serene homestay in Mairung Gaon, Kalimpong",
    description: "Experience authentic village life surrounded by pristine nature and mountain views",
    cta: "Book Homestay"
  },
  {
    id: 2,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1f4cdf8a6_Caravan.jpg",
    title: "Explore Meghalaya on Caravan",
    subtitle: "Complete caravan experience with chauffeur, stay and cook",
    description: "Discover the Scotland of the East in comfort with our fully-equipped caravans",
    cta: "Plan Caravan Trip"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=1920&q=80",
    title: "Japan Cherry Blossom",
    subtitle: "Witness the magical sakura season in full bloom",
    description: "Curated seasonal packages for an unforgettable Japanese spring experience",
    cta: "Explore Japan"
  }
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[calc(100vh-80px)] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold mb-4 leading-tight"
          >
            {slides[currentSlide].title}
          </motion.h1>
          
          <motion.h2
            key={`subtitle-${currentSlide}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-6 text-yellow-200"
          >
            {slides[currentSlide].subtitle}
          </motion.h2>
          
          <motion.p
            key={`description-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
          >
            {slides[currentSlide].description}
          </motion.p>
          
          <motion.div
            key={`cta-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center"
          >
            <Link to={createPageUrl("PlanTrip")}>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Plan My Journey
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
      >
        <Play className={`w-4 h-4 ${isAutoPlaying ? 'opacity-100' : 'opacity-50'}`} />
      </button>
    </div>
  );
}