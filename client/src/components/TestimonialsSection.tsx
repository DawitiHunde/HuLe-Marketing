import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, TechFlow',
        text: "HuLe Marketing transformed our online presence. Their team is professional, creative, and results-driven. Highly recommended!",
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Founder, GreenEat',
        text: "The web development team built a stunning site that perfectly captures our brand. Our conversions have doubled since launch.",
        rating: 5,
    },
    {
        name: 'Emily Davis',
        role: 'Marketing Director, StyleCo',
        text: "Their SEO strategies are top-notch. We've seen a significant increase in organic traffic and leads within just a few months.",
        rating: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-black mb-4">Client Success Stories</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear what our partners have to say about working with us.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="flex mb-4 text-gold">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                                <div>
                                    <h4 className="font-bold text-blue-black">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
