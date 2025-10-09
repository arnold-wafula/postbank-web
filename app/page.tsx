import Hero from "./components/Hero"
import Services from "./services/page"
import News from "./components/News"
import Partners from "./components/Partners"
import Testimonials from "./components/Testimonials"
import CTADownloadApp from "./components/CTADownloadApp"

export default function Home() {
  return(
    <main className="min-h-screen bg-gray-50">
      <section className="text-center py-20">
        <Hero />
        <Services />
        <News />
        <Partners />
        <Testimonials />
        <CTADownloadApp />
      </section>
    </main>
  )
}