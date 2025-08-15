
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const media = [
  { type: 'video', src: 'https://viewporjoton.co.in/resources/Timelapse_Sunrise_View.MP4', thumbnail: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/16d884952_valley_view.jpg', alt: 'Homestay introduction video' },
  { type: 'image', src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/16d884952_valley_view.jpg', alt: 'Lush green valley view with terraced farms' },
  { type: 'image', src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/96f404fee_pine.jpg', alt: 'Misty pine forest' },
  { type: 'image', src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2e5870b79_Village.jpg', alt: 'A view of the local village houses' },
  { type: 'image', src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4275f431e_HS.jpg', alt: 'The homestay building from below' },
  { type: 'image', src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ec9b66603_sunrise.jpg', alt: 'Sunrise over misty mountains' },
  { type: 'image', src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a62f61b9e_RoomCollage.jpg', alt: 'Collage of homestay room interiors' },
];

export default function VerticalGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const renderMedia = (item) => {
    if (item.type === 'video') {
      return (
        <video
          key={item.src}
          className="w-full h-full object-cover"
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }
    return (
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover"
      />
    );
  };

  return (
    <div className="relative h-[85vh] w-full flex overflow-hidden bg-black">
      {/* Main Display */}
      <div className="relative flex-grow h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {renderMedia(media[activeIndex])}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-10 left-10 text-white z-10">
            <h1 className="text-5xl md:text-7xl font-bold">Mairung Gaon Homestay</h1>
            <p className="text-xl md:text-2xl mt-2 text-yellow-200">Where Nature Meets Serenity</p>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="hidden md:flex flex-col w-48 bg-black/30 backdrop-blur-sm p-4 space-y-4 overflow-y-auto">
        {media.map((item, index) => (
          <div
            key={index}
            className={`relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
              activeIndex === index ? 'border-white scale-105' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.thumbnail || item.src} alt={item.alt} className="w-full h-full object-cover" />
             {activeIndex === index && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-1/2 h-1 bg-white/80 rounded-full" />
                </div>
             )}
          </div>
        ))}
      </div>
    </div>
  );
}