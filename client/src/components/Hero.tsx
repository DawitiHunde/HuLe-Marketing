import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="bg-white py-20 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                    <h1 className="text-4xl lg:text-5xl font-bold text-blue-black leading-tight mb-6">
                        Elevate Your Brand with <span className="text-gold">Digital Excellence</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                        We are a full-service digital marketing and web development agency dedicated to growing your business through strategic innovation and premium design.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <Link
                            href="/quote"
                            className="bg-gold text-blue-black px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors flex items-center justify-center"
                        >
                            Book a Call <ArrowRight className="ml-2" size={20} />
                        </Link>
                        <Link
                            href="/portfolio"
                            className="border-2 border-blue-black text-blue-black px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-black hover:text-white transition-colors"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">

                    {/* Placeholder for Hero Image/Illustration */}
                    <div className="w-full max-w-lg h-96 bg-gray-100 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-black to-gray-900 opacity-10"></div>
                        <img src="hule hero.png" alt="HuLe Marketing logo" className="h-auto w-auto" />

                        {/* <span className="text-gray-400 font-medium"></span> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
