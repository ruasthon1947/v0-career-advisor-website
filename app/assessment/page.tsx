import { Header } from "@/components/header"
import { CareerAssessment } from "@/components/assessment/career-assessment"

export default function AssessmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <CareerAssessment />
      </main>
    </div>
  )
}
