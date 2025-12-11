const steps = [
    {
        number: '01',
        title: 'Research',
        description: 'We dive deep into your business, audience, and competitors to uncover opportunities.',
    },
    {
        number: '02',
        title: 'Strategy',
        description: 'We craft a tailored roadmap designed to achieve your specific goals and KPIs.',
    },
    {
        number: '03',
        title: 'Execution',
        description: 'Our expert team implements the strategy with precision and creativity.',
    },
    {
        number: '04',
        title: 'Results',
        description: 'We analyze performance, optimize campaigns, and deliver measurable growth.',
    },
];

const ProcessSection = () => {
    return (
        <section className="py-20 bg-blue-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gold mb-4">Our Process</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        A proven methodology that transforms ideas into impactful digital experiences.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 border border-gray-800 rounded-xl hover:border-gold transition-colors duration-300">
                            <div className="text-6xl font-bold text-gray-800 absolute top-4 right-4 opacity-50 select-none">
                                {step.number}
                            </div>
                            <div className="relative z-10 mt-8">
                                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
