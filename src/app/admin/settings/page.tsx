import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
    return (
        <PlaceholderPage
            title="Settings & Permissions"
            description="Manage users, set permissions, add sub-admins, configure role hierarchy, and system settings!"
            icon={Settings}
            color="from-slate-500 to-slate-600"
        />
    );
}
