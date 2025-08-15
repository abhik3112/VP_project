
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Heart, Coffee } from "lucide-react"; // Changed MessageHeart to Heart

export default function TestimonialsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Stories from Fellow Travelers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover what makes our journeys special through the eyes of those who've traveled with us
          </p>
        </motion.div>

        {/* Honest Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Heart className="w-8 h-8 text-orange-500" /> {/* Changed MessageHeart to Heart */}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                We're New, But We're Passionate! ✨
              </h3>
              <p className="text-lg text-orange-700 leading-relaxed max-w-3xl mx-auto">
                Okay, we'll be honest here - we're still collecting our first batch of amazing stories! 
                Think of us as that enthusiastic friend who's just discovered the perfect hidden café and can't wait to share it. 
                We've got the passion, the planning skills, and an unhealthy obsession with making your trip perfect. 
                What we don't have yet are walls full of testimonials... but hey, every legendary travel story starts somewhere, right? 
                <br /><br />
                <span className="font-semibold">Be our first storyteller!</span> We promise to make it worth sharing. ☕️
              </p>
              <div className="flex justify-center items-center mt-6 space-x-2 text-orange-600">
                <Coffee className="w-5 h-5" />
                <span className="text-sm italic">Currently fueled by dreams and coffee</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to be part of our journey and create the first stories together?
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">∞</p>
              <p className="text-gray-600">Potential Adventures</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">💯</p>
              <p className="text-gray-600">Commitment Level</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">🌟</p>
              <p className="text-gray-600">Future Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
