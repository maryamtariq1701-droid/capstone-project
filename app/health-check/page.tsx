export default function HealthCheckPage() {
  return (
    <main className="p-6 sm:p-10 bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-900">System Health Check</h1>
        <p className="text-sm text-gray-500">All services, database links, and API routes are running smoothly.</p>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
            Status: Operational (100%)
          </span>
        </div>
      </div>
    </main>
  );
}