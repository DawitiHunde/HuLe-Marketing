import Link from 'next/link';
import { Monitor, TrendingUp, Search, PenTool, Code, BarChart } from 'lucide-react';

const services = [
    {
        title: 'Digital Marketing',
        icon: <TrendingUp size={40} className="text-gold" />,
        description: 'Data-driven strategies to boost your online presence and ROI.',
    },
    {
        title: 'Web Development',
        icon: <Code size={40} className="text-gold" />,
        description: 'Custom, high-performance websites built with modern technologies.',
    },
    {
        title: 'SEO Optimization',
        icon: <Search size={40} className="text-gold" />,
        description: 'Improve your rankings and drive organic traffic to your site.',
    },
    {
        title: 'Branding',
        icon: <PenTool size={40} className="text-gold" />,
        description: 'Create a memorable brand identity that resonates with your audience.',
    },
    {
        title: 'Web Design',
        icon: <Monitor size={40} className="text-gold" />,
        description: 'Stunning, user-centric designs that captivate and convert.',
    },
    {
        title: 'Analytics & Reporting',
        icon: <BarChart size={40} className="text-gold" />,
        description: 'In-depth insights to measure success and refine strategies.',
    },
];

const ServicesPreview = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-black mb-4">Our Expertise</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We offer a comprehensive suite of digital services designed to elevate your business in the modern landscape.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-blue-black mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6">{service.description}</p>
                            <Link
                                href="/services"
                                className="text-gold font-semibold hover:text-yellow-600 transition-colors inline-flex items-center"
                            >
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="bg-blue-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors"
                    >
                        View All Services
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
