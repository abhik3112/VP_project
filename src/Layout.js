import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Menu, 
  X, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone,
  MapPin
} from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", url: createPageUrl("Home") },
    { name: "About Us", url: createPageUrl("About") },
    { name: "Destinations", url: createPageUrl("Destinations") },
    { name: "Testimonials", url: createPageUrl("Testimonials") },
    { name: "Contact", url: createPageUrl("Contact") },
  ];
  
  // Hide layout footer on the MairungGaonHomestay page
  const showFooter = currentPageName !== 'MairungGaonHomestay';

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          :root {
            --primary-green: #2C5530;
            --accent-orange: #D2691E;
            --mountain-blue: #4682B4;
            --warm-beige: #F5F5DC;
            --deep-forest: #1B4332;
            --sunset-gold: #FFB347;
            --navy-blue: #1E3A8A;
          }
          
          .hero-gradient {
            background: linear-gradient(135deg, var(--deep-forest) 0%, var(--primary-green) 50%, var(--mountain-blue) 100%);
          }
          
          .text-primary { color: var(--primary-green); }
          .text-accent { color: var(--accent-orange); }
          .text-navy { color: var(--navy-blue); }
          .bg-primary { background-color: var(--primary-green); }
          .bg-accent { background-color: var(--accent-orange); }
          .bg-warm { background-color: var(--warm-beige); }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/26babcd9b_viewporjoton-Pic-scaled.png" 
                alt="View Porjoton Logo" 
                className="h-12 w-auto object-contain"
              />
              {currentPageName !== 'MairungGaonHomestay' && (
                <div className="flex flex-col justify-center">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/9e1eb04ae_view-porjonton-text.png" 
                    alt="View Porjoton" 
                    className="h-6 w-auto object-contain mb-1"
                  />
                  <p className="text-sm text-navy font-medium">Where Every View Tells A Story</p>
                </div>
              )}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-accent ${
                    location.pathname === item.url 
                      ? 'text-accent border-b-2 border-accent' 
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Media & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-3">
                <a href="https://wa.me/919593922205" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition-colors text-gray-700 hover:text-accent">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ceaed59c5_whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61573411860148" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition-colors text-gray-700 hover:text-accent">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:contact@viewporjoton.co.in" className="p-2 rounded-full transition-colors text-gray-700 hover:text-accent">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/viewporjoton" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full transition-colors text-gray-700 hover:text-accent">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md transition-colors text-gray-700"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`block text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.url 
                      ? 'text-accent' 
                      : 'text-gray-700 hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4 border-t">
                <a href="https://wa.me/919593922205" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 hover:text-accent">
                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ceaed59c5_whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61573411860148" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 hover:text-accent">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="mailto:contact@viewporjoton.co.in" className="p-2 text-gray-700 hover:text-accent">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/viewporjoton" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-700 hover:text-accent">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className={showFooter ? "pt-20" : ""}>
        {children}
      </main>

      {/* Footer */}
      {showFooter && (
        <footer className="bg-primary text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/26babcd9b_viewporjoton-Pic-scaled.png" 
                    alt="View Porjoton Logo" 
                    className="h-8 w-auto object-contain"
                  />
                  <h3 className="text-xl font-bold">View Porjoton</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Your gateway to meaningful travel experiences across India and beyond.
                </p>
                <div className="flex space-x-4">
                  <a href="https://wa.me/919593922205" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ceaed59c5_whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain" />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61573411860148" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="mailto:contact@viewporjoton.co.in" className="text-white hover:text-accent transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/viewporjoton" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.name}>
                      <Link 
                        to={item.url} 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Mairung Gaon Homestay</li>
                  <li>Meghalaya Caravan Tours</li>
                  <li>Japan Cherry Blossom Tours</li>
                  <li>Train & Flight Bookings</li>
                  <li>Visa & Permits</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Ghera Bari Lane 2, Near Sanyasi Mandir, Dist. - Darjeeling, Siliguri 734012</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+91-9593958187</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ceaed59c5_whatsapp.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
                    <span>+91-9593922205</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>contact@viewporjoton.co.in</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 View Porjoton. All rights reserved. Crafted with passion for meaningful travel.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}