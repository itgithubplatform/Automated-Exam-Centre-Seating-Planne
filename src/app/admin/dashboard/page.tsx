'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
    Users,
    Building2,
    Calendar,
    UserCog,
    TrendingUp,
    AlertCircle,
    CheckCircle,
    Clock,
    Upload,
    Sparkles,
    Download,
    BarChart3,
    Activity,
} from 'lucide-react';
import Link from 'next/link';

// Stat Card Component
function StatCard({ title, value, icon: Icon, color, trend, trendValue }: any) {
    return (
        <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-1">
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
            <div className="relative">
                <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                    </div>
                    {trend && (
                        <div className={`flex items-center gap-1 text-sm font-semibold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                            <TrendingUp className={`w-4 h-4 ${trend === 'down' ? 'rotate-180' : ''}`} />
                            <span>{trendValue}</span>
                        </div>
                    )}
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
                <p className="text-3xl font-bold text-gray-900">{value}</p>
            </div>
        </div>
    );
}

// Quick Action Card Component
function QuickActionCard({ title, description, icon: Icon, color, href }: any) {
    return (
        <Link
            href={href}
            className="group relative bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:scale-105"
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>
            <div className="relative">
                <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </Link>
    );
}

// Recent Activity Item Component
function ActivityItem({ icon: Icon, title, time, status }: any) {
    const statusColors = {
        success: 'text-green-600 bg-green-50',
        pending: 'text-yellow-600 bg-yellow-50',
        error: 'text-red-600 bg-red-50',
    };

    return (
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{title}</p>
                <p className="text-xs text-gray-500">{time}</p>
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[status as keyof typeof statusColors]}`}>
                {status}
            </span>
        </div>
    );
}

export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.replace('/login');
        }
    }, [status, router]);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    const stats = [
        {
            title: 'Total Students',
            value: '2,543',
            icon: Users,
            color: 'from-blue-500 to-blue-600',
            trend: 'up',
            trendValue: '+12%',
        },
        {
            title: 'Active Rooms',
            value: '85',
            icon: Building2,
            color: 'from-purple-500 to-purple-600',
            trend: 'up',
            trendValue: '+5',
        },
        {
            title: 'Upcoming Exams',
            value: '12',
            icon: Calendar,
            color: 'from-pink-500 to-pink-600',
            trend: 'down',
            trendValue: '-3',
        },
        {
            title: 'Staff Members',
            value: '45',
            icon: UserCog,
            color: 'from-green-500 to-green-600',
            trend: 'up',
            trendValue: '+8',
        },
    ];

    const quickActions = [
        {
            title: 'Upload Students',
            description: 'Import student data via CSV',
            icon: Upload,
            color: 'from-indigo-500 to-indigo-600',
            href: '/admin/students',
        },
        {
            title: 'Generate Seating',
            description: 'Create new seating plan',
            icon: Sparkles,
            color: 'from-purple-500 to-purple-600',
            href: '/admin/seating',
        },
        {
            title: 'Add Exam',
            description: 'Schedule a new exam',
            icon: Calendar,
            color: 'from-pink-500 to-pink-600',
            href: '/admin/exams',
        },
        {
            title: 'Export Reports',
            description: 'Download PDF reports',
            icon: Download,
            color: 'from-green-500 to-green-600',
            href: '/admin/exports',
        },
    ];

    const recentActivity = [
        { icon: Sparkles, title: 'Seating plan generated for CS101', time: '5 minutes ago', status: 'success' },
        { icon: Upload, title: '250 students uploaded successfully', time: '1 hour ago', status: 'success' },
        { icon: Building2, title: 'Room A-201 layout saved', time: '2 hours ago', status: 'success' },
        { icon: AlertCircle, title: 'Duplicate roll numbers detected', time: '3 hours ago', status: 'error' },
        { icon: UserCog, title: 'Staff duty assignment pending', time: '4 hours ago', status: 'pending' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">
                            Welcome back, <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                {session?.user?.name?.split(' ')[0] || 'Admin'}
                            </span>! 👋
                        </h1>
                        <p className="text-gray-600 text-lg">Here's what's happening with your exam management today</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Current Time</p>
                        <p className="text-2xl font-bold text-gray-900">
                            {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        <p className="text-sm text-gray-600">
                            {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                        </p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Quick Actions */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {quickActions.map((action, index) => (
                                <QuickActionCard key={index} {...action} />
                            ))}
                        </div>
                    </div>

                    {/* System Status */}
                    <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                <Activity className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">System Status</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                                <p className="text-sm text-gray-600">Database</p>
                                <p className="text-lg font-bold text-green-700">Online</p>
                            </div>
                            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                                <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
                                <p className="text-sm text-gray-600">API Server</p>
                                <p className="text-lg font-bold text-green-700">Running</p>
                            </div>
                            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                                <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
                                <p className="text-sm text-gray-600">Performance</p>
                                <p className="text-lg font-bold text-blue-700">Excellent</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <Clock className="w-5 h-5 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
                        </div>
                        <div className="space-y-3 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                            {recentActivity.map((activity, index) => (
                                <ActivityItem key={index} {...activity} />
                            ))}
                        </div>
                        <Link
                            href="/admin/audit-logs"
                            className="mt-4 block text-center text-sm text-indigo-600 hover:text-indigo-700 font-semibold"
                        >
                            View All Activity →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Upcoming Exams Section */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Upcoming Exams</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { subject: 'Computer Science 101', date: 'Dec 1, 2024', time: '09:00 AM', students: 250, room: 'A-201' },
                        { subject: 'Mathematics 201', date: 'Dec 3, 2024', time: '02:00 PM', students: 180, room: 'B-101' },
                        { subject: 'Physics 301', date: 'Dec 5, 2024', time: '09:00 AM', students: 120, room: 'C-301' },
                    ].map((exam, index) => (
                        <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all">
                            <h3 className="font-bold text-gray-900 mb-3">{exam.subject}</h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Calendar className="w-4 h-4" />
                                    <span>{exam.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Clock className="w-4 h-4" />
                                    <span>{exam.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Users className="w-4 h-4" />
                                    <span>{exam.students} students</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-600">
                                    <Building2 className="w-4 h-4" />
                                    <span>Room {exam.room}</span>
                                </div>
                            </div>
                            <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all font-semibold text-sm">
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
