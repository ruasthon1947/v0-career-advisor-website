import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Server, Globe, Shield, Cloud, Network, Cpu, BarChart3, Zap } from "lucide-react"
import Link from "next/link"

const careerPaths = [
  {
    title: "Frontend Developer",
    description: "Build beautiful, interactive user interfaces",
    icon: Code,
    skills: [
      { name: "HTML", slug: "html" },
      { name: "React", slug: "react" },
      { name: "JavaScript", slug: "javascript" },
      { name: "CSS", slug: "css" },
      { name: "TypeScript", slug: "typescript" },
    ],
    category: "frontend",
  },
  {
    title: "Backend Developer",
    description: "Create robust server-side applications",
    icon: Server,
    skills: [
      { name: "Node.js", slug: "nodejs" },
      { name: "Python", slug: "python" },
      { name: "Databases", slug: "databases" },
      { name: "APIs", slug: "apis" },
    ],
    category: "backend",
  },
  {
    title: "Full Stack Developer",
    description: "Master both frontend and backend development",
    icon: Globe,
    skills: [
      { name: "React", slug: "react" },
      { name: "Node.js", slug: "nodejs" },
      { name: "Databases", slug: "databases" },
      { name: "DevOps", slug: "devops" },
    ],
    category: "fullstack",
  },
  {
    title: "Cybersecurity Specialist",
    description: "Protect systems and data from threats",
    icon: Shield,
    skills: [
      { name: "Security Protocols", slug: "security-protocols" },
      { name: "Penetration Testing", slug: "penetration-testing" },
      { name: "Risk Assessment", slug: "risk-assessment" },
    ],
    category: "cybersecurity",
  },
  {
    title: "Cloud Computing Engineer",
    description: "Design and manage cloud infrastructure",
    icon: Cloud,
    skills: [
      { name: "AWS", slug: "aws" },
      { name: "Azure", slug: "azure" },
      { name: "Docker", slug: "docker" },
      { name: "Kubernetes", slug: "kubernetes" },
    ],
    category: "cloud",
  },
  {
    title: "System Design Architect",
    description: "Design scalable distributed systems",
    icon: Network,
    skills: [
      { name: "Architecture", slug: "architecture" },
      { name: "Scalability", slug: "scalability" },
      { name: "Microservices", slug: "microservices" },
    ],
    category: "system-design",
  },
  {
    title: "IoT Developer",
    description: "Build connected device solutions",
    icon: Cpu,
    skills: [
      { name: "Arduino", slug: "arduino" },
      { name: "Raspberry Pi", slug: "raspberry-pi" },
      { name: "MQTT", slug: "mqtt" },
      { name: "Edge Computing", slug: "edge-computing" },
    ],
    category: "iot",
  },
  {
    title: "Data Analyst",
    description: "Extract insights from complex datasets",
    icon: BarChart3,
    skills: [
      { name: "SQL", slug: "sql" },
      { name: "Python", slug: "python" },
      { name: "Tableau", slug: "tableau" },
      { name: "Excel", slug: "excel" },
    ],
    category: "data-analysis",
  },
  {
    title: "Prompt Engineering",
    description: "Optimize AI model interactions and outputs",
    icon: Zap,
    skills: [
      { name: "GPT", slug: "gpt" },
      { name: "Claude", slug: "claude" },
      { name: "LangChain", slug: "langchain" },
      { name: "AI Ethics", slug: "ai-ethics" },
    ],
    category: "prompt-engineering",
  },
]

export function CareerPathsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Explore Career Paths</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Discover high-growth career opportunities across technology and discover the skills you need to succeed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path, index) => {
            const IconComponent = path.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
                      {path.growth} growth
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{path.description}</p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill, skillIndex) => (
                        <Link
                          key={skillIndex}
                          href={`/technology/${skill.slug}`}
                          className="text-xs px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-md hover:bg-secondary/30 transition-colors cursor-pointer"
                        >
                          {skill.name}
                        </Link>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start hover:bg-primary/10 transition-colors duration-200"
                    >
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
