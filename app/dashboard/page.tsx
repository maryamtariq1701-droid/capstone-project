export default function DashboardPage() {
  return (
    <main className="p-6 sm:p-10 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">Monitor your project metrics, statistics, and system overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500">Total Projects</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">12</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500">Active Deployments</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">4</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500">System Health</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">100%</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-sm font-medium text-gray-500">API Latency</h3>
            <p className="text-2xl font-bold text-indigo-600 mt-2">24ms</p>
          </div>
        </div>
      </div>
    </main>
  );
}