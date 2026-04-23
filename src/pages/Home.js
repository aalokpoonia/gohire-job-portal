export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-5xl font-bold text-blue-600">GoHire</h1>
      <p className="mt-2 text-gray-600">Find your dream job</p>

      <button
        onClick={() => window.location.href = "/login"}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Get Started
      </button>
    </div>
  );
}