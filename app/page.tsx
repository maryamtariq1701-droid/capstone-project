export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-6 sm:p-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-3xl w-full text-center space-y-6">
        <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
          Frontend AI Engineering Track · Phase Foundations
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
          Capstone Project Skeleton
        </h1>
        <p className="text-lg text-gray-600">
          This project is structured with Next.js App Router, Tailwind CSS, and is deployed continuously with live preview URLs.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a
            href="/health-check"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            View Health Check
          </a>
        </div>
      </div>
    </main>
  );
}