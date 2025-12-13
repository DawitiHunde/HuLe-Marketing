import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
    return (
        <section className="py-10 bg-blue-gray text-blue-black text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to Grow Your Business?
                </h2>
                <p className="text-xl text-blue-black-300 mb-10">
                    Let's build something amazing together. Schedule a free consultation today.
                </p>
                <Link
                    href="/quote"
                    className="bg-gold text-blue-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors inline-flex items-center"
                >
                    Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
            </div>
        </section>
    );
};

export default CtaBanner;
