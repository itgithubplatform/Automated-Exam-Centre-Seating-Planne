'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Head of Examinations',
      institution: 'Springfield University',
      image: '👩‍🏫',
      quote: 'ExamSeater reduced our exam preparation time from 3 days to just 30 minutes. The anti-cheat algorithm gives us complete peace of mind.',
      rating: 5,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Prof. James Anderson',
      role: 'Academic Coordinator',
      institution: 'Riverside College',
      image: '👨‍🏫',
      quote: 'As someone who managed seating manually for 15 years, this tool is a game-changer. My team and I can now focus on what really matters—our students.',
      rating: 5,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Mrs. Priya Sharma',
      role: 'Exam Controller',
      institution: 'Delhi Public School',
      image: '👩‍💼',
      quote: 'The visual room designer is brilliant! We can accommodate special needs students and create custom arrangements effortlessly.',
      rating: 5,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Mr. Robert Chen',
      role: 'Vice Principal',
      institution: 'Tech Valley High School',
      image: '👨‍💼',
      quote: 'Professional reports, zero errors, and incredible support. ExamSeater has become an essential tool for our institution.',
      rating: 5,
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
            LOVED BY EDUCATORS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Teachers Are Saying
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About ExamSeater
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from real educators who've transformed their exam management.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center text-3xl`}>
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.institution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Trusted by Leading Educational Institutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['500+ Schools', '200+ Colleges', '50K+ Exams', '1M+ Students'].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.split(' ')[0]}
                </div>
                <div className="text-indigo-100">
                  {stat.split(' ').slice(1).join(' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}