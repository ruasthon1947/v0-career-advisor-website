import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CareerPathsSection } from "@/components/career-paths-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CareerPathsSection />
        <FeaturesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}
