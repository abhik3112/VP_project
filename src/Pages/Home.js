import React from "react";
import HeroSlideshow from "../Components/Home/HeroSlideshow.js";
import ServicesSection from "../Components/Home/ServiceSection.js";
import TestimonialsPreview from "../Components/Home/TestimonialsPreview.js";

export default function Home() {
  return (
    <div>
      <HeroSlideshow />
      <ServicesSection />
      <TestimonialsPreview />
    </div>
  );
}