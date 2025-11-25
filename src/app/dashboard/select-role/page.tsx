// src/app/dashboard/select-role/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RoleSelectionPage() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'ADMIN' | 'STAFF' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Only redirect if explicitly unauthenticated (not loading)
    if (status === 'unauthenticated') {
      console.log('User not authenticated, redirecting to login');
      router.replace('/login');
    } else if (status === 'authenticated' && user) {
      console.log('User authenticated:', user.email);
      // Trigger entrance animation
      setTimeout(() => setIsAnimating(true), 100);
    }
  }, [status, router, user]);

  // Show loading state while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-white text-lg font-medium">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // If unauthenticated, don't render anything (redirect will happen)
  if (status === 'unauthenticated') {
    return null;
  }

  const handleRoleSelect = (role: 'ADMIN' | 'STAFF') => {
    setSelectedRole(role);

    // Redirect based on selected role
    setTimeout(() => {
      if (role === 'ADMIN') {
        router.push('/admin/dashboard');
      } else {
        router.push('/staff/dashboard');
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className={`max-w-7xl w-full transition-all duration-1000 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            {/* Logo with Glow Effect */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-3xl blur-xl"></div>
                <img
                  src="/images/logos/logo.png"
                  alt="Logo"
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl shadow-2xl ring-4 ring-white/50 transform hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Welcome Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Welcome Back, <span className="bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">{user?.name?.split(' ')[0] || 'User'}</span>!
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium mb-3 drop-shadow-md">
              Select Your Role to Dive Next
            </p>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
              Choose your access level to continue to your personalized dashboard
            </p>
          </div>

          {/* Role Selection Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto px-4">

            {/* ADMIN CARD */}
            <div
              className={`group relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 border-4 transition-all duration-500 cursor-pointer transform hover:scale-105 ${selectedRole === 'ADMIN'
                  ? 'border-blue-500 scale-105 shadow-blue-500/50 shadow-2xl'
                  : 'border-white/50 hover:border-blue-300 hover:shadow-blue-300/30'
                }`}
              onClick={() => handleRoleSelect('ADMIN')}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Selection Indicator */}
              {selectedRole === 'ADMIN' && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              {/* Icon Container */}
              <div className="relative flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl transform group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Administrator
                </h3>
                <div className="flex justify-center mb-6">
                  <span className="text-5xl">👑</span>
                </div>
                <p className="text-gray-600 text-center mb-8 text-base sm:text-lg leading-relaxed">
                  Full system access with complete control over exams, students, rooms, and seating arrangements.
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: '📚', text: 'Manage Students & Upload CSV' },
                    { icon: '📅', text: 'Create Exams & Calendar' },
                    { icon: '🏛️', text: 'Design Room Layouts' },
                    { icon: '🎯', text: 'Generate Seating Plans' },
                    { icon: '👥', text: 'Manage Staff & Assign Duties' },
                    { icon: '📊', text: 'Export Reports & PDFs' }
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                      <span className="text-2xl mr-3">{feature.icon}</span>
                      <span className="font-medium">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform ${selectedRole === 'ADMIN'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl scale-105'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-xl'
                    }`}
                >
                  {selectedRole === 'ADMIN' ? '✨ Entering Admin Panel...' : '🚀 Access Admin Panel'}
                </button>
              </div>
            </div>

            {/* STAFF CARD */}
            <div
              className={`group relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 border-4 transition-all duration-500 cursor-pointer transform hover:scale-105 ${selectedRole === 'STAFF'
                  ? 'border-green-500 scale-105 shadow-green-500/50 shadow-2xl'
                  : 'border-white/50 hover:border-green-300 hover:shadow-green-300/30'
                }`}
              onClick={() => handleRoleSelect('STAFF')}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Selection Indicator */}
              {selectedRole === 'STAFF' && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-green-600 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

              {/* Icon Container */}
              <div className="relative flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-2xl transform group-hover:rotate-6 transition-transform duration-300">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
                  Staff Member
                </h3>
                <div className="flex justify-center mb-6">
                  <span className="text-5xl">👨‍🏫</span>
                </div>
                <p className="text-gray-600 text-center mb-8 text-base sm:text-lg leading-relaxed">
                  View assigned duties, manage attendance, and access student information for your classes.
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {[
                    { icon: '📋', text: 'View Invigilation Duties' },
                    { icon: '✅', text: 'Mark Student Attendance' },
                    { icon: '🗺️', text: 'Access Seating Charts' },
                    { icon: '👨‍🎓', text: 'View Student Lists' },
                    { icon: '📄', text: 'Download Room Reports' },
                    { icon: '📝', text: 'Submit Attendance Records' }
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                      <span className="text-2xl mr-3">{feature.icon}</span>
                      <span className="font-medium">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform ${selectedRole === 'STAFF'
                      ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-xl scale-105'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-green-500 hover:to-teal-600 hover:text-white hover:shadow-xl'
                    }`}
                >
                  {selectedRole === 'STAFF' ? '✨ Entering Staff Panel...' : '🚀 Access Staff Panel'}
                </button>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="inline-block bg-white/20 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/30">
              <p className="text-white/90 text-sm sm:text-base">
                💡 <span className="font-semibold">Pro Tip:</span> You can switch roles later from the main menu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl p-10 text-center max-w-md mx-4 shadow-2xl transform animate-scaleIn">
            <div className="relative mb-6">
              <div className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl">
                  {selectedRole === 'ADMIN' ? '👑' : '👨‍🏫'}
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              Redirecting to {selectedRole === 'ADMIN' ? 'Admin' : 'Staff'} Panel
            </h3>
            <p className="text-gray-600 text-lg">
              Preparing your personalized dashboard...
            </p>
            <div className="mt-6 flex justify-center gap-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}