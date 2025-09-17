import { SignupForm } from "@/components/auth/signup-form"
import { Header } from "@/components/header"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Start Your Journey</h1>
            <p className="text-muted-foreground mt-2">Create your account to unlock personalized career guidance</p>
          </div>
          <SignupForm />
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link href="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
