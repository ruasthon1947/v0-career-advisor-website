import { Header } from "@/components/header"
import { UserDashboard } from "@/components/dashboard/user-dashboard"

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8">
        <UserDashboard />
      </main>
    </div>
  )
}
