import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { Download } from 'lucide-react';

export default function ExportsPage() {
    return (
        <PlaceholderPage
            title="Export Center"
            description="Export professional PDFs - room-wise, student-wise, block-wise with custom templates and bulk download!"
            icon={Download}
            color="from-blue-500 to-indigo-600"
        />
    );
}
