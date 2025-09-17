"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, BookOpen, Code, Award } from "lucide-react"

const resourcesData = {
  react: {
    title: "React",
    description: "A JavaScript library for building user interfaces",
    category: "Frontend Framework",
    difficulty: "Intermediate",
    resources: [
      {
        title: "React Full Course for free ⚛️ (2024)",
        type: "Video Tutorial",
        url: "https://youtu.be/CgkZ7MvWUAA?si=qUVAf61xl9ra-V89",
        description: "Comprehensive React tutorial covering all fundamentals",
        duration: "12 hours",
        rating: 4.8,
        icon: Play,
      },
      {
        title: "Interactive React Tutorial",
        type: "Interactive Course",
        url: "https://react-tutorial.app/",
        description: "Learn React through hands-on coding exercises",
        duration: "Self-paced",
        rating: 4.7,
        icon: Code,
      },
      {
        title: "W3Schools React Tutorial",
        type: "Documentation",
        url: "https://www.w3schools.com/React/",
        description: "Step-by-step React tutorial with examples",
        duration: "4-6 hours",
        rating: 4.5,
        icon: BookOpen,
      },
    ],
  },
  python: {
    title: "Python",
    description: "A versatile programming language for web development, data science, and automation",
    category: "Programming Language",
    difficulty: "Beginner",
    resources: [
      {
        title: "Python for Beginners – Full Course [Programming Tutorial]",
        type: "Video Tutorial",
        url: "https://youtu.be/eWRfhZUzrAc?si=7l6wUpwVS4DK0Fxm",
        description: "Complete Python course for absolute beginners",
        duration: "4.5 hours",
        rating: 4.9,
        icon: Play,
      },
      {
        title: "FreeCodeCamp Python Guide",
        type: "Interactive Course",
        url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/",
        description: "Scientific computing with Python certification",
        duration: "300 hours",
        rating: 4.8,
        icon: Award,
      },
      {
        title: "W3Schools Python Tutorial",
        type: "Documentation",
        url: "https://www.w3schools.com/python/",
        description: "Comprehensive Python tutorial with examples",
        duration: "Self-paced",
        rating: 4.6,
        icon: BookOpen,
      },
      {
        title: "Python Resources Collection",
        type: "Resource Collection",
        url: "https://github.com/openlists/PythonResources",
        description: "Curated list of Python learning resources",
        duration: "Various",
        rating: 4.7,
        icon: Code,
      },
    ],
  },
  "cloud-computing": {
    title: "Cloud Computing",
    description: "Learn to design, deploy, and manage applications in the cloud",
    category: "Infrastructure",
    difficulty: "Intermediate",
    resources: [
      {
        title: "AWS Training and Certification",
        type: "Official Training",
        url: "https://aws.amazon.com/training/",
        description: "Official AWS training courses and certifications",
        duration: "Various",
        rating: 4.8,
        icon: Award,
      },
      {
        title: "Google Cloud Skills Boost",
        type: "Interactive Labs",
        url: "https://www.cloudskillsboost.google/",
        description: "Hands-on labs and courses for Google Cloud",
        duration: "Various",
        rating: 4.7,
        icon: Code,
      },
      {
        title: "Microsoft Learn",
        type: "Learning Platform",
        url: "https://learn.microsoft.com/",
        description: "Free learning paths for Azure and Microsoft technologies",
        duration: "Self-paced",
        rating: 4.6,
        icon: BookOpen,
      },
      {
        title: "Cloud Computing Course FREE | Full Course 2025",
        type: "Video Tutorial",
        url: "https://youtu.be/x3nrA8zZPc4?si=TQOngmxv1hlk6NIL",
        description: "Complete cloud computing course covering major platforms",
        duration: "8 hours",
        rating: 4.5,
        icon: Play,
      },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity",
    description: "Protect systems, networks, and data from digital attacks",
    category: "Security",
    difficulty: "Intermediate",
    resources: [
      {
        title: "Cybrary Free Cybersecurity Courses",
        type: "Online Platform",
        url: "https://www.cybrary.it/",
        description: "Free cybersecurity training and certification prep",
        duration: "Various",
        rating: 4.7,
        icon: Award,
      },
      {
        title: "FreeCodeCamp Information Security",
        type: "Certification Course",
        url: "https://www.freecodecamp.org/learn/information-security/",
        description: "Information security certification with projects",
        duration: "300 hours",
        rating: 4.8,
        icon: Code,
      },
      {
        title: "CISA Cybersecurity Training",
        type: "Government Resource",
        url: "https://www.cisa.gov/cybersecurity-training-exercises",
        description: "Official cybersecurity training from CISA",
        duration: "Various",
        rating: 4.6,
        icon: BookOpen,
      },
      {
        title: "TryHackMe Free Labs",
        type: "Hands-on Labs",
        url: "https://tryhackme.com/",
        description: "Interactive cybersecurity challenges and labs",
        duration: "Self-paced",
        rating: 4.9,
        icon: Play,
      },
    ],
  },
  "machine-learning": {
    title: "Machine Learning",
    description: "Build intelligent systems that learn from data",
    category: "AI/ML",
    difficulty: "Advanced",
    resources: [
      {
        title: "Google Machine Learning Crash Course",
        type: "Official Course",
        url: "https://developers.google.com/machine-learning/crash-course",
        description: "Google's fast-paced introduction to machine learning",
        duration: "15 hours",
        rating: 4.8,
        icon: Award,
      },
      {
        title: "FreeCodeCamp Machine Learning with Python",
        type: "Certification Course",
        url: "https://www.freecodecamp.org/learn/machine-learning-with-python/",
        description: "Machine learning certification with Python projects",
        duration: "300 hours",
        rating: 4.7,
        icon: Code,
      },
      {
        title: "Kaggle Learn",
        type: "Interactive Courses",
        url: "https://www.kaggle.com/learn",
        description: "Free micro-courses on machine learning topics",
        duration: "Various",
        rating: 4.8,
        icon: Play,
      },
      {
        title: "Fast.ai Practical Deep Learning",
        type: "Course",
        url: "https://course.fast.ai/",
        description: "Practical deep learning for coders",
        duration: "7 weeks",
        rating: 4.9,
        icon: BookOpen,
      },
    ],
  },
  docker: {
    title: "Docker",
    description: "Containerize applications for consistent deployment across environments",
    category: "DevOps",
    difficulty: "Intermediate",
    resources: [
      {
        title: "Official Docker Documentation",
        type: "Documentation",
        url: "https://docs.docker.com/get-started/",
        description: "Official Docker getting started guide",
        duration: "Self-paced",
        rating: 4.8,
        icon: BookOpen,
      },
      {
        title: "FreeCodeCamp Docker Guide",
        type: "Tutorial",
        url: "https://www.freecodecamp.org/news/the-docker-handbook/",
        description: "Comprehensive Docker handbook for beginners",
        duration: "6 hours",
        rating: 4.7,
        icon: Code,
      },
      {
        title: "Docker Mastery Course",
        type: "Video Tutorial",
        url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
        description: "Complete Docker course from basics to advanced",
        duration: "5 hours",
        rating: 4.6,
        icon: Play,
      },
      {
        title: "W3Schools Docker Tutorial",
        type: "Tutorial",
        url: "https://www.w3schools.com/whatis/whatis_docker.asp",
        description: "Simple Docker tutorial with examples",
        duration: "2 hours",
        rating: 4.5,
        icon: BookOpen,
      },
    ],
  },
}

export default function ResourcesPage() {
  const params = useParams()
  const technology = params.technology as string
  const data = resourcesData[technology as keyof typeof resourcesData]

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Resource Not Found</h1>
          <p className="text-muted-foreground">The requested technology resource could not be found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold">{data.title}</h1>
              <Badge variant="secondary">{data.category}</Badge>
              <Badge variant="outline">{data.difficulty}</Badge>
            </div>
            <p className="text-lg text-muted-foreground">{data.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Free Learning Resources</h2>
            <div className="grid gap-6">
              {data.resources.map((resource, index) => {
                const IconComponent = resource.icon
                return (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{resource.title}</CardTitle>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {resource.type}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{resource.duration}</span>
                              <span className="text-sm text-muted-foreground">⭐ {resource.rating}</span>
                            </div>
                          </div>
                        </div>
                        <Button asChild size="sm">
                          <a href={resource.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Start Learning
                          </a>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{resource.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="text-center bg-secondary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Need More Guidance?</h3>
            <p className="text-muted-foreground mb-4">
              Get personalized learning recommendations and connect with mentors
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="outline">
                <a href="/assessment">Take Career Assessment</a>
              </Button>
              <Button asChild>
                <a href="/mentorship">Find a Mentor</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
