'use client';

import CtaBanner from '@/components/CtaBanner';
import { Check } from 'lucide-react';
import { useState } from 'react';

const plans = [
    {
        name: 'Starter',
        price: { monthly: '$999', yearly: '$9,990' },
        description: 'Perfect for small businesses looking to establish an online presence.',
        features: [
            'Custom Website (5 Pages)',
            'Basic SEO Setup',
            'Social Media Setup',
            'Monthly Analytics Report',
            'Email Support',
        ],
    },
    {
        name: 'Growth',
        price: { monthly: '$2,499', yearly: '$24,990' },
        description: 'Designed for growing companies ready to scale their marketing.',
        features: [
            'Custom Website (10 Pages)',
            'Advanced SEO Strategy',
            'Social Media Management (2 Platforms)',
            'Content Marketing (2 Blogs/Mo)',
            'Bi-Weekly Strategy Calls',
            'Priority Support',
        ],
        popular: true,
    },
    {
        name: 'Premium',
        price: { monthly: '$4,999', yearly: '$49,990' },
        description: 'Comprehensive solution for established brands dominating their market.',
        features: [
            'Custom Web App / E-Commerce',
            'Full-Service SEO & PPC',
            'Social Media Management (4 Platforms)',
            'Content Marketing (4 Blogs/Mo)',
            'Weekly Strategy Calls',
            'Dedicated Account Manager',
            '24/7 Support',
        ],
    },
];

const PricingPage = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <>
            {/* Hero Section */}
            <section className="bg-blue-black text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent <span className="text-gold">Pricing</span></h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Choose the package that fits your business needs. No hidden fees.
                    </p>
                </div>
            </section>

            {/* Pricing Toggle & Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Toggle */}
                    <div className="flex justify-center mb-16">
                        <div className="bg-gray-100 p-1 rounded-full flex items-center">
                            <button
                                onClick={() => setBillingCycle('monthly')}
                                className={`px-6 py-2 rounded-full font-medium transition-colors ${billingCycle === 'monthly' ? 'bg-white text-blue-black shadow-sm' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle('yearly')}
                                className={`px-6 py-2 rounded-full font-medium transition-colors ${billingCycle === 'yearly' ? 'bg-white text-blue-black shadow-sm' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                Yearly <span className="text-xs text-gold font-bold ml-1">-20%</span>
                            </button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl p-8 border ${plan.popular ? 'border-gold shadow-xl relative' : 'border-gray-200 hover:shadow-lg'
                                    } transition-all duration-300 bg-white flex flex-col`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold text-blue-black px-4 py-1 rounded-full text-sm font-bold">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-blue-black mb-2">{plan.name}</h3>
                                <p className="text-gray-500 mb-6 text-sm">{plan.description}</p>
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-blue-black">{plan.price[billingCycle]}</span>
                                    <span className="text-gray-500">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check size={20} className="text-gold mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-3 rounded-full font-bold transition-colors ${plan.popular
                                            ? 'bg-gold text-blue-black hover:bg-yellow-500'
                                            : 'bg-blue-black text-white hover:bg-gray-800'
                                        }`}
                                >
                                    Choose {plan.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner />
        </>
    );
};

export default PricingPage;
