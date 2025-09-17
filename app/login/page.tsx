import { LoginForm } from "@/components/auth/login-form"
import { Header } from "@/components/header"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">Sign in to continue your career journey</p>
          </div>
          <LoginForm />
          <div className="text-center text-sm">
            <span className="text-muted-foreground">{"Don't have an account? "}</span>
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
