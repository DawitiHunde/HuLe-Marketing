import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        title: 'The Future of SEO in 2025',
        slug: 'future-of-seo-2025',
        snippet: 'Discover the emerging trends that will shape the search engine landscape in the coming years.',
        image: 'bg-gray-200',
        date: 'Dec 10, 2024',
        author: 'John Doe',
        category: 'SEO',
    },
    {
        title: 'Why Your Business Needs a Custom Web App',
        slug: 'why-custom-web-app',
        snippet: 'Off-the-shelf solutions might be holding you back. Learn how custom development drives growth.',
        image: 'bg-gray-300',
        date: 'Dec 05, 2024',
        author: 'Jane Smith',
        category: 'Web Development',
    },
    {
        title: 'Mastering Social Media Algorithms',
        slug: 'mastering-social-media',
        snippet: 'Tips and tricks to increase your organic reach on Instagram, TikTok, and LinkedIn.',
        image: 'bg-gray-400',
        date: 'Nov 28, 2024',
        author: 'Mike Johnson',
        category: 'Social Media',
    },
];

const BlogPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-blue-black text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-gold">Blog</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Insights, strategies, and news from the world of digital marketing and development.
                    </p>
                </div>
            </section>

            {/* Blog List */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <div key={index} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                                <div className={`h-56 ${post.image} relative`}>
                                    <div className="absolute top-4 left-4 bg-gold text-blue-black text-xs font-bold px-3 py-1 rounded-full">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center text-gray-400 text-sm mb-4 space-x-4">
                                        <div className="flex items-center">
                                            <Calendar size={14} className="mr-1" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center">
                                            <User size={14} className="mr-1" />
                                            {post.author}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold text-blue-black mb-3 group-hover:text-gold transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 mb-6 flex-grow">
                                        {post.snippet}
                                    </p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-blue-black font-bold hover:text-gold transition-colors inline-flex items-center mt-auto"
                                    >
                                        Read More <ArrowRight className="ml-2" size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination (Placeholder) */}
                    <div className="flex justify-center mt-16">
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">Prev</button>
                            <button className="px-4 py-2 bg-gold text-blue-black font-bold rounded-md">1</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">2</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">3</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">Next</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;
