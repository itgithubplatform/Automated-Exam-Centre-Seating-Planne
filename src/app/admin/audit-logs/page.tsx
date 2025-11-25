import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { History } from 'lucide-react';

export default function AuditLogsPage() {
    return (
        <PlaceholderPage
            title="Audit Logs & History"
            description="Track every action, restore previous versions, export logs, and maintain complete audit trail for compliance!"
            icon={History}
            color="from-gray-500 to-gray-600"
        />
    );
}
