export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-600">GoHire</h1>
      <p className="mt-2 text-gray-600">Find your dream job</p>

      <button
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => window.location.href = "/login"}
      >
        Get Started
      </button>
    </div>
  );
}