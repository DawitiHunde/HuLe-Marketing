import CtaBanner from '@/components/CtaBanner';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        title: 'E-Commerce Redesign',
        category: 'Web Development',
        image: 'bg-gray-200',
        results: '150% Increase in Sales',
        tools: ['Next.js', 'Shopify', 'Tailwind CSS'],
        link: '#',
    },
    {
        title: 'Tech Startup Branding',
        category: 'Branding & Identity',
        image: 'bg-gray-300',
        results: 'Successful Series A Launch',
        tools: ['Figma', 'Illustrator', 'Strategy'],
        link: '#',
    },
    {
        title: 'Healthcare SEO Campaign',
        category: 'SEO & Marketing',
        image: 'bg-gray-400',
        results: '300% Traffic Growth',
        tools: ['SEMrush', 'Google Analytics', 'Content'],
        link: '#',
    },
    {
        title: 'Real Estate Platform',
        category: 'Web Development',
        image: 'bg-gray-200',
        results: '50k+ Monthly Users',
        tools: ['React', 'Node.js', 'MongoDB'],
        link: '#',
    },
    {
        title: 'Fashion Brand Socials',
        category: 'Social Media',
        image: 'bg-gray-300',
        results: '10x Engagement Rate',
        tools: ['Instagram', 'TikTok', 'Content Creation'],
        link: '#',
    },
    {
        title: 'Corporate Website',
        category: 'Web Design',
        image: 'bg-gray-400',
        results: 'Award Winning Design',
        tools: ['Webflow', 'Figma', 'GSAP'],
        link: '#',
    },
];

const PortfolioPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-blue-black text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-gold">Work</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A showcase of our recent projects and the results we've achieved for our clients.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className={`h-64 ${project.image} relative`}>
                                    <div className="absolute inset-0 bg-blue-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gold font-medium mb-2 text-sm uppercase tracking-wide">{project.category}</p>
                                    <h3 className="text-2xl font-bold text-blue-black mb-3">{project.title}</h3>
                                    <p className="text-gray-600 mb-4 font-medium">Result: {project.results}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tools.map((tool, i) => (
                                            <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={project.link}
                                        className="text-blue-black font-bold hover:text-gold transition-colors inline-flex items-center"
                                    >
                                        View Case Study <ExternalLink className="ml-2" size={16} />
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

export default PortfolioPage;
