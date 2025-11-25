'use client';

import Link from 'next/link';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload Student Data',
      description: 'Simply upload your student list via CSV or Excel. Our system validates and organizes the data automatically.',
      icon: '📤',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Configure Exam Settings',
      description: 'Set your exam details, select rooms, and define anti-cheating rules. Customize to match your institution\'s needs.',
      icon: '⚙️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Generate Seating Plan',
      description: 'Click generate and watch our algorithm create the perfect seating arrangement in seconds. Preview before finalizing.',
      icon: '✨',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '04',
      title: 'Download & Print',
      description: 'Export professional PDFs for hall tickets, room charts, and attendance sheets. Print or share digitally.',
      icon: '🖨️',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
            SIMPLE PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            From Upload to Print
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              In Just 4 Easy Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No technical expertise required. If you can use email, you can use ExamSeater.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 relative z-10">
                  {/* Step Number */}
                  <div className={`absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform rotate-12`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white text-sm`}>
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Exam Management?
            </h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of teachers who have already saved thousands of hours with ExamSeater.
            </p>
            <Link href="/register" className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}