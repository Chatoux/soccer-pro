// Header component for Soccer Pro
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 p-4">
            <nav className="flex justify-between items-center">
                <div className="text-white text-xl font-bold">Soccer Pro</div>
                <ul className="flex space-x-4">
                    <li><Link href="/" className="text-white hover:text-green-400">Home</Link></li>
                    <li><Link href="/about" className="text-white hover:text-green-400">About</Link></li>
                    <li><Link href="/services" className="text-white hover:text-green-400">Services</Link></li>
                    <li><Link href="/contact" className="text-white hover:text-green-400">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
