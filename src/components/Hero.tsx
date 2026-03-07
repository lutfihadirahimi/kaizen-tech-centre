import { ArrowRight, Shield, Headset, Zap, ChevronDown } from 'lucide-react';

const highlights = [
  { icon: Shield, label: 'Trusted & Verified' },
  { icon: Headset, label: 'Personal Consultation' },
  { icon: Zap, label: 'Competitive Pricing' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-accent-light text-sm font-medium">NS0302267-D • Registered Business</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Your{' '}
              <span className="gradient-text">Tailored</span>
              <br />
              Tech Solutions
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed">
              Technology solutions customised to your budget and needs. From gadgets and repairs to enterprise networking — we deliver with precision, honesty, and competitive pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/60189185154?text=Hi%20Kaizen%20Tech%20Centre%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1 animate-pulse-glow"
              >
                WhatsApp Us Now
                <ArrowRight size={18} />
              </a>
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-gray-400">
                  <Icon size={18} className="text-highlight" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex justify-center animate-slide-right">
            <div className="relative">
              {/* Main card */}
              <div className="w-[420px] h-[420px] rounded-3xl bg-gradient-to-br from-primary-light to-primary border border-white/10 p-8 flex flex-col justify-between animate-float">
                {/* Tech illustration using CSS */}
                <div className="flex gap-3">
                  <div className="w-24 h-32 rounded-xl bg-gradient-to-b from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-accent-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  </div>
                  <div className="w-16 h-28 rounded-xl bg-gradient-to-b from-highlight/20 to-highlight/5 border border-highlight/20 flex items-center justify-center mt-2">
                    <svg className="w-8 h-8 text-highlight" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <circle cx="12" cy="18" r="1" />
                    </svg>
                  </div>
                  <div className="w-20 h-24 rounded-xl bg-gradient-to-b from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mt-4">
                    <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-xs text-gray-500 mt-1">Happy Clients</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                    <div className="text-2xl font-bold text-accent-light">24h</div>
                    <div className="text-xs text-gray-500 mt-1">Fast Response</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                    <div className="text-2xl font-bold text-highlight">5★</div>
                    <div className="text-xs text-gray-500 mt-1">Rated Service</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full backdrop-blur-sm">
                <span className="text-green-400 text-sm font-semibold">✓ SSM Verified</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full backdrop-blur-sm">
                <span className="text-accent-light text-sm font-semibold">🔧 Full Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector('#why-us')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
