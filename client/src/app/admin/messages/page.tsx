import { Mail, CheckCircle, XCircle } from 'lucide-react';

const AdminMessagesPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-black mb-8">Messages</h1>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm uppercase tracking-wider">
                            <th className="p-4 font-medium">Name</th>
                            <th className="p-4 font-medium">Email</th>
                            <th className="p-4 font-medium">Message</th>
                            <th className="p-4 font-medium">Date</th>
                            <th className="p-4 font-medium text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[1, 2, 3].map((item) => (
                            <tr key={item} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-blue-black">John Doe</td>
                                <td className="p-4 text-gray-600">john@example.com</td>
                                <td className="p-4 text-gray-600 truncate max-w-xs">I'm interested in your services...</td>
                                <td className="p-4 text-gray-600">Dec 10, 2024</td>
                                <td className="p-4 text-right">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        New
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminMessagesPage;
