'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    Calendar,
    Building2,
    Sparkles,
    Clock,
    UserCog,
    ClipboardCheck,
    Download,
    Shuffle,
    FileText,
    History,
    Heart,
    AlertTriangle,
    Settings,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react';
import { useState } from 'react';
import { signOut } from 'next-auth/react';

const adminMenuItems = [
    {
        title: 'Overview',
        icon: LayoutDashboard,
        href: '/admin/dashboard',
        color: 'from-blue-500 to-blue-600',
    },
    {
        title: 'Students',
        icon: Users,
        href: '/admin/students',
        color: 'from-purple-500 to-purple-600',
    },
    {
        title: 'Exams & Calendar',
        icon: Calendar,
        href: '/admin/exams',
        color: 'from-pink-500 to-pink-600',
    },
    {
        title: 'Rooms & Layouts',
        icon: Building2,
        href: '/admin/rooms',
        color: 'from-indigo-500 to-indigo-600',
    },
    {
        title: 'Generate Seating',
        icon: Sparkles,
        href: '/admin/seating',
        color: 'from-green-500 to-green-600',
    },
    {
        title: 'Manage Slots',
        icon: Clock,
        href: '/admin/slots',
        color: 'from-orange-500 to-orange-600',
    },
    {
        title: 'Staff & Duties',
        icon: UserCog,
        href: '/admin/staff',
        color: 'from-teal-500 to-teal-600',
    },
    {
        title: 'Attendance',
        icon: ClipboardCheck,
        href: '/admin/attendance',
        color: 'from-cyan-500 to-cyan-600',
    },
    {
        title: 'Export PDFs',
        icon: Download,
        href: '/admin/exports',
        color: 'from-blue-500 to-indigo-600',
    },
    {
        title: 'Reshuffle',
        icon: Shuffle,
        href: '/admin/reshuffle',
        color: 'from-violet-500 to-violet-600',
    },
    {
        title: 'Question Sets',
        icon: FileText,
        href: '/admin/question-sets',
        color: 'from-amber-500 to-amber-600',
    },
    {
        title: 'Audit Logs',
        icon: History,
        href: '/admin/audit-logs',
        color: 'from-gray-500 to-gray-600',
    },
    {
        title: 'Special Cases',
        icon: Heart,
        href: '/admin/special-cases',
        color: 'from-rose-500 to-rose-600',
    },
    {
        title: 'Error Detection',
        icon: AlertTriangle,
        href: '/admin/errors',
        color: 'from-red-500 to-red-600',
    },
    {
        title: 'Settings',
        icon: Settings,
        href: '/admin/settings',
        color: 'from-slate-500 to-slate-600',
    },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' });
    };

    return (
        <aside
            className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-300 z-40 ${collapsed ? 'w-20' : 'w-72'
                } shadow-2xl border-r border-gray-700`}
        >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
                {!collapsed && (
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl blur-lg opacity-60"></div>
                            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-700 p-2 rounded-xl">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                SeatWise
                            </h1>
                            <p className="text-xs text-gray-400">Admin Panel</p>
                        </div>
                    </div>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                    {collapsed ? (
                        <ChevronRight className="w-5 h-5" />
                    ) : (
                        <ChevronLeft className="w-5 h-5" />
                    )}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
                {adminMenuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                    ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg scale-105'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                }`}
                            title={collapsed ? item.title : ''}
                        >
                            <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'animate-pulse' : ''}`} />
                            {!collapsed && (
                                <span className="font-medium text-sm">{item.title}</span>
                            )}
                            {isActive && !collapsed && (
                                <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer - Logout */}
            <div className="p-4 border-t border-gray-700">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 group"
                >
                    <LogOut className="w-5 h-5 flex-shrink-0 group-hover:rotate-12 transition-transform" />
                    {!collapsed && <span className="font-medium text-sm">Logout</span>}
                </button>
            </div>

            <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #1f2937;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
        </aside>
    );
}
