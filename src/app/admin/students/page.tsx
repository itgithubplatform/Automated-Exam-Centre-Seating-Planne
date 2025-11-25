'use client';

import { Construction } from 'lucide-react';

export default function StudentsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Construction className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Student Management
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        This feature is coming soon! You'll be able to manage students, upload CSV files, and more.
                    </p>
                    <div className="inline-block bg-purple-50 px-6 py-3 rounded-xl border border-purple-200">
                        <p className="text-purple-700 font-semibold">🚧 Under Construction</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
