import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { Calendar } from 'lucide-react';

export default function ExamsPage() {
    return (
        <PlaceholderPage
            title="Exams & Calendar Management"
            description="Manage exams, subjects, schedules, and avoid time clashes. Full calendar integration coming soon!"
            icon={Calendar}
            color="from-pink-500 to-pink-600"
        />
    );
}
