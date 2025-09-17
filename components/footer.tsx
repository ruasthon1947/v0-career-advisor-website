import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl">CareerPath</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering professionals to find their ideal career path and develop the right skills.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/assessment" className="text-muted-foreground hover:text-primary transition-colors">
                  Career Assessment
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills Engine
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/mentorship" className="text-muted-foreground hover:text-primary transition-colors">
                  Mentorship
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guidance" className="text-muted-foreground hover:text-primary transition-colors">
                  Career Guidance
                </Link>
              </li>
              
              <li>
                <Link href="/success-stories" className="text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us : +91 9098909890
                </Link>
              </li>
              <li>
                <Link href="/email" className="text-muted-foreground hover:text-primary transition-colors">
                  Email : ruasthon@gmail.com
                </Link>
              </li>
              <li>
                <Link href="/country" className="text-muted-foreground hover:text-primary transition-colors">
                  Bengaluru, INDIA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 CareerPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
