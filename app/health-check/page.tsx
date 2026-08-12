// This is a Server Component by default
async function getHealthData() {
  // Simulate fetching data or fetch from a public API
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store', // Ensures fresh data is fetched on every request
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch health check data');
  }
  
  return res.json();
}

export default async function HealthCheckPage() {
  const data = await getHealthData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 text-gray-900">
      <div className="max-w-xl w-full bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <h1 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          System Health: Online
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          This data is fetched server-side to verify API connectivity and deployment health.
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
          <h2 className="font-semibold text-gray-700 mb-2">Fetched Server Payload:</h2>
          <pre className="text-xs text-gray-600 overflow-x-auto whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </main>
  );
}