'use client'

import { Shield, Users, Zap, Download, ArrowRight, CheckCircle, Menu, X, Calendar, FileText, MapPin, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl blur-lg opacity-60"></div>
                <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 p-2 rounded-2xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  SeatWise
                </span>
                <p className="text-xs text-gray-500 -mt-1">Smart Exam Seating</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 font-medium transition">Features</a>
              <a href="#how" className="text-gray-600 hover:text-indigo-600 font-medium transition">How It Works</a>
              <a href="#benefits" className="text-gray-600 hover:text-indigo-600 font-medium transition">Benefits</a>
              <Link href="/login" className="text-gray-600 hover:text-indigo-600 font-medium transition">
                Sign In
              </Link>
              <Link href="/register" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all font-semibold">
                Get Started Free
              </Link>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-600 font-medium py-2">Features</a>
              <a href="#how" className="block text-gray-600 font-medium py-2">How It Works</a>
              <a href="#benefits" className="block text-gray-600 font-medium py-2">Benefits</a>
              <Link href="/login" className="block text-gray-600 font-medium py-2">Sign In</Link>
              <Link href="/register" className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl text-center font-semibold">
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-indigo-200 shadow-lg">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-semibold text-gray-700">AI-Powered Exam Seating Solution</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
              <span className="block">Automate Your</span>
              <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Exam Seating
              </span>
              <span className="block">In Seconds</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-indigo-600">SeatWise</span> uses intelligent algorithms to create optimal exam seating arrangements with built-in anti-cheat measures. Save hours of manual work and eliminate errors.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/register" className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl transition-all text-lg font-bold flex items-center gap-3 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/login" className="bg-white border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl hover:border-indigo-400 hover:shadow-lg transition-all text-lg font-bold">
                Sign In
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">95%</p>
                <p className="text-gray-600 font-medium mt-2">Time Saved</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100%</p>
                <p className="text-gray-600 font-medium mt-2">Accuracy</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">10K+</p>
                <p className="text-gray-600 font-medium mt-2">Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-600 font-semibold text-lg mb-4 block">POWERFUL FEATURES</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need for
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Perfect Exam Management</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to make exam seating effortless and error-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-indigo-600 font-semibold text-lg mb-4 block">SIMPLE PROCESS</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Started in
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">3 Easy Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200"></div>

            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-xl opacity-40"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-2xl">
                    {i + 1}
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-indigo-200 font-semibold text-lg mb-4 block">WHY SEATWISE?</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Transform Your Exam Management Experience
              </h2>
              <div className="space-y-5">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                    <CheckCircle className="w-7 h-7 text-green-300 flex-shrink-0 mt-1" />
                    <span className="text-white text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">95% Faster</p>
                    <p className="text-gray-600">From 8 hours to 15 minutes</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">100% Accurate</p>
                    <p className="text-gray-600">Zero human errors guaranteed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">Anti-Cheat AI</p>
                    <p className="text-gray-600">Smart student separation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Revolutionize Your Exam Seating?
              </h2>
              <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
                Join hundreds of universities and institutions already using SeatWise to save time and eliminate errors
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="bg-white text-indigo-600 px-10 py-5 rounded-2xl hover:shadow-2xl transition-all text-lg font-bold transform hover:scale-105">
                  Start Free Trial Now
                </Link>
                <Link href="/login" className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl hover:bg-white/10 transition-all text-lg font-bold">
                  Sign In
                </Link>
              </div>
              <p className="text-indigo-100 mt-6 text-sm">
                ✨ No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-2 rounded-2xl">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">SeatWise</span>
                  <p className="text-xs text-gray-400">Smart Exam Seating</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Intelligent exam seating automation for modern educational institutions
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#how" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Demo</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 <span className="text-white font-semibold">SeatWise</span>. All rights reserved. Made with ❤️ for educational excellence.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .delay-1000 {
          animation-delay: 1s;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}

const features = [
  {
    icon: Shield,
    title: "Anti-Cheat AI",
    description: "Intelligent algorithm prevents same-subject students from sitting together, ensuring exam integrity"
  },
  {
    icon: Users,
    title: "Multi-Room Support",
    description: "Automatically distribute students across multiple examination halls with optimal capacity"
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Generate complete seating plans in seconds, not hours. Save 95% of your time"
  },
  {
    icon: Download,
    title: "Professional PDFs",
    description: "Export beautiful, print-ready reports for invigilators, students, and administrators"
  },
  {
    icon: Calendar,
    title: "Exam Scheduling",
    description: "Manage multiple exams with calendar integration and automated conflict detection"
  },
  {
    icon: FileText,
    title: "CSV Import",
    description: "Bulk upload student data with subjects via CSV files. Simple and fast data management"
  },
  {
    icon: MapPin,
    title: "Room Layouts",
    description: "Design custom room layouts with seat configurations that match your exam halls"
  },
  {
    icon: Sparkles,
    title: "Smart Analytics",
    description: "Get insights on seating patterns, room utilization, and exam statistics"
  }
]

const steps = [
  {
    icon: FileText,
    title: "Upload Student Data",
    description: "Import your student list with subjects and exam details via CSV or manual entry. Quick and easy setup."
  },
  {
    icon: Zap,
    title: "Generate Seating Plan",
    description: "Our AI creates optimal seating arrangements with anti-cheat measures in seconds. Review and customize if needed."
  },
  {
    icon: Download,
    title: "Export & Print",
    description: "Download professional PDF reports for rooms, students, and invigilators. Ready for exam day!"
  }
]

const benefits = [
  "Save 95% of time on manual seating arrangements",
  "Eliminate human errors and conflicts completely",
  "Prevent academic dishonesty with smart separation",
  "Handle thousands of students effortlessly",
  "Generate professional reports instantly",
  "Real-time conflict detection and resolution",
  "Multi-room optimization automatically",
  "Customizable seating rules and preferences"
]
