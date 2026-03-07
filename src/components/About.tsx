import { TrendingUp, Lightbulb, Globe, Target } from 'lucide-react';

const values = [
  {
    icon: TrendingUp,
    title: 'Kaizen Philosophy',
    desc: 'The Japanese concept of continuous improvement drives everything we do — from refining our service delivery to staying ahead of technology trends.',
  },
  {
    icon: Lightbulb,
    title: 'Smart Online Model',
    desc: 'By operating primarily online, we cut unnecessary overhead costs and pass those savings to our customers — without sacrificing quality or reliability.',
  },
  {
    icon: Globe,
    title: 'Nationwide Reach',
    desc: 'Based in Nilai, Negeri Sembilan, we serve customers across Malaysia through our efficient online supply and delivery network.',
  },
  {
    icon: Target,
    title: 'Tailored Solutions',
    desc: 'We don\'t believe in one-size-fits-all. Every recommendation is customised to match your specific requirements and financial capacity.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-light text-sm font-semibold rounded-full mb-4 border border-accent/20">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Continuous Improvement,{' '}
              <span className="gradient-text">Relentless Excellence</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed text-base">
              <p>
                <strong className="text-white">Kaizen Tech Centre</strong> was founded on the principle of <em>Kaizen</em> — the Japanese philosophy of continuous improvement. We believe that technology should empower, not overwhelm. That's why every solution we offer is carefully tailored to match your unique needs and budget.
              </p>
              <p>
                As a registered Malaysian business (NS0302267-D), we operate with full transparency and integrity. Our online-first model isn't a limitation — it's our strength. By eliminating the high costs of physical retail, we deliver better prices, faster service, and more personalised attention to each customer.
              </p>
              <p>
                Whether you're a student looking for an affordable laptop, a business needing enterprise networking, or a gamer hunting for the best rig — our team is ready to consult, source, and deliver the perfect solution.
              </p>
            </div>

            {/* Business Registration */}
            <div className="mt-8 flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <div className="text-white font-semibold text-sm">Registered with SSM Malaysia</div>
                <div className="text-gray-500 text-sm">Registration No: NS0302267-D</div>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/[0.07] transition-all duration-300 group ${
                  i === 1 ? 'sm:mt-8' : i === 3 ? 'sm:mt-8' : ''
                }`}
              >
                <v.icon className="w-8 h-8 text-accent-light mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
