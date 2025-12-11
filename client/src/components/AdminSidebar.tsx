'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Briefcase, Users, MessageSquare, Settings, LogOut, DollarSign, Star } from 'lucide-react';

const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/admin' },
    { name: 'Blog Posts', icon: <FileText size={20} />, href: '/admin/blog' },
    { name: 'Services', icon: <Settings size={20} />, href: '/admin/services' },
    { name: 'Portfolio', icon: <Briefcase size={20} />, href: '/admin/portfolio' },
    { name: 'Pricing', icon: <DollarSign size={20} />, href: '/admin/pricing' },
    { name: 'Testimonials', icon: <Star size={20} />, href: '/admin/testimonials' },
    { name: 'Messages', icon: <MessageSquare size={20} />, href: '/admin/messages' },
    { name: 'Team', icon: <Users size={20} />, href: '/admin/team' },
];

const AdminSidebar = () => {
    const pathname = usePathname();

    return (
        <div className="w-64 bg-blue-black text-white min-h-screen flex flex-col fixed left-0 top-0">
            <div className="p-6 border-b border-gray-800">
                <h1 className="text-2xl font-bold">HuLe <span className="text-gold">Admin</span></h1>
            </div>
            <nav className="flex-grow p-4 space-y-2">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${pathname === item.href
                                ? 'bg-gold text-blue-black font-bold'
                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-800">
                <button className="flex items-center space-x-3 px-4 py-3 w-full text-gray-400 hover:text-red-400 transition-colors">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
