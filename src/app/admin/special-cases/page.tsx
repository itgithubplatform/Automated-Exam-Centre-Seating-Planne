import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { Heart } from 'lucide-react';

export default function SpecialCasesPage() {
    return (
        <PlaceholderPage
            title="Special Cases Management"
            description="Handle disability seating, separate rooms, extra time allocation, scribe assignments, and medical conditions!"
            icon={Heart}
            color="from-rose-500 to-rose-600"
        />
    );
}
