import { Header } from "@/components/header"
import { SkillsEngine } from "@/components/skills/skills-engine"

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <SkillsEngine />
      </main>
    </div>
  )
}
