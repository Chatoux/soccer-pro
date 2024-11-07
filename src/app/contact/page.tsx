// Contact page for Soccer Pro
import Header from '../components/Header';

export default function ContactPage() {
    return (
        <div>
            <Header />
            <main className="p-8">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg mb-4">Get in touch with us for bookings or inquiries. We are here to help you make the most of your soccer experience.</p>
                <form className="flex flex-col space-y-4">
                    <input type="text" className="px-4 py-2 border rounded" placeholder="Your Name" required />
                    <input type="email" className="px-4 py-2 border rounded" placeholder="Your Email" required />
                    <textarea rows={4} className="px-4 py-2 border rounded" placeholder="Your Message" required></textarea>
                    <button type="submit" className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Send Message</button>
                </form>
            </main>
        </div>
    );
}
