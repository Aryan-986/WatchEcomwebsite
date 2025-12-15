import React, { useState } from 'react';
import { assets } from '../assets/assets';

const IndependenceSection = () => {
  const [isImageLoaded] = useState(true);

  // Using images from assets folder
  const mainWatchImage = assets.c5;
  const galleryImages = [
    assets.c1,
    assets.c3,
    assets.c4,
    assets.c2
  ];

  const values = [
    {
      number: "01",
      title: "CURATED SELECTION",
      description: "We handpick only the finest watches from trusted global brands, offering you an exclusive online collection of premium timepieces."
    },
    {
      number: "02",
      title: "SEAMLESS ONLINE EXPERIENCE",
      description: "From browsing to delivery, we provide a premium digital shopping experience with secure checkout and easy navigation."
    },
    {
      number: "03",
      title: "AUTHENTICITY ASSURED",
      description: "Every watch comes with official warranty, certification, and our guarantee of 100% authenticity, sourced directly from authorized distributors."
    },
    {
      number: "04",
      title: "VIRTUAL CONCIERGE",
      description: "Our watch experts are available online to provide personalized recommendations, video consultations, and after-sales support."
    }
  ];

  const features = [
    {
      icon: "🛒",
      text: "Nepal's premier online watch boutique"
    },
    {
      icon: "🌐",
      text: "Established 2025 - Redefining online watch retail"
    },
    {
      icon: "🛡️",
      text: "Secure online transactions with multiple payment options"
    },
    {
      icon: "🚚",
      text: "Free shipping across Nepal with express delivery"
    },
    {
      icon: "💬",
      text: "Live chat support and virtual watch consultations"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Digital pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-900 to-transparent"></div>
        
        {/* Digital glow effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
        
        {/* Digital grid pattern */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `linear-gradient(90deg, #333 1px, transparent 1px),
                                 linear-gradient(180deg, #333 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Top Section with Title and Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24 lg:mb-32">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Online Store Badge */}
            <div className="inline-block mb-8 px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full">
              <span className="text-sm tracking-widest font-medium uppercase">ONLINE BOUTIQUE EST. 2025</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
              PREMIUM TIMEPIECES<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400">
                AT YOUR FINGERTIPS
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="inline-block border-t border-b border-gray-700 py-3 px-6 mb-12">
              <p className="text-base sm:text-lg tracking-widest uppercase font-medium">
                NEPAL'S LUXURY WATCH<br />ONLINE DESTINATION
              </p>
            </div>
            
            {/* Description */}
            <div className="max-w-xl">
              <p className="text-base sm:text-lg font-light leading-relaxed text-gray-300">
                Welcome to Nepal's premier online destination for luxury watches. We've curated an exclusive 
                collection of the world's finest timepieces, bringing premium watch retailing directly to your 
                screen. No more compromises on quality, authenticity, or style—just seamless digital access to 
                watches that define sophistication.
              </p>
              <p className="text-base sm:text-lg font-light leading-relaxed text-gray-300 mt-4">
                As an online-only boutique, we combine the convenience of digital shopping with the assurance 
                of premium quality. Every watch is authenticated, insured during transit, and delivered with 
                the care and expertise you'd expect from a luxury retailer.
              </p>
            </div>
            
            {/* Features List */}
            <div className="mt-12 space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{feature.icon}</span>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 hover:scale-105">
                Shop Collection
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-medium rounded-full transition-all duration-300">
                Book Virtual Consultation
              </button>
            </div>
          </div>
          
          {/* Right Column - Actual Image from assets */}
          <div className="order-1 lg:order-2 relative">
            {/* Image Container with actual image */}
            <div className="relative h-64 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden transition-all duration-1000 group">
              
              {/* Main Watch Image */}
              <img 
                src={mainWatchImage} 
                alt="Premium Luxury Timepiece"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                } group-hover:scale-105`}
              />
              
              {/* Digital overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              
              {/* Brand name overlay */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="text-2xl font-bold tracking-widest text-white">DIGITAL BOUTIQUE</span>
                <p className="text-xs text-gray-300 mt-1">EXCLUSIVE ONLINE RETAIL</p>
              </div>
              
              {/* Online indicator */}
              <div className="absolute top-4 left-4">
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">ONLINE NOW</span>
                </div>
              </div>
              
              {/* Secure badge */}
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-gray-700">
                  <span className="text-xs text-white">🔒 SECURE CHECKOUT</span>
                </div>
              </div>
            </div>
            
            {/* Image frame decoration */}
            <div className="absolute -inset-4 border border-gray-700/50 rounded-2xl pointer-events-none group-hover:border-cyan-500/50 transition-all duration-500"></div>
            
            {/* Image info */}
            <div className="absolute -bottom-4 right-4">
              <div className="px-4 py-2 bg-black/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-gray-700">
                Featured Collection
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="relative mb-16 lg:mb-24">
          <div className="h-1 bg-gradient-to-r from-transparent via-cyan-600 via-purple-600 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-cyan-600 rounded-full"></div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20 lg:mb-32">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-wider">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                WHY SHOP WITH US
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-600 via-white to-purple-600 mx-auto"></div>
          </div>
          
          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="relative p-6 bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
                  
                  {/* Large Number */}
                  <div className="text-6xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors duration-500 mb-4">
                    {value.number}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-wider uppercase mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500">
                    {value.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                    {value.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent group-hover:via-cyan-500 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Online Features Section */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-lg font-bold mb-2">Nationwide Delivery</h3>
            <p className="text-sm text-gray-400">Free shipping across Nepal with premium packaging and insurance</p>
          </div>
          
          <div className="p-6 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-bold mb-2">Virtual Try-On</h3>
            <p className="text-sm text-gray-400">AR technology to visualize watches on your wrist before purchase</p>
          </div>
          
          <div className="p-6 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 text-center">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-lg font-bold mb-2">Flexible Payments</h3>
            <p className="text-sm text-gray-400">eSewa, Khalti, cards, EMI options, and secure online payments</p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="relative">
            {/* Quote marks */}
            <span className="absolute -top-6 -left-6 text-4xl text-cyan-500 font-serif">"</span>
            <span className="absolute -bottom-6 -right-6 text-4xl text-purple-500 font-serif">"</span>
            
            <p className="text-lg sm:text-xl italic text-gray-300 px-4 py-8 bg-gradient-to-r from-gray-900/50 to-black border border-gray-800 rounded-2xl">
              Luxury should be accessible. We're bringing the world's finest watches to Nepal with just a click, 
              combining digital convenience with uncompromising quality and authenticity.
            </p>
            
            <div className="mt-6">
              <p className="text-sm text-gray-400 uppercase tracking-widest">DIGITAL LUXURY, AUTHENTIC EXPERIENCE</p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="w-8 h-0.5 bg-cyan-600"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-8 h-0.5 bg-purple-600"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-24 lg:mt-32">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-wider mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                FEATURED COLLECTIONS
              </span>
            </h3>
            <p className="text-gray-400">Browse our exclusive online collections</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-48 sm:h-56 rounded-xl overflow-hidden group cursor-pointer">
                <img 
                  src={image} 
                  alt={`Luxury Watch Model ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm font-medium text-white">
                    {['Digital Classic', 'Urban Elegance', 'Executive Pro', 'Modern Heritage'][index]}
                  </p>
                  <p className="text-xs text-gray-300">Online Exclusive</p>
                </div>
                <div className="absolute inset-0 border border-gray-700/50 group-hover:border-cyan-500/50 transition-colors duration-500 rounded-xl"></div>
                
                {/* Quick view button */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs">
                    👁️ Quick View
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "2025", label: "Online Launch" },
            { number: "50+", label: "Global Brands" },
            { number: "1000+", label: "Happy Customers" },
            { number: "24/7", label: "Online Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-colors duration-300">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xs text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center border-t border-gray-800 pt-12">
          <h3 className="text-2xl font-bold mb-6">START YOUR ONLINE JOURNEY</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Experience luxury watch shopping reimagined for the digital age. 
            Browse our collections, chat with our experts, and have premium timepieces delivered to your door.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300">
              Browse All Watches
            </button>
            <button className="px-6 py-3 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black font-medium rounded-full transition-colors duration-300">
              Live Chat with Expert
            </button>
            <button className="px-6 py-3 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-black font-medium rounded-full transition-colors duration-300">
              Download Our App
            </button>
          </div>
        </div>

      </div>

      {/* Online Store Badge */}
      <div className="fixed bottom-8 right-8 z-20 hidden lg:block">
        <div className="relative">
          <div className="w-16 h-16 border border-cyan-500/50 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/50">
            <div className="text-center">
              <span className="text-xs font-serif text-cyan-400 block leading-tight">ONLINE</span>
              <span className="text-[10px] text-gray-300 block">STORE</span>
            </div>
          </div>
          <div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        </div>
      </div>

      {/* Mobile Badge */}
      <div className="fixed bottom-4 left-4 z-20 lg:hidden">
        <div className="w-12 h-12 border border-cyan-500/50 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/50">
          <div className="text-center">
            <span className="text-[10px] font-bold text-cyan-400">WEB</span>
            <span className="text-[8px] text-gray-300 block">2025</span>
          </div>
        </div>
      </div>


      {/* CSS Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin-slow linear infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default IndependenceSection;