import Link from '@/components/ui/Link';

const DonationButtons = () => (
    <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <span className="text-xl">💰</span>
            <span className="text-sm font-medium">You can help me by Donating</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
            <Link
                href="https://buymeacoffee.com/nsrawat?ref=NSRawat"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                    background: 'linear-gradient(135deg, #FF813F 0%, #FFDD00 100%)',
                }}
                data-umami-event="donate-buymeacoffee"
            >
                <span>☕</span>
                Buy Me a Coffee
            </Link>
            <Link
                href="https://paypal.me/NRawat710?ref=NSRawat"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                    background: 'linear-gradient(135deg, #003087 0%, #009cde 100%)',
                }}
                data-umami-event="donate-paypal"
            >
                <span>💳</span>
                PayPal
            </Link>
            <Link
                href="https://withupi.com/@nsrawat"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                    background: 'linear-gradient(135deg, #097969 0%, #50C878 100%)',
                }}
                data-umami-event="donate-upi"
            >
                <span>₹</span>
                UPI
            </Link>
        </div>
    </div>
);

export default DonationButtons;
