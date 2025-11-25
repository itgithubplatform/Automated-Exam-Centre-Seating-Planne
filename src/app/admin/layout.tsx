import AdminSidebar from '@/components/admin/Sidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <AdminSidebar />
            <main className="ml-72 transition-all duration-300">
                {children}
            </main>
        </div>
    );
}
