import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import { assets } from '../assets/assets';

const Footer = () => {
  const businessWhatsappNumber = '9743935399';
  const businessWhatsappLink = `https://wa.me/${businessWhatsappNumber}`;
  const devWhatsappNumber = '9867378511';
  const devWhatsappLink = `https://wa.me/${devWhatsappNumber}`;

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-8 my-10 text-sm">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <img src={assets.logo} className='mb-5 w-16' alt="Nepliz Store Logo" />
            <p className='w-full text-gray-600 mb-4'>
              Nepliz Store is Nepal's premier destination for luxury, sports, and smart watches. 
              We bring you authentic timepieces from global brands along with exclusive 
              traditional Nepali-designed watches crafted by local artisans.
            </p>
            <div className="flex items-center gap-2 text-gray-600 mt-3">
              <MapPin className="w-4 h-4" />
              <span>New Road, Kathmandu, Nepal (Near Clock Tower)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mt-2">
              <Phone className="w-4 h-4" />
              <span>+9743935399</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mt-2">
              <Mail className="w-4 h-4" />
              <span>info@Nepliz Store.com</span>
            </div>
          </div>

          {/* QUICK LINKS Section */}
          <div>
            <p className='text-lg font-semibold mb-5 text-gray-800'>QUICK LINKS</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
              <li><a href="/about" className="hover:text-gray-800 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                About Nepliz Store
              </a></li>
              <li><a href="/products" className="hover:text-gray-800 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Watch Collections
              </a></li>
              <li><a href="/services" className="hover:text-gray-800 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Watch Repair Services
              </a></li>
              <li><a href="/contact" className="hover:text-gray-800 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Contact Us
              </a></li>
            </ul>
          </div>

          {/* CUSTOMER CARE Section */}
          <div>
            <p className='text-lg font-semibold mb-5 text-gray-800'>CUSTOMER CARE</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
              <li><a href="/shipping" className="hover:text-gray-800 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Shipping & Delivery
              </a></li>
              <li><a href="/returns" className="hover:text-gray-800 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Return Policy
              </a></li>
              <li><a href="/warranty" className="hover:text-gray-800 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Warranty Information
              </a></li>
              <li><a href="/faq" className="hover:text-gray-800 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                FAQ
              </a></li>
              <li><a href="/privacy" className="hover:text-gray-800 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                Privacy Policy
              </a></li>
            </ul>
          </div>

        </div>

        {/* Social Media & Contact */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Media */}
            <div>
              <p className='text-gray-800 font-medium mb-3'>CONNECT WITH US</p>
              <div className='flex gap-4'>
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/Nepliz StoreOfficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-blue-50 hover:bg-blue-100 rounded-full transition-colors group"
                >
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/nepliz.store/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-pink-50 hover:bg-pink-100 rounded-full transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-pink-600" />
                </a>

                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@nepliz.store" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-black rounded-full transition-colors group"
                >
                  <svg 
                    className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a 
                  href={businessWhatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-green-50 hover:bg-green-100 rounded-full transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </a>

                {/* YouTube */}
                <a 
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-red-50 hover:bg-red-100 rounded-full transition-colors group"
                >
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <p className='text-gray-800 font-medium mb-2'>NEED HELP WITH YOUR WATCH?</p>
              <div className="flex flex-col gap-1 text-gray-600">
                <div className="flex items-center justify-center md:justify-end gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <a href={businessWhatsappLink} target="_blank" rel="noopener noreferrer" 
                     className="hover:text-gray-800 transition-colors font-medium">
                    WhatsApp: {businessWhatsappNumber}
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-1">Mon-Sun: 8 AM - 8 PM</p>
              </div>
            </div>

          </div>
        </div>

        {/* Payment Methods & Business Info */}
        <div className="border-t border-gray-200 pt-8 pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Payment Methods */}
            <div>
              <p className="text-gray-600 text-sm mb-3">WE ACCEPT</p>
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600">
                  eSewa
                </div>
                <div className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600">
                  Khalti
                </div>
                <div className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600">
                  Fonepay
                </div>
                <div className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600">
                  Cash on Delivery
                </div>
                <div className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600">
                  Bank Transfer
                </div>
                <div className="px-3 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600">
                  Credit/Debit Card
                </div>
              </div>
            </div>

            {/* Language and Currency */}
            <div className="flex gap-4">
              <select className="bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-600">
                <option>NPR रू</option>
                <option>USD $</option>
                <option>INR ₹</option>
                <option>EUR €</option>
              </select>
              <select className="bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-600">
                <option>ENGLISH</option>
                <option>नेपाली</option>
                <option>हिन्दी</option>
              </select>
            </div>

          </div>
        </div>

        {/* Copyright & Legal Info */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className='text-sm text-gray-500'>
                © {new Date().getFullYear()} Nepliz Store. All Rights Reserved.
              </p>
              <p className='text-xs text-gray-500 mt-1'>
                Authorized dealer of Swiss, Japanese, and international watch brands in Nepal.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className='text-xs text-gray-500'>
                🇳🇵 Proudly Nepali | 🏢 Reg. No.: 123456789 | 🏛️ VAT No.: 123456789
              </p>
              <p className='mt-2 text-xs text-gray-500'>
                Developed by <a href={devWhatsappLink} target="_blank" rel="noopener noreferrer" 
                className="text-blue-500 hover:underline font-medium">Aryan Karki</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;