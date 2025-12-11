import Link from 'next/link';
import { Plus, Edit, Trash2, Star } from 'lucide-react';

const AdminTestimonialsPage = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-blue-black">Testimonials</h1>
                <button className="bg-gold text-blue-black px-4 py-2 rounded-lg font-bold flex items-center hover:bg-yellow-500 transition-colors">
                    <Plus size={20} className="mr-2" />
                    Add New Testimonial
                </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm uppercase tracking-wider">
                            <th className="p-4 font-medium">Name</th>
                            <th className="p-4 font-medium">Role</th>
                            <th className="p-4 font-medium">Rating</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[1, 2, 3].map((item) => (
                            <tr key={item} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-blue-black">Client Name {item}</td>
                                <td className="p-4 text-gray-600">CEO, Company</td>
                                <td className="p-4 text-gray-600 flex items-center">
                                    5 <Star size={14} className="text-gold ml-1" fill="currentColor" />
                                </td>
                                <td className="p-4 text-right space-x-2">
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <Edit size={18} />
                                    </button>
                                    <button className="text-red-500 hover:text-red-700">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminTestimonialsPage;
