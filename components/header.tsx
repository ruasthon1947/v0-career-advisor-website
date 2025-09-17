"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="font-quantico text-xl">Next Gen Career</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/assessment" className="text-sm font-medium hover:text-primary transition-colors">
            Career Assessment
          </Link>
          <Link href="/skills" className="text-sm font-medium hover:text-primary transition-colors">
            Skills
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link href="/guidance" className="text-sm font-medium hover:text-primary transition-colors">
            Guidance
          </Link>
          <Link href="/mentorship" className="text-sm font-medium hover:text-primary transition-colors">
            Mentorship
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button
            asChild
            variant="outline"
            className="hover:bg-secondary/80 transition-colors duration-200 bg-transparent"
          >
            <Link href="/login">Sign In</Link>
          </Button>
          <Button asChild className="hover:bg-primary/90 transition-colors duration-200">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
