import { FileText, CheckCircle, XCircle } from 'lucide-react';

const AdminQuotesPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-black mb-8">Quote Requests</h1>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-sm uppercase tracking-wider">
                            <th className="p-4 font-medium">Name</th>
                            <th className="p-4 font-medium">Service</th>
                            <th className="p-4 font-medium">Budget</th>
                            <th className="p-4 font-medium">Description</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {[1, 2, 3].map((item) => (
                            <tr key={item} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-blue-black">Jane Smith</td>
                                <td className="p-4 text-gray-600">Web Development</td>
                                <td className="p-4 text-gray-600">$5k - $10k</td>
                                <td className="p-4 text-gray-600 truncate max-w-xs">Need a new e-commerce site...</td>
                                <td className="p-4 text-right space-x-2">
                                    <button className="text-green-500 hover:text-green-700 font-medium text-sm">Mark Contacted</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminQuotesPage;
