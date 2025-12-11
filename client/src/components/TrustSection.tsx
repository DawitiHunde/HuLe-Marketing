const TrustSection = () => {
    const clients = [
        { name: 'Client 1', logo: 'Company A' },
        { name: 'Client 2', logo: 'Company B' },
        { name: 'Client 3', logo: 'Company C' },
        { name: 'Client 4', logo: 'Company D' },
        { name: 'Client 5', logo: 'Company E' },
    ];

    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-500 font-medium mb-8 uppercase tracking-wider">
                    Trusted by Innovative Companies
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client, index) => (
                        <div key={index} className="text-xl font-bold text-gray-400 hover:text-blue-black transition-colors">
                            {client.logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
