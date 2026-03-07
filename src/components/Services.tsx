import { useState } from 'react';
import {
  Monitor, Smartphone, Gamepad2, Cpu,
  Wrench, Radio, CircuitBoard, Cog,
  Code, ShieldCheck, Network, Cable,
  Printer, Wifi, ArrowRight
} from 'lucide-react';

type Category = 'gadgets' | 'repair' | 'corporate' | 'additional';

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface CategoryData {
  key: Category;
  label: string;
  tagline: string;
  color: string;
  bgColor: string;
  borderColor: string;
  items: ServiceItem[];
}

const categories: CategoryData[] = [
  {
    key: 'gadgets',
    label: 'Gadgets & Electronics',
    tagline: 'Sales • Retail & Wholesale',
    color: 'text-accent',
    bgColor: 'from-accent/20 to-accent/5',
    borderColor: 'border-accent/30',
    items: [
      { icon: Monitor, title: 'PC & Desktop Systems', desc: 'Custom-built desktops, all-in-ones, and workstations tailored to your performance needs and budget. From office PCs to high-end creative machines.' },
      { icon: Cpu, title: 'Laptops & Notebooks', desc: 'Business ultrabooks, student laptops, creative workstations, and gaming notebooks from all major brands at competitive prices.' },
      { icon: Smartphone, title: 'Smartphones & Tablets', desc: 'Latest flagship phones, mid-range champions, and budget-friendly options. We source genuine devices with proper warranty.' },
      { icon: Gamepad2, title: 'Gaming Equipment', desc: 'Gaming PCs, peripherals, monitors, headsets, and accessories. Build your ultimate gaming setup with expert guidance.' },
    ],
  },
  {
    key: 'repair',
    label: 'Maintenance & Repair',
    tagline: 'Service • Fix • Restore',
    color: 'text-highlight',
    bgColor: 'from-highlight/20 to-highlight/5',
    borderColor: 'border-highlight/30',
    items: [
      { icon: Wrench, title: 'Hardware Repair', desc: 'Expert diagnosis and repair for laptops, desktops, and peripherals. Screen replacement, motherboard repair, battery issues — we handle it all.' },
      { icon: Radio, title: 'Telecom Equipment Service', desc: 'Servicing and maintenance for telecommunications equipment, routers, switches, and communication hardware.' },
      { icon: CircuitBoard, title: 'Electronics Repair', desc: 'PCB-level repair, power supply fixes, and component-level troubleshooting for a wide range of electronic devices.' },
      { icon: Cog, title: 'Preventive Maintenance', desc: 'Regular maintenance contracts for businesses — keep your IT infrastructure running smoothly with scheduled check-ups and cleaning.' },
    ],
  },
  {
    key: 'corporate',
    label: 'Corporate Solutions',
    tagline: 'Enterprise • Business • Government',
    color: 'text-purple-400',
    bgColor: 'from-purple-500/20 to-purple-500/5',
    borderColor: 'border-purple-500/30',
    items: [
      { icon: Code, title: 'Software Development', desc: 'Custom software, web applications, mobile apps, and business automation tools built to streamline your operations and boost productivity.' },
      { icon: ShieldCheck, title: 'ICT Security Solutions', desc: 'Cybersecurity assessments, firewall setup, endpoint protection, and security policy consultation to protect your digital assets.' },
      { icon: Network, title: 'Networking Solutions', desc: 'LAN/WAN design and implementation, wireless networking, VPN setup, and network infrastructure planning for offices and facilities.' },
      { icon: Cable, title: 'Structured Cabling', desc: 'Professional network cabling, fibre optic installation, server room setup, and cable management for offices, buildings, and campuses.' },
    ],
  },
  {
    key: 'additional',
    label: 'Additional Services',
    tagline: 'Value-Added • Support',
    color: 'text-gold',
    bgColor: 'from-gold/20 to-gold/5',
    borderColor: 'border-gold/30',
    items: [
      { icon: Printer, title: 'Printing Solutions', desc: 'Printer sales, toner/cartridge supply, and maintenance. We support laser, inkjet, and large-format printing solutions for home and office.' },
      { icon: Wifi, title: 'Internet & Connectivity', desc: 'Internet line consultation and sales, Wi-Fi optimization, mesh networking, and connectivity solutions for homes and businesses.' },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState<Category>('gadgets');
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-dark text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Comprehensive IT <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From individual gadget purchases to full-scale corporate IT infrastructure — we offer end-to-end technology solutions that grow with your needs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === cat.key
                  ? 'bg-gradient-to-r from-accent to-accent-dark text-white shadow-lg shadow-accent/20'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Category Tagline */}
        <div className="text-center mb-10">
          <span className={`text-sm font-medium ${current.color} bg-primary/5 px-4 py-1.5 rounded-full`}>
            {current.tagline}
          </span>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {current.items.map((item) => (
            <div
              key={item.title}
              className={`group bg-white rounded-2xl p-7 border ${current.borderColor} hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${current.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-7 h-7 ${current.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
            <p className="text-gray-700 font-medium">
              Need a custom solution? Let's discuss your requirements.
            </p>
            <a
              href="https://wa.me/60189185154?text=Hi%20Kaizen%20Tech%20Centre%2C%20I%20need%20a%20custom%20IT%20solution.%20Can%20we%20discuss%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-dark text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Get Custom Quote
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
