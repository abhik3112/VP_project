import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const places = [
  { name: 'Lava', image: 'https://images.unsplash.com/photo-1605330336914-6b2a087541f9?w=800&q=80' },
  { name: 'Kalimpong Town', image: 'https://images.unsplash.com/photo-1594497321955-375549a71a06?w=800&q=80' },
  { name: 'Lole Gaon', image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=800&q=80' },
  { name: 'Icche Gaon', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=800&q=80' },
  { name: 'Zuluk (Old Silk Route)', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
  { name: 'Neora Valley Park', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80' },
  { name: 'Rishop', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80' }
];

export default function NearbyPlacesSlider() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(prev => (prev === 0 ? places.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex(prev => (prev === places.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <motion.div
          key={index}
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex"
        >
          {places.map((place) => (
            <div key={place.name} className="w-full flex-shrink-0 px-2">
              <Card className="overflow-hidden">
                <div className="relative h-80">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white text-primary font-bold text-lg">{place.name}</Badge>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
      
      <button onClick={handlePrev} className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100">
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>
      <button onClick={handleNext} className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100">
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>
    </div>
  );
}