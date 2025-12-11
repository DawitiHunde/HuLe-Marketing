import CtaBanner from '@/components/CtaBanner';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const AboutPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-blue-black text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About HuLe <span className="text-gold">Marketing</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We are a team of passionate digital experts dedicated to helping businesses thrive in the digital age.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-blue-black mb-6">Our Mission</h2>
                            <p className="text-gray-600 text-lg mb-8">
                                To empower businesses with innovative digital solutions that drive measurable growth and foster long-term success. We believe in transparency, creativity, and results.
                            </p>
                            <h2 className="text-3xl font-bold text-blue-black mb-6">Our Vision</h2>
                            <p className="text-gray-600 text-lg">
                                To be the leading digital agency known for transforming brands and setting new standards in digital marketing and web development.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl text-center">
                                <Target className="text-gold mx-auto mb-4" size={40} />
                                <h3 className="font-bold text-blue-black">Result Oriented</h3>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl text-center">
                                <Lightbulb className="text-gold mx-auto mb-4" size={40} />
                                <h3 className="font-bold text-blue-black">Creative</h3>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl text-center">
                                <Users className="text-gold mx-auto mb-4" size={40} />
                                <h3 className="font-bold text-blue-black">Client Focus</h3>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl text-center">
                                <Award className="text-gold mx-auto mb-4" size={40} />
                                <h3 className="font-bold text-blue-black">Excellence</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (Placeholder) */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-blue-black mb-4">Meet Our Team</h2>
                        <p className="text-gray-600">The experts behind your success.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((member) => (
                            <div key={member} className="bg-white p-6 rounded-xl shadow-sm text-center">
                                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                                <h3 className="text-xl font-bold text-blue-black">Team Member {member}</h3>
                                <p className="text-gold font-medium">Position</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner />
        </>
    );
};

export default AboutPage;
