import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { UserCog } from 'lucide-react';

export default function StaffPage() {
    return (
        <PlaceholderPage
            title="Staff & Duty Management"
            description="Add staff profiles, assign invigilation duties with auto-assignment algorithm, and manage availability!"
            icon={UserCog}
            color="from-teal-500 to-teal-600"
        />
    );
}
