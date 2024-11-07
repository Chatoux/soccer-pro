// Home page for Soccer Pro
import Image from 'next/image';
import Header from './components/Header';

export default function HomePage() {
    return (
        <div>
            <Header />
            <main>
                <section className="h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
                    <div className="text-center">
                        <Image src="/soccer-field-hero.jpg" alt="Hero Image of Soccer Field" width={1200} height={600} className="rounded-lg shadow-xl" />
                        <h1 className="text-white text-4xl font-bold my-4">Welcome to Soccer Pro</h1>
                        <p className="text-white text-lg">Your number one destination for renting premium soccer fields.</p>
                        <button className="mt-6 px-8 py-3 bg-white text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition">Book Now</button>
                    </div>
                </section>
            </main>
        </div>
    );
}
