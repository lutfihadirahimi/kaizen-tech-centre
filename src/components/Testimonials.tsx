import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ahmad Razif',
    role: 'Small Business Owner',
    text: 'Kaizen Tech helped me set up the entire networking for my new office. Professional service, fair pricing, and they even followed up a week later to make sure everything was running smoothly.',
    stars: 5,
  },
  {
    name: 'Sarah Lim',
    role: 'University Student',
    text: 'I was on a tight budget for a laptop and they recommended the perfect one within my range. No pushy upselling — just honest advice. Will definitely come back for my next purchase!',
    stars: 5,
  },
  {
    name: 'Mohd Faizal',
    role: 'IT Manager, Corporate',
    text: 'We engaged Kaizen for a structured cabling project. The team was competent, met the deadline, and the pricing was very competitive compared to other vendors we quoted.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-dark text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our Customers <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Real feedback from real customers. Our commitment to service excellence speaks through their experiences.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-accent/10 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-highlight flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-primary font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
