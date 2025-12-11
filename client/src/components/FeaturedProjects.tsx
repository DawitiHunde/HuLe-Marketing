import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Redesign',
        category: 'Web Development',
        image: 'bg-gray-200', // Placeholder class
        results: '150% Increase in Sales',
    },
    {
        title: 'Tech Startup Branding',
        category: 'Branding & Identity',
        image: 'bg-gray-300', // Placeholder class
        results: 'Successful Series A Launch',
    },
    {
        title: 'Healthcare SEO Campaign',
        category: 'SEO & Marketing',
        image: 'bg-gray-400', // Placeholder class
        results: '300% Traffic Growth',
    },
];

const FeaturedProjects = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-black mb-4">Featured Work</h2>
                        <p className="text-gray-600 max-w-xl">
                            Explore some of our recent success stories and see how we help businesses thrive.
                        </p>
                    </div>
                    <Link
                        href="/portfolio"
                        className="hidden md:inline-flex items-center text-gold font-bold hover:text-yellow-600 transition-colors mt-4 md:mt-0"
                    >
                        View Full Portfolio <ExternalLink className="ml-2" size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className={`h-64 rounded-2xl ${project.image} mb-6 overflow-hidden relative`}>
                                <div className="absolute inset-0 bg-blue-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </div>
                            <p className="text-gold font-medium mb-2">{project.category}</p>
                            <h3 className="text-2xl font-bold text-blue-black mb-2 group-hover:text-gold transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-500">{project.results}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center text-gold font-bold hover:text-yellow-600 transition-colors"
                    >
                        View Full Portfolio <ExternalLink className="ml-2" size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
