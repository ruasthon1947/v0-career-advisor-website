"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CareerRoadmap } from "./career-roadmap"
import { SkillProgress } from "./skill-progress"
import { RecentActivity } from "./recent-activity"
import { UpcomingMilestones } from "./upcoming-milestones"
import { Target, BookOpen, Award, TrendingUp, Star, ArrowRight, CheckCircle } from "lucide-react"

// Mock user data - in a real app, this would come from an API
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  joinDate: "March 2024",
  currentGoal: "Frontend Developer",
  overallProgress: 68,
  completedCourses: 12,
  totalCourses: 18,
  skillsLearned: 8,
  certificatesEarned: 3,
  streakDays: 15,
}

const quickStats = [
  {
    title: "Overall Progress",
    value: `${userData.overallProgress}%`,
    description: "Towards Frontend Developer",
    icon: Target,
    color: "text-primary",
  },
  {
    title: "Courses Completed",
    value: `${userData.completedCourses}/${userData.totalCourses}`,
    description: "Learning path progress",
    icon: BookOpen,
    color: "text-secondary",
  },
  {
    title: "Skills Mastered",
    value: userData.skillsLearned.toString(),
    description: "Technical competencies",
    icon: Star,
    color: "text-accent",
  },
  {
    title: "Certificates",
    value: userData.certificatesEarned.toString(),
    description: "Professional credentials",
    icon: Award,
    color: "text-primary",
  },
]

const recentAchievements = [
  {
    title: "React Fundamentals",
    description: "Completed React basics course",
    date: "2 days ago",
    type: "course",
  },
  {
    title: "JavaScript Expert",
    description: "Earned JavaScript certification",
    date: "1 week ago",
    type: "certificate",
  },
  {
    title: "15-Day Streak",
    description: "Maintained consistent learning",
    date: "Today",
    type: "milestone",
  },
]

export function UserDashboard() {
  return (
    <div className="container mx-auto px-4 max-w-7xl">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Welcome back, {userData.name}!</h1>
            <p className="text-lg text-muted-foreground">
              You're {userData.overallProgress}% of the way to becoming a {userData.currentGoal}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{userData.streakDays}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
            <Button className="hover:bg-primary/90 transition-colors duration-200">
              Continue Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickStats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <Card key={index} className="border-border/50 hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-primary/10`}>
                    <IconComponent className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-sm">{stat.title}</h3>
                  <p className="text-xs text-muted-foreground">{stat.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Dashboard Content */}
      <Tabs defaultValue="roadmap" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
        </TabsList>

        <TabsContent value="roadmap" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CareerRoadmap />
            </div>
            <div className="space-y-6">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Recent Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-1 rounded-full bg-primary/10">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="progress">
          <SkillProgress />
        </TabsContent>

        <TabsContent value="activity">
          <RecentActivity />
        </TabsContent>

        <TabsContent value="milestones">
          <UpcomingMilestones />
        </TabsContent>
      </Tabs>
    </div>
  )
}
