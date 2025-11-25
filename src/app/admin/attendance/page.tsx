import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { ClipboardCheck } from 'lucide-react';

export default function AttendancePage() {
    return (
        <PlaceholderPage
            title="Attendance Management"
            description="Generate attendance sheets linked to seating order, print PDFs, and track attendance records!"
            icon={ClipboardCheck}
            color="from-cyan-500 to-cyan-600"
        />
    );
}
