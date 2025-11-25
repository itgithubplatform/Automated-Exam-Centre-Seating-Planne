'use client';

import Link from 'next/link';

export default function FeatureShowcase() {
  const features = [
    {
      icon: '🎯',
      title: 'Smart Seating Algorithm',
      description: 'Our AI-powered system automatically arranges students to minimize cheating risks while optimizing room capacity.',
      gradient: 'from-blue-500 to-cyan-500',
      benefits: ['Anti-cheat patterns', 'Subject separation', 'Optimal spacing']
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Setup',
      description: 'Upload your student list, select rooms, and generate seating plans in under 60 seconds. No manual work required.',
      gradient: 'from-purple-500 to-pink-500',
      benefits: ['Bulk CSV upload', 'One-click generation', 'Instant PDF export']
    },
    {
      icon: '📊',
      title: 'Visual Room Designer',
      description: 'Design your exam halls with our intuitive drag-and-drop interface. Mark unavailable seats and special arrangements.',
      gradient: 'from-orange-500 to-red-500',
      benefits: ['Custom layouts', 'Visual preview', 'Flexible arrangements']
    },
    {
      icon: '📱',
      title: 'Complete Reports Suite',
      description: 'Generate professional hall tickets, room charts, and attendance sheets with your institution\'s branding.',
      gradient: 'from-green-500 to-teal-500',
      benefits: ['Hall tickets', 'Room charts', 'Attendance sheets']
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold">
            POWERFUL FEATURES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Everything Teachers Need,
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Nothing They Don't
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Designed by educators, for educators. Every feature solves a real classroom challenge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <button className={`mt-6 text-sm font-semibold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent hover:underline`}>
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link href="/register" className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <span className="font-semibold">Explore All Features</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}