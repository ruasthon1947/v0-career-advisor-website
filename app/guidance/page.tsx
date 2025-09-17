import { Header } from "@/components/header"
import { GuidanceSection } from "@/components/guidance/guidance-section"

export default function GuidancePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <GuidanceSection />
      </main>
    </div>
  )
}
