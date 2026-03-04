import Link from 'next/link';

export default function MainSite() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-gray-800">
        </h1>
        <p className="text-xl text-gray-600">
        </p>
        <div className="pt-4">
          <Link
            href="/landing/first"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
          </Link>
        </div>
      </div>
    </main>
  );
}
