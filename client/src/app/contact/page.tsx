'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        alert('Message sent! (This is a demo)');
    };

    return (
        <>
            <section className="bg-blue-black text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact <span className="text-gold">Us</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Have a question or want to discuss a project? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-blue-black mb-8">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-gold p-3 rounded-full mr-4">
                                        <MapPin className="text-blue-black" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-blue-black text-lg">Visit Us</h3>
                                        <p className="text-gray-600">123 Marketing Ave, Suite 100<br />Business City, BC 12345</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gold p-3 rounded-full mr-4">
                                        <Phone className="text-blue-black" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-blue-black text-lg">Call Us</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-gray-500 text-sm">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gold p-3 rounded-full mr-4">
                                        <Mail className="text-blue-black" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-blue-black text-lg">Email Us</h3>
                                        <p className="text-gray-600">hello@hulemarketing.com</p>
                                        <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="mt-12 h-64 bg-gray-200 rounded-2xl w-full">
                                {/* Embed Google Map here */}
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    Google Map Embed
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-bold text-blue-black mb-6">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                                >
                                    Send Message <Send className="ml-2" size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
