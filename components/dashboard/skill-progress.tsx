"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Target, BookOpen } from "lucide-react"

const skillsData = [
  {
    name: "React",
    level: "Intermediate",
    progress: 75,
    totalHours: 45,
    completedProjects: 3,
    nextMilestone: "Advanced Patterns",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    progress: 90,
    totalHours: 80,
    completedProjects: 8,
    nextMilestone: "Performance Optimization",
  },
  {
    name: "TypeScript",
    level: "Beginner",
    progress: 35,
    totalHours: 15,
    completedProjects: 1,
    nextMilestone: "Interface Design",
  },
  {
    name: "CSS/Tailwind",
    level: "Intermediate",
    progress: 65,
    totalHours: 30,
    completedProjects: 4,
    nextMilestone: "Animation Techniques",
  },
  {
    name: "Git & GitHub",
    level: "Intermediate",
    progress: 70,
    totalHours: 20,
    completedProjects: 6,
    nextMilestone: "Advanced Workflows",
  },
  {
    name: "Testing",
    level: "Beginner",
    progress: 25,
    totalHours: 8,
    completedProjects: 0,
    nextMilestone: "Unit Testing Basics",
  },
]

export function SkillProgress() {
  const getLevelColor = (level: string) => {
    switch (level) {
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

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-border/50">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm text-muted-foreground">Skills in Progress</div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6 text-center">
            <Target className="h-8 w-8 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold">198</div>
            <div className="text-sm text-muted-foreground">Total Learning Hours</div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6 text-center">
            <BookOpen className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold">22</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Skill Development Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {skillsData.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <Badge className={`text-xs ${getLevelColor(skill.level)}`}>{skill.level}</Badge>
                </div>
                <div className="text-sm text-muted-foreground">{skill.progress}%</div>
              </div>

              <Progress value={skill.progress} className="h-2" />

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Hours: </span>
                  <span className="font-medium">{skill.totalHours}h</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Projects: </span>
                  <span className="font-medium">{skill.completedProjects}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Next: </span>
                  <span className="font-medium">{skill.nextMilestone}</span>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="hover:bg-secondary/10 transition-colors duration-200 bg-transparent"
              >
                Practice {skill.name}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
