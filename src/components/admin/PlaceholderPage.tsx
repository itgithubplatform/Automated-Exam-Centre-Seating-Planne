'use client';

import { Construction, LucideIcon } from 'lucide-react';

interface PlaceholderPageProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    color?: string;
}

export default function PlaceholderPage({
    title,
    description,
    icon: Icon = Construction,
    color = 'from-indigo-500 to-indigo-600'
}: PlaceholderPageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
                    <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                        <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        {description}
                    </p>
                    <div className="inline-block bg-indigo-50 px-6 py-3 rounded-xl border border-indigo-200">
                        <p className="text-indigo-700 font-semibold">🚧 Feature Under Development</p>
                    </div>
                    <div className="mt-8 text-sm text-gray-500">
                        <p>This feature will be available soon with full functionality</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
