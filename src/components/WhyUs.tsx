import { ShieldCheck, BadgeDollarSign, Users, Clock, Wrench, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'SSM Registered & Verified',
    desc: 'We are a fully registered Malaysian business (NS0302267-D). Your transactions are protected and legitimate.',
    color: 'from-green-500/20 to-green-500/5',
    iconColor: 'text-green-400',
    borderColor: 'border-green-500/20',
  },
  {
    icon: BadgeDollarSign,
    title: 'Competitive Pricing',
    desc: 'Our lean online model eliminates overhead costs, allowing us to pass real savings directly to you.',
    color: 'from-accent/20 to-accent/5',
    iconColor: 'text-accent',
    borderColor: 'border-accent/20',
  },
  {
    icon: Users,
    title: 'Personal Consultation',
    desc: 'Every customer gets one-on-one advisory. We listen to your needs and budget before recommending solutions.',
    color: 'from-highlight/20 to-highlight/5',
    iconColor: 'text-highlight',
    borderColor: 'border-highlight/20',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    desc: 'Quick response times and efficient service delivery. Most enquiries answered within hours, not days.',
    color: 'from-purple-500/20 to-purple-500/5',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: Wrench,
    title: 'End-to-End Solutions',
    desc: 'From purchasing gadgets to setting up enterprise networks — we handle the full spectrum of IT needs.',
    color: 'from-gold/20 to-gold/5',
    iconColor: 'text-gold',
    borderColor: 'border-gold/20',
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    desc: 'No hidden charges, no jargon. We explain everything clearly so you can make informed decisions.',
    color: 'from-accent/20 to-accent/5',
    iconColor: 'text-accent-light',
    borderColor: 'border-accent/20',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-dark text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Technology You Can <span className="gradient-text">Trust</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We understand that buying tech online requires trust. Here's why hundreds of customers across Malaysia choose Kaizen Tech Centre as their go-to IT partner.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`group relative bg-white rounded-2xl p-7 border ${r.borderColor} hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <r.icon className={`w-7 h-7 ${r.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{r.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
