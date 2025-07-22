export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Download Shah kamal akonda's Resume
      </h1>
      <a
        href="/resume.pdf"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Download Resume (PDF)
      </a>
    </main>
  );
}
