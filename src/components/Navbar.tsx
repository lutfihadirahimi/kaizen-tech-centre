import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button onClick={() => handleNavClick('#home')} className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Kaizen Tech Centre Logo"
              className="w-10 h-10 rounded-lg object-contain group-hover:scale-110 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight tracking-tight">
                Kaizen<span className="text-accent-light"> Tech</span>
              </span>
              <span className="text-gray-400 text-[10px] leading-tight tracking-widest uppercase">
                Centre
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/60189185154?text=Hi%20Kaizen%20Tech%20Centre%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-primary/98 backdrop-blur-lg border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/60189185154?text=Hi%20Kaizen%20Tech%20Centre%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center mt-3 px-5 py-3 bg-gradient-to-r from-accent to-accent-dark text-white text-sm font-semibold rounded-lg"
          >
            Get a Quote via WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
