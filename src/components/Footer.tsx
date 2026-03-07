import { ArrowUp } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  'Gadgets & Electronics',
  'Hardware Repair',
  'Software Development',
  'Networking & Cabling',
  'ICT Security',
  'Printing Solutions',
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061122] relative overflow-hidden">
      {/* Top Border - Pink to Cyan gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <img
                src="/logo.png"
                alt="Kaizen Tech Centre Logo"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <div>
                <span className="text-white font-bold text-lg">
                  Kaizen<span className="text-accent-light"> Tech</span>
                </span>
                <span className="block text-gray-500 text-[10px] tracking-widest uppercase">Centre</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Your Tailored Tech — Technology solutions customised to your budget and needs.
            </p>
            <p className="text-gray-600 text-xs">
              SSM Registration: NS0302267-D
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-500 hover:text-accent-light transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNavClick('#services')}
                    className="text-gray-500 hover:text-accent-light transition-colors text-sm"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <div className="space-y-4 text-sm">
              <p className="text-gray-500 leading-relaxed">
                No.30 Jalan Nilai Perdana 9,<br />
                Taman Nilai Perdana,<br />
                71800 Nilai, Negeri Sembilan
              </p>
              <a
                href="https://wa.me/60189185154"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-green-400 hover:text-green-300 transition-colors font-medium"
              >
                +60 18-918 5154
              </a>
              <a
                href="mailto:kaizentechcentre@gmail.com"
                className="block text-highlight hover:text-highlight-dark transition-colors"
              >
                kaizentechcentre@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Kaizen Tech Centre (NS0302267-D). All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-accent-light transition-colors text-sm group"
          >
            Back to Top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
