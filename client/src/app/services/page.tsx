import CtaBanner from '@/components/CtaBanner';
import { TrendingUp, Code, Search, PenTool, Monitor, BarChart, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const servicesList = [
    {
        title: 'Digital Marketing',
        icon: <TrendingUp size={40} className="text-gold" />,
        description: 'Comprehensive strategies including social media, email marketing, and PPC to reach your target audience.',
        benefits: ['Increased Brand Awareness', 'Higher Conversion Rates', 'Targeted Reach'],
    },
    {
        title: 'Web Development',
        icon: <Code size={40} className="text-gold" />,
        description: 'Robust, scalable, and secure websites built with the latest technologies like React, Next.js, and Node.js.',
        benefits: ['Fast Loading Speeds', 'Mobile Responsiveness', 'SEO Friendly Structure'],
    },
    {
        title: 'SEO Optimization',
        icon: <Search size={40} className="text-gold" />,
        description: 'Technical and on-page SEO to improve your visibility on search engines and drive organic traffic.',
        benefits: ['Higher Search Rankings', 'Long-term Traffic Growth', 'Better User Experience'],
    },
    {
        title: 'Branding',
        icon: <PenTool size={40} className="text-gold" />,
        description: 'Logo design, brand identity, and voice development to make your business stand out.',
        benefits: ['Memorable Identity', 'Customer Loyalty', 'Consistent Messaging'],
    },
    {
        title: 'Web Design',
        icon: <Monitor size={40} className="text-gold" />,
        description: 'UI/UX design that focuses on aesthetics and usability to keep visitors engaged.',
        benefits: ['Lower Bounce Rates', 'Enhanced Credibility', 'Intuitive Navigation'],
    },
    {
        title: 'Paid Ads (Meta/Google)',
        icon: <BarChart size={40} className="text-gold" />,
        description: 'Strategic ad campaigns to generate immediate leads and sales.',
        benefits: ['Instant Visibility', 'Precise Targeting', 'Measurable ROI'],
    },
];

const ServicesPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-blue-black text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-gold">Services</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Tailored digital solutions to help your business grow and succeed in a competitive market.
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12">
                        {servicesList.map((service, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 items-start border-b border-gray-100 pb-12 last:border-0 last:pb-0">
                                <div className="bg-gray-50 p-6 rounded-2xl flex-shrink-0">
                                    {service.icon}
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-2xl font-bold text-blue-black mb-4">{service.title}</h2>
                                    <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                                    <h3 className="font-semibold text-blue-black mb-3">Key Benefits:</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center text-gray-600">
                                                <CheckCircle size={16} className="text-gold mr-2" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/quote"
                                        className="text-gold font-bold hover:text-yellow-600 transition-colors inline-flex items-center"
                                    >
                                        Request a Quote
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner />
        </>
    );
};

export default ServicesPage;
