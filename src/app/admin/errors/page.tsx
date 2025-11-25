import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { AlertTriangle } from 'lucide-react';

export default function ErrorsPage() {
    return (
        <PlaceholderPage
            title="Error Detection & Validation"
            description="Detect issues - insufficient rooms, duplicate rolls, overbooking, time clashes with auto-fix suggestions!"
            icon={AlertTriangle}
            color="from-red-500 to-red-600"
        />
    );
}
