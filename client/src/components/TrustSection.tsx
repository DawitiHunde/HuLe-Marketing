const TrustSection = () => {
    const clients = [
        { name: 'DreamTech', logo: '/dreamtech.jpg' },
        { name: 'Yamrock Engineering', logo: '/vercel.svg' },
        { name: 'Danat NextUp', logo: '/globe.svg' },
        { name: 'Amphire Marketing', logo: '/file.svg' },
        { name: 'Dagi Furniture', logo: '/window.svg' },
    ];

    return (
        <section className="bg-blue-black py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gold font-medium mb-8 uppercase tracking-wider">
                    Trusted by Innovative Companies
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {clients.map((client, index) => (
                        <div key={index} className="flex justify-center items-center h-12 w-32 hover:opacity-100 transition-opacity">
                            <img
                                src={client.logo}
                                alt={`${client.name} logo`}
                                className="max-h-full max-w-full object-contain filter brightness-0 invert"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
