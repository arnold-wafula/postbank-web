import Hero from "./components/Hero"
import Services from "./services/page"
// import QuickAccess from "./components/QuickAccess"

export default function Home() {
  return(
    <main className="min-h-screen bg-gray-50">
      <section className="text-center py-20">
        <Hero />
        <Services />
        {/* <QuickAccess /> */}
      </section>
    </main>
  )
}