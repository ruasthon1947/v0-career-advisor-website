"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, Code, CheckCircle, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "course",
    title: "Completed React Hooks Deep Dive",
    description: "Mastered useState, useEffect, and custom hooks",
    timestamp: "2 hours ago",
    points: 150,
  },
  {
    id: 2,
    type: "project",
    title: "Built Todo App with React",
    description: "Implemented CRUD operations and local storage",
    timestamp: "1 day ago",
    points: 200,
  },
  {
    id: 3,
    type: "certificate",
    title: "Earned JavaScript Fundamentals Certificate",
    description: "Demonstrated proficiency in core JavaScript concepts",
    timestamp: "3 days ago",
    points: 500,
  },
  {
    id: 4,
    type: "milestone",
    title: "Reached 50 Hours of Learning",
    description: "Consistent progress towards frontend development",
    timestamp: "5 days ago",
    points: 100,
  },
  {
    id: 5,
    type: "course",
    title: "Started TypeScript Basics",
    description: "Learning type annotations and interfaces",
    timestamp: "1 week ago",
    points: 50,
  },
  {
    id: 6,
    type: "project",
    title: "Created Personal Portfolio",
    description: "Showcased skills with responsive design",
    timestamp: "1 week ago",
    points: 300,
  },
]

export function RecentActivity() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "course":
        return <BookOpen className="h-4 w-4 text-primary" />
      case "project":
        return <Code className="h-4 w-4 text-secondary" />
      case "certificate":
        return <Award className="h-4 w-4 text-accent" />
      case "milestone":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "course":
        return "bg-primary/10 text-primary"
      case "project":
        return "bg-secondary/10 text-secondary"
      case "certificate":
        return "bg-accent/10 text-accent"
      case "milestone":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="border-border/50">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-primary">1,300</div>
            <div className="text-sm text-muted-foreground">Total Points</div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-secondary">15</div>
            <div className="text-sm text-muted-foreground">This Week</div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-accent">7</div>
            <div className="text-sm text-muted-foreground">Streak Days</div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-4 text-center">
            <div className="text-xl font-bold text-green-600">98%</div>
            <div className="text-sm text-muted-foreground">Completion Rate</div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/30 transition-colors"
            >
              <div className="p-2 rounded-lg bg-muted/50">{getActivityIcon(activity.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-sm">{activity.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{activity.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{activity.timestamp}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={`text-xs ${getActivityColor(activity.type)}`}>{activity.type}</Badge>
                    <div className="text-xs text-muted-foreground mt-1">+{activity.points} pts</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
