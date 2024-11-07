// Services page for Soccer Pro
import Image from 'next/image';
import Header from '../components/Header';

export default function ServicesPage() {
    return (
        <div>
            <Header />
            <main className="p-8">
                <h1 className="text-3xl font-bold mb-4">Our Services</h1>
                <p className="text-lg mb-4">We provide high-quality soccer facilities for rent along with coaching services and event hosting.</p>
                <Image src="/soccer-coaching.jpg" alt="Soccer Coaching" width={800} height={500} className="rounded-lg mb-4" />
            </main>
        </div>
    );
}
