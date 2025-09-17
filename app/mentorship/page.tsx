import { Header } from "@/components/header"
import { MentorshipSection } from "@/components/mentorship/mentorship-section"

export default function MentorshipPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <MentorshipSection />
      </main>
    </div>
  )
}
