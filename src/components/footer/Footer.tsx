import { useState } from "react";

const Footer = () => {

    const [email, setEmail] = useState("")

    const handleNewsletterSubmit =()=>{
        
    }

    return (
        <div>
             <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">ShopNow</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for quality products at unbeatable prices. 
              Shop with confidence and enjoy fast, free shipping and exciting offers.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition">Premium Collection</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Trending</a></li>
             

  
              


           
          

              
           
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Track Order</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Report a complain</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Agent Help</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-indigo-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Press</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-2">Subscribe to our newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates on new products and upcoming sales
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
              >
                Subscribe by email for latest updates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 | All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm mr-2">We accept:</span>
              <div className="flex gap-2">
                {/* Visa */}
                <div className="bg-white p-1.5 rounded">
                  <svg className="w-8 h-5" viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="white"/>
                    <path d="M20.5 9h-3.8l-5.7 14h3.8l1.1-2.8h6.1l1.1 2.8h4.2L20.5 9zm-4.4 8.7l2-5.2 2 5.2h-4zm14.4-8.7h-3.8l-5.7 14h3.8l1.1-2.8h6.1l1.1 2.8h4.2L30.5 9zm-4.4 8.7l2-5.2 2 5.2h-4z" fill="#1434CB"/>
                  </svg>
                </div>
                {/* Mastercard */}
                <div className="bg-white p-1.5 rounded">
                  <svg className="w-8 h-5" viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="white"/>
                    <circle cx="18" cy="16" r="8" fill="#EB001B"/>
                    <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
                    <path d="M24 10c-1.7 1.4-2.8 3.6-2.8 6s1.1 4.6 2.8 6c1.7-1.4 2.8-3.6 2.8-6s-1.1-4.6-2.8-6z" fill="#FF5F00"/>
                  </svg>
                </div>
                {/* PayPal */}
                <div className="bg-white p-1.5 rounded">
                  <svg className="w-8 h-5" viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="white"/>
                    <path d="M18 8h-4l-3 14h3l.8-4h2.7c3.5 0 5.5-1.7 6-4.5.5-2.5-.8-4.5-3.5-5.5zm-1 6h-1.5l.6-3h1.5c1 0 1.5.5 1.4 1.3-.1 1.2-.9 1.7-2 1.7zm12 0h-1.5l.6-3h1.5c1 0 1.5.5 1.4 1.3-.1 1.2-.9 1.7-2 1.7zm-2-6h-4l-3 14h3l.8-4h2.7c3.5 0 5.5-1.7 6-4.5.5-2.5-.8-4.5-3.5-5.5z" fill="#003087"/>
                  </svg>
                </div>
                {/* Amex */}
                <div className="bg-white p-1.5 rounded">
                  <svg className="w-8 h-5" viewBox="0 0 48 32" fill="none">
                    <rect width="48" height="32" rx="4" fill="#006FCF"/>
                    <path d="M10 12h4l1 2 1-2h4v7h-3v-4l-1.5 2h-1l-1.5-2v4h-3v-7zm14 0h-6v7h6v-2h-3v-1h3v-2h-3v-1h3v-1z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-3 text-gray-400 text-xs">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
                <span>Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;
