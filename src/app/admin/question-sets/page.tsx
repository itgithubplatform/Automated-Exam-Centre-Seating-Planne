import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { FileText } from 'lucide-react';

export default function QuestionSetsPage() {
    return (
        <PlaceholderPage
            title="Question Paper Sets"
            description="Map question sets (A/B/C) to seats with alternate patterns and custom mapping rules!"
            icon={FileText}
            color="from-amber-500 to-amber-600"
        />
    );
}
