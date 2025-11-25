import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { Clock } from 'lucide-react';

export default function SlotsPage() {
    return (
        <PlaceholderPage
            title="Manage Exam Slots"
            description="Create morning/afternoon slots with independent seating arrangements and staff assignments for each slot!"
            icon={Clock}
            color="from-orange-500 to-orange-600"
        />
    );
}
