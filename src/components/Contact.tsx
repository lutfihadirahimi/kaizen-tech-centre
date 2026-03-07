import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Business Address',
    value: 'No.30 Jalan Nilai Perdana 9, Taman Nilai Perdana, 71800 Nilai, Negeri Sembilan',
    color: 'text-accent-light',
    bg: 'from-accent/20 to-accent/5',
  },
  {
    icon: Phone,
    label: 'WhatsApp / Call',
    value: '+60 18-918 5154',
    href: 'https://wa.me/60189185154',
    color: 'text-green-400',
    bg: 'from-green-500/20 to-green-500/5',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'kaizentechcentre@gmail.com',
    href: 'mailto:kaizentechcentre@gmail.com',
    color: 'text-highlight',
    bg: 'from-highlight/20 to-highlight/5',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Typically within 1-2 hours during business hours',
    color: 'text-gold',
    bg: 'from-gold/20 to-gold/5',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Kaizen Tech Centre,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.open(`https://wa.me/60189185154?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-light text-sm font-semibold rounded-full mb-4 border border-accent/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Your <span className="gradient-text">Tech Solution</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Have a question or need a quote? Fill out the form below or reach us directly via WhatsApp. We're here to help you find the perfect technology solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.bg} flex items-center justify-center shrink-0`}>
                  <info.icon className={`w-6 h-6 ${info.color}`} />
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1 font-medium">{info.label}</div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-accent-light transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white text-sm leading-relaxed">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/60189185154?text=Hi%20Kaizen%20Tech%20Centre%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25D366] hover:bg-[#22c55e] text-white font-bold rounded-2xl transition-all hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp Instantly
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">Full Name *</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+60 12-345 6789"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2 font-medium">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all text-sm appearance-none"
                  >
                    <option value="" className="bg-primary">Select a service...</option>
                    <option value="Gadget Purchase" className="bg-primary">Gadget Purchase</option>
                    <option value="Hardware Repair" className="bg-primary">Hardware Repair</option>
                    <option value="Software Development" className="bg-primary">Software Development</option>
                    <option value="Networking / Cabling" className="bg-primary">Networking / Cabling</option>
                    <option value="ICT Security" className="bg-primary">ICT Security</option>
                    <option value="Printing Solutions" className="bg-primary">Printing Solutions</option>
                    <option value="Internet / Connectivity" className="bg-primary">Internet / Connectivity</option>
                    <option value="Other" className="bg-primary">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2 font-medium">Your Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements, budget, and any specific details..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark text-white font-bold rounded-xl hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Redirecting to WhatsApp...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Enquiry via WhatsApp
                  </>
                )}
              </button>

              <p className="text-gray-600 text-xs text-center">
                By submitting this form, your message will be sent directly to our WhatsApp for the fastest response.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
