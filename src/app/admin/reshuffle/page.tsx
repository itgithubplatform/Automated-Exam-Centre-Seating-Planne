import PlaceholderPage from '@/components/admin/PlaceholderPage';
import { Shuffle } from 'lucide-react';

export default function ReshufflePage() {
    return (
        <PlaceholderPage
            title="Reshuffle Seating"
            description="One-click reshuffle with anti-cheat rules maintained, compare old vs new, and undo option available!"
            icon={Shuffle}
            color="from-violet-500 to-violet-600"
        />
    );
}
