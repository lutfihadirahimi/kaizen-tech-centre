import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MessageCircle, Search, WifiOff } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A192F] flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#E91E63] rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#00BCD4] rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#E91E63] rounded-full animate-ping opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-3 h-3 bg-[#00BCD4] rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-[#E91E63] rounded-full animate-ping opacity-20" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-60 right-1/3 w-3 h-3 bg-[#00BCD4] rounded-full animate-ping opacity-25" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Gradient Mesh Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E91E63] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00BCD4] opacity-5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Animated Icon */}
        <div className="mb-8 relative">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#0d2240] border border-[#1a3358] mb-4">
            <WifiOff className="w-12 h-12 text-[#E91E63] animate-pulse" />
          </div>
          {/* Pulse Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#E91E63] opacity-20 animate-ping"></div>
        </div>

        {/* 404 Number */}
        <div className="relative mb-6">
          <h1 className="text-[120px] sm:text-[160px] font-black leading-none bg-gradient-to-r from-[#E91E63] via-[#E91E63] to-[#00BCD4] bg-clip-text text-transparent select-none">
            404
          </h1>
          {/* Glow Effect */}
          <div className="absolute inset-0 text-[120px] sm:text-[160px] font-black leading-none bg-gradient-to-r from-[#E91E63] to-[#00BCD4] bg-clip-text text-transparent blur-2xl opacity-30 select-none">
            404
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-400 text-lg mb-4 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Don't worry, let's get you back on track.
        </p>
        <p className="text-gray-500 text-sm mb-10">
          If you believe this is an error, please contact our support team.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Back to Home */}
          <Link
            to="/"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#E91E63]/25 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>

          {/* Contact Us */}
          <Link
            to="/#contact"
            className="group flex items-center gap-3 px-8 py-4 bg-[#0d2240] border border-[#1a3358] text-white rounded-xl font-semibold hover:border-[#00BCD4] hover:shadow-lg hover:shadow-[#00BCD4]/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <Search className="w-5 h-5 text-[#00BCD4] group-hover:scale-110 transition-transform" />
            Contact Us
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/60189185154?text=Hi%20Kaizen%20Tech%2C%20saya%20perlukan%20bantuan."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-[#0d2240] border border-[#1a3358] text-white rounded-xl font-semibold hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
            WhatsApp Us
          </a>
        </div>

        {/* Bottom Branding */}
        <div className="mt-16 pt-8 border-t border-[#1a3358]">
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src="/logo.png" alt="Kaizen Tech Centre" className="w-8 h-8 object-contain" />
            <span className="text-white font-bold">Kaizen Tech Centre</span>
          </div>
          <p className="text-gray-500 text-sm italic">"Your Tailored Tech"</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;