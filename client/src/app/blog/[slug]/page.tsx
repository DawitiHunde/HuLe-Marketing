import CtaBanner from '@/components/CtaBanner';
import { Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
    // In a real app, fetch data based on params.slug
    const post = {
        title: 'The Future of SEO in 2025',
        date: 'Dec 10, 2024',
        author: 'John Doe',
        category: 'SEO',
        content: `
      <p class="mb-6">Search Engine Optimization (SEO) is constantly evolving. As we look towards 2025, several key trends are emerging that will redefine how we approach organic search.</p>
      <h3 class="text-2xl font-bold text-blue-black mb-4">1. AI-Driven Search</h3>
      <p class="mb-6">With the rise of AI-powered search engines, optimizing for answer engines rather than just link lists will become crucial. Structured data and direct answers will be more important than ever.</p>
      <h3 class="text-2xl font-bold text-blue-black mb-4">2. Voice Search Dominance</h3>
      <p class="mb-6">Voice search continues to grow. Optimizing for conversational keywords and natural language queries will be essential for capturing this traffic.</p>
      <h3 class="text-2xl font-bold text-blue-black mb-4">3. User Experience (UX) as a Ranking Factor</h3>
      <p class="mb-6">Core Web Vitals are just the beginning. Search engines are placing increasing emphasis on the overall user experience, including page speed, interactivity, and visual stability.</p>
      <p>To stay ahead, businesses must adapt their strategies to these changing dynamics. At HuLe Marketing, we help you navigate these shifts and ensure your digital presence remains strong.</p>
    `,
    };

    return (
        <>
            <article className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-block bg-gold text-blue-black text-sm font-bold px-3 py-1 rounded-full mb-6">
                            {post.category}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-blue-black mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex justify-center items-center text-gray-500 space-x-6">
                            <div className="flex items-center">
                                <Calendar size={18} className="mr-2" />
                                {post.date}
                            </div>
                            <div className="flex items-center">
                                <User size={18} className="mr-2" />
                                {post.author}
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="w-full h-96 bg-gray-200 rounded-2xl mb-12"></div>

                    {/* Content */}
                    <div
                        className="prose prose-lg max-w-none text-gray-600"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    ></div>

                    {/* Share & Tags */}
                    <div className="border-t border-gray-200 mt-12 pt-8 flex justify-between items-center">
                        <div className="flex space-x-4">
                            <span className="font-bold text-blue-black">Share:</span>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Linkedin size={20} /></a>
                        </div>
                        <div>
                            <Link href="/blog" className="text-blue-black font-bold hover:text-gold transition-colors">
                                Back to Blog
                            </Link>
                        </div>
                    </div>
                </div>
            </article>

            <CtaBanner />
        </>
    );
};

export default BlogPostPage;
