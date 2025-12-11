import { Users, Eye, TrendingUp, DollarSign } from 'lucide-react';

const stats = [
    { name: 'Total Visitors', value: '12,345', icon: <Users size={24} className="text-white" />, color: 'bg-blue-500' },
    { name: 'Page Views', value: '45,678', icon: <Eye size={24} className="text-white" />, color: 'bg-green-500' },
    { name: 'New Leads', value: '123', icon: <TrendingUp size={24} className="text-white" />, color: 'bg-gold' },
    { name: 'Revenue', value: '$12,345', icon: <DollarSign size={24} className="text-white" />, color: 'bg-purple-500' },
];

const AdminDashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-black mb-8">Dashboard Overview</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex items-center">
                        <div className={`${stat.color} p-4 rounded-full mr-4`}>
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm">{stat.name}</p>
                            <p className="text-2xl font-bold text-blue-black">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Placeholder */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-bold text-blue-black mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-100 rounded-full mr-4"></div>
                                <div>
                                    <p className="font-bold text-blue-black">New Quote Request</p>
                                    <p className="text-sm text-gray-500">John Doe requested a quote for Web Development</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-400">2 hours ago</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
