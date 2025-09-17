"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SkillCard } from "./skill-card"
import { LearningPathCard } from "./learning-path-card"
import { Search, TrendingUp, Star, Filter } from "lucide-react"

const trendingSkills = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    difficulty: "Intermediate",
    demand: "High",
    growth: "+25%",
    avgSalary: "$95,000",
    description: "Build modern user interfaces with React library",
    courses: 156,
    learners: "2.3M",
    timeToLearn: "3-4 months",
    prerequisites: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    name: "Python",
    category: "Programming",
    difficulty: "Beginner",
    demand: "Very High",
    growth: "+30%",
    avgSalary: "$105,000",
    description: "Versatile programming language for web, data science, and AI",
    courses: 234,
    learners: "4.1M",
    timeToLearn: "2-3 months",
    prerequisites: [],
  },
  {
    id: 3,
    name: "AWS Cloud",
    category: "Cloud Computing",
    difficulty: "Intermediate",
    demand: "Very High",
    growth: "+35%",
    avgSalary: "$125,000",
    description: "Master Amazon Web Services cloud platform",
    courses: 89,
    learners: "1.8M",
    timeToLearn: "4-6 months",
    prerequisites: ["Basic Networking", "Linux"],
  },
  {
    id: 4,
    name: "Machine Learning",
    category: "AI/ML",
    difficulty: "Advanced",
    demand: "High",
    growth: "+40%",
    avgSalary: "$140,000",
    description: "Build intelligent systems that learn from data",
    courses: 67,
    learners: "1.2M",
    timeToLearn: "6-8 months",
    prerequisites: ["Python", "Statistics", "Mathematics"],
  },
  {
    id: 5,
    name: "Cybersecurity",
    category: "Security",
    difficulty: "Intermediate",
    demand: "Very High",
    growth: "+28%",
    avgSalary: "$115,000",
    description: "Protect systems and data from security threats",
    courses: 78,
    learners: "950K",
    timeToLearn: "4-5 months",
    prerequisites: ["Networking", "Operating Systems"],
  },
  {
    id: 6,
    name: "Docker",
    category: "DevOps",
    difficulty: "Intermediate",
    demand: "High",
    growth: "+22%",
    avgSalary: "$110,000",
    description: "Containerize applications for scalable deployment",
    courses: 45,
    learners: "800K",
    timeToLearn: "2-3 months",
    prerequisites: ["Linux", "Command Line"],
  },
]

const learningPaths = [
  {
    id: 1,
    title: "Frontend Developer Path",
    description: "Complete roadmap to become a professional frontend developer",
    duration: "6-8 months",
    level: "Beginner to Advanced",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Testing"],
    modules: 8,
    projects: 12,
    certificate: true,
    rating: 4.8,
    students: "45K",
  },
  {
    id: 2,
    title: "Full Stack Web Developer",
    description: "Master both frontend and backend development",
    duration: "8-10 months",
    level: "Intermediate",
    skills: ["React", "Node.js", "MongoDB", "Express", "Authentication", "Deployment"],
    modules: 12,
    projects: 18,
    certificate: true,
    rating: 4.9,
    students: "38K",
  },
  {
    id: 3,
    title: "Data Science Specialist",
    description: "Learn to extract insights from data using Python and ML",
    duration: "10-12 months",
    level: "Intermediate to Advanced",
    skills: ["Python", "Pandas", "NumPy", "Machine Learning", "Data Visualization", "Statistics"],
    modules: 15,
    projects: 20,
    certificate: true,
    rating: 4.7,
    students: "29K",
  },
  {
    id: 4,
    title: "Cloud Solutions Architect",
    description: "Design and implement scalable cloud infrastructure",
    duration: "6-8 months",
    level: "Intermediate to Advanced",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Monitoring"],
    modules: 10,
    projects: 15,
    certificate: true,
    rating: 4.8,
    students: "22K",
  },
]

const categories = ["All", "Frontend", "Backend", "AI/ML", "Cloud Computing", "Security", "DevOps", "Data Science"]

export function SkillsEngine() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [activeTab, setActiveTab] = useState("trending")

  const filteredSkills = trendingSkills.filter((skill) => {
    const matchesSearch =
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Skills Recommendation Engine</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover trending skills, personalized learning paths, and certifications to accelerate your career growth
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search skills, technologies, or courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 hover:border-primary/50 focus:border-primary transition-colors"
            />
          </div>
          <Button variant="outline" className="hover:bg-secondary/10 transition-colors duration-200 bg-transparent">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`hover:scale-105 transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary/10 bg-transparent"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="trending" className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span>Trending Skills</span>
          </TabsTrigger>
          <TabsTrigger value="paths" className="flex items-center space-x-2">
            <Star className="h-4 w-4" />
            <span>Learning Paths</span>
          </TabsTrigger>
          <TabsTrigger value="recommended" className="flex items-center space-x-2">
            <Badge className="h-4 w-4" />
            <span>For You</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trending" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Trending Skills</h2>
            <Badge variant="secondary" className="text-sm">
              {filteredSkills.length} skills found
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="paths" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Curated Learning Paths</h2>
            <Badge variant="secondary" className="text-sm">
              {learningPaths.length} paths available
            </Badge>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {learningPaths.map((path) => (
              <LearningPathCard key={path.id} path={path} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recommended" className="space-y-6">
          <div className="text-center py-12">
            <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Complete your career assessment to get personalized skill recommendations based on your goals and
              interests.
            </p>
            <Button asChild className="hover:bg-primary/90 transition-colors duration-200">
              <a href="/assessment">Take Assessment</a>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
