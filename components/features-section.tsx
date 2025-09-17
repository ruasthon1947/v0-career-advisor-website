import { Card, CardContent } from "@/components/ui/card"
import { Brain, Target, Users, BookOpen, MessageCircle, TrendingUp } from "lucide-react"

const features = [
  {
    title: "AI-Powered Assessment",
    description:
      "Take our comprehensive career assessment to discover paths that match your interests, skills, and goals.",
    icon: Brain,
  },
  {
    title: "Personalized Roadmaps",
    description: "Get custom learning paths with milestones, skill recommendations, and progress tracking.",
    icon: Target,
  },
  {
    title: "Expert Mentorship",
    description: "Connect with industry professionals for one-on-one guidance and career advice.",
    icon: Users,
  },
  {
    title: "Curated Learning",
    description: "Access handpicked courses, certifications, and resources tailored to your career goals.",
    icon: BookOpen,
  },
  {
    title: "Community Support",
    description: "Join a community of learners and professionals sharing experiences and insights.",
    icon: MessageCircle,
  },
  {
    title: "Progress Tracking",
    description: "Monitor your skill development and career advancement with detailed analytics.",
    icon: TrendingUp,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Everything You Need to Succeed</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and guidance you need for career growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className="border-border/50 hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
