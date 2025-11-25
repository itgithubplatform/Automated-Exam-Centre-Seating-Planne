'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Main CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Ready to Save Hours
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Every Exam Season?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto">
              Join thousands of teachers who've already made the switch to smarter exam management.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link href="/register" className="group relative px-10 py-5 bg-white text-indigo-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Start Free 30-Day Trial</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            <a href="#how-it-works" className="inline-block px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-110">
              Schedule a Demo
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-indigo-200">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✓</span>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Pricing Preview */}
          <div className="pt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Starter',
                price: 'Free',
                period: 'Forever',
                features: ['Up to 100 students', 'Basic seating algorithm', 'PDF exports', 'Email support'],
                gradient: 'from-blue-500 to-cyan-500',
                popular: false
              },
              {
                name: 'Professional',
                price: '$29',
                period: 'per month',
                features: ['Unlimited students', 'Advanced anti-cheat', 'Custom branding', 'Priority support'],
                gradient: 'from-purple-500 to-pink-500',
                popular: true
              },
              {
                name: 'Institution',
                price: 'Custom',
                period: 'Contact us',
                features: ['Multiple campuses', 'API access', 'Dedicated manager', '24/7 phone support'],
                gradient: 'from-orange-500 to-red-500',
                popular: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 ${
                  plan.popular ? 'border-yellow-400 scale-105' : 'border-white/20'
                } hover:scale-110 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-indigo-200 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-indigo-100">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register" className={`block w-full py-3 rounded-full font-semibold transition-all duration-300 text-center ${
                  plan.popular
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 hover:shadow-xl'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/10 pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-indigo-200">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-indigo-200">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-indigo-200">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-indigo-200">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-indigo-200 pb-8">
            <p>© 2024 ExamSeater. Made with ❤️ for teachers worldwide.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}