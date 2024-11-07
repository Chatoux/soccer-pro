// About page for Soccer Pro
import Image from 'next/image';
import Header from '../components/Header';

export default function AboutPage() {
    return (
        <div>
            <Header />
            <main className="p-8">
                <h1 className="text-3xl font-bold mb-4">About Soccer Pro</h1>
                <p className="text-lg mb-4">At Soccer Pro, we offer top-of-the-line soccer fields for rent to make your game unforgettable. From casual kickabouts to league matches, we have the facilities to suit your needs.</p>
                <Image src="/soccer-team.jpg" alt="Soccer Team" width={800} height={500} className="rounded-lg mb-4" />
            </main>
        </div>
    );
}
