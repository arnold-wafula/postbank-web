import Navbar from "./components/Navbar";

export default function Home() {
  return(
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-blue-900">
          Banking Made Simple
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Secure, reliable, and designed for you.
        </p>
        <div className="mt-6">
          <a
            href="/services"
            className="px-6 py-3 bg-blue-700 text-white rounded-lg"
          >
            Explore Services
          </a>
        </div>
      </section>
    </main>
  )
}