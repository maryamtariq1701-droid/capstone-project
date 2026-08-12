export default function AnalyticsPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-6 sm:p-24 bg-gray-50 text-gray-900">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Analytics Screen</h1>
        <p className="text-sm text-gray-500 mb-4">
          This is a routed placeholder page for tracking performance and metrics.
        </p>
        <div className="p-4 bg-gray-100 rounded-lg text-sm text-gray-700">
          Analytics graphs and charts will be rendered here.
        </div>
      </div>
    </main>
  );
}