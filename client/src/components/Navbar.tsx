'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-blue-black">
                            HuLe <span className="text-gold">Marketing</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-gray-700 hover:text-gold transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-gold transition-colors">
                            About Us
                        </Link>
                        <Link href="/services" className="text-gray-700 hover:text-gold transition-colors">
                            Services
                        </Link>
                        <Link href="/portfolio" className="text-gray-700 hover:text-gold transition-colors">
                            Portfolio
                        </Link>
                        <Link href="/blog" className="text-gray-700 hover:text-gold transition-colors">
                            Blog
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-gold transition-colors">
                            Contact
                        </Link>
                        <Link
                            href="/quote"
                            className="bg-gold text-blue-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors"
                        >
                            Book a Call
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-gold focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <Link
                            href="/"
                            className="block px-3 py-2 text-gray-700 hover:text-gold font-medium"
                            onClick={toggleMenu}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block px-3 py-2 text-gray-700 hover:text-gold font-medium"
                            onClick={toggleMenu}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/services"
                            className="block px-3 py-2 text-gray-700 hover:text-gold font-medium"
                            onClick={toggleMenu}
                        >
                            Services
                        </Link>
                        <Link
                            href="/portfolio"
                            className="block px-3 py-2 text-gray-700 hover:text-gold font-medium"
                            onClick={toggleMenu}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/blog"
                            className="block px-3 py-2 text-gray-700 hover:text-gold font-medium"
                            onClick={toggleMenu}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-2 text-gray-700 hover:text-gold font-medium"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/quote"
                            className="block px-3 py-2 mt-2 bg-gold text-blue-black rounded-full font-semibold hover:bg-yellow-500 transition-colors w-40 text-center"
                            onClick={toggleMenu}
                        >
                            Book a Call
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
