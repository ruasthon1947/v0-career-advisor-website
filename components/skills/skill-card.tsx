"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Users, TrendingUp, BookOpen } from "lucide-react"
import { useRouter } from "next/navigation"

interface Skill {
  id: number
  name: string
  category: string
  difficulty: string
  demand: string
  growth: string
  avgSalary: string
  description: string
  courses: number
  learners: string
  timeToLearn: string
  prerequisites: string[]
}

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  const router = useRouter()

  const getResourceUrl = (skillName: string) => {
    const skillMap: { [key: string]: string } = {
      React: "react",
      Python: "python",
      "AWS Cloud": "cloud-computing",
      "Machine Learning": "machine-learning",
      Cybersecurity: "cybersecurity",
      Docker: "docker",
    }
    return skillMap[skillName] || skillName.toLowerCase().replace(/\s+/g, "-")
  }

  const handleStartLearning = () => {
    const resourcePath = getResourceUrl(skill.name)
    router.push(`/resources/${resourcePath}`)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
      case "Advanced":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  const getDemandProgress = (demand: string) => {
    switch (demand) {
      case "Very High":
        return 90
      case "High":
        return 75
      case "Medium":
        return 50
      case "Low":
        return 25
      default:
        return 0
    }
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl group-hover:text-primary transition-colors">{skill.name}</CardTitle>
            <Badge variant="outline" className="text-xs">
              {skill.category}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
              {skill.growth}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{skill.timeToLearn}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{skill.learners}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{skill.courses} courses</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span>{skill.avgSalary}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Market Demand</span>
            <span className="font-medium">{skill.demand}</span>
          </div>
          <Progress value={getDemandProgress(skill.demand)} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Difficulty</span>
            <Badge className={`text-xs ${getDifficultyColor(skill.difficulty)}`}>{skill.difficulty}</Badge>
          </div>
          {skill.prerequisites.length > 0 && (
            <div>
              <span className="text-sm font-medium">Prerequisites:</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {skill.prerequisites.map((prereq, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {prereq}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex space-x-2 pt-2">
          <Button
            size="sm"
            className="flex-1 hover:bg-primary/90 transition-colors duration-200"
            onClick={handleStartLearning}
          >
            Start Learning
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-secondary/10 transition-colors duration-200 bg-transparent"
          >
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
