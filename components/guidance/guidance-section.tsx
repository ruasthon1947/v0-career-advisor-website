"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArticleCard } from "./article-card"
import { SuccessStoryCard } from "./success-story-card"
import { Search, BookOpen, Star, TrendingUp, Users } from "lucide-react"

const articles = [
  {
    id: 1,
    title: "The Complete Guide to Landing Your First Tech Job",
    excerpt: "Essential steps and strategies for breaking into the technology industry",
    author: "Sarah Chen",
    authorRole: "Senior Software Engineer at Google",
    publishDate: "March 10, 2024",
    readTime: "8 min read",
    category: "Career Advice",
    tags: ["Job Search", "Tech Industry", "Career Change"],
    image: "/tech-job-interview.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Frontend vs Backend: Which Path Should You Choose?",
    excerpt: "Compare career paths, skills, and opportunities in frontend and backend development",
    author: "Mike Rodriguez",
    authorRole: "Full Stack Developer at Microsoft",
    publishDate: "March 8, 2024",
    readTime: "6 min read",
    category: "Career Paths",
    tags: ["Frontend", "Backend", "Career Decision"],
    image: "/frontend-backend-development.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Building a Portfolio That Gets You Hired",
    excerpt: "Showcase your skills effectively with these portfolio best practices",
    author: "Emily Johnson",
    authorRole: "UX Designer at Airbnb",
    publishDate: "March 5, 2024",
    readTime: "10 min read",
    category: "Portfolio",
    tags: ["Portfolio", "Projects", "Personal Branding"],
    image: "/developer-portfolio.png",
    featured: true,
  },
  {
    id: 4,
    title: "Mastering Technical Interviews: A Developer's Guide",
    excerpt: "Prepare for coding interviews with proven strategies and practice tips",
    author: "David Kim",
    authorRole: "Engineering Manager at Netflix",
    publishDate: "March 3, 2024",
    readTime: "12 min read",
    category: "Interview Prep",
    tags: ["Interviews", "Coding", "Problem Solving"],
    image: "/technical-interview-coding.png",
    featured: false,
  },
  {
    id: 5,
    title: "The Rise of AI in Software Development",
    excerpt: "How artificial intelligence is transforming the way we build software",
    author: "Lisa Wang",
    authorRole: "AI Research Scientist at OpenAI",
    publishDate: "March 1, 2024",
    readTime: "7 min read",
    category: "Technology Trends",
    tags: ["AI", "Machine Learning", "Future of Work"],
    image: "/ai-software-development.png",
    featured: false,
  },
  {
    id: 6,
    title: "Remote Work Best Practices for Developers",
    excerpt: "Stay productive and maintain work-life balance while working remotely",
    author: "Alex Thompson",
    authorRole: "Remote Team Lead at GitLab",
    publishDate: "February 28, 2024",
    readTime: "9 min read",
    category: "Work Life",
    tags: ["Remote Work", "Productivity", "Work-Life Balance"],
    image: "/remote-work-developer-setup.jpg",
    featured: false,
  },
]

const successStories = [
  {
    id: 1,
    name: "Rohit",
    previousRole: "Marketing Coordinator",
    currentRole: "Frontend Developer at IBM",
    story:
      "After feeling unfulfilled in marketing, I discovered my passion for coding through Next Gen Career's assessment. The structured learning path and mentorship helped me transition successfully.",
    skills: ["React", "JavaScript", "CSS"],
    image: "/professional-man-developer.png",
    fullStory:
      "Rohit learned everything about React, JavaScript, and CSS through our comprehensive frontend development program.",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    previousRole: "Retail Manager",
    currentRole: "Full Stack Developer at Google",
    story:
      "I never thought I could learn to code, but the personalized roadmap made it achievable. Now I'm building e-commerce solutions and loving every day of work.",
    skills: ["Node.js", "React", "MongoDB"],
    image: "/professional-man-developer.png",
    fullStory:
      "Marcus learned everything about Node.js, React, and MongoDB through our intensive full-stack development program.",
  },
  {
    id: 3,
    name: "Priya Patel",
    previousRole: "Data Analyst",
    currentRole: "Machine Learning Engineer at Wipro",
    story:
      "The AI/ML learning path was exactly what I needed to advance my career. The hands-on projects and expert mentorship were game-changers.",
    skills: ["Python", "TensorFlow", "Data Science"],
    image: "/professional-woman-data-scientist.png",
    fullStory:
      "Priya learned everything about Python, TensorFlow, and Data Science through our advanced machine learning curriculum.",
  },
]

const categories = [
  "All",
  "Career Advice",
  "Career Paths",
  "Portfolio",
  "Interview Prep",
  "Technology Trends",
  "Work Life",
]

export function GuidanceSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticles = articles.filter((article) => article.featured)

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Career Guidance Hub</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expert insights, success stories, and practical advice to accelerate your career growth
        </p>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search articles, topics, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 hover:border-primary/50 focus:border-primary transition-colors"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
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

      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
          <TabsTrigger value="articles" className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>Articles</span>
          </TabsTrigger>
          <TabsTrigger value="success" className="flex items-center space-x-2">
            <Star className="h-4 w-4" />
            <span>Success Stories</span>
          </TabsTrigger>
          <TabsTrigger value="trending" className="flex items-center space-x-2">
            <TrendingUp className="h-4 w-4" />
            <span>Trending</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="space-y-8">
          {featuredArticles.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {featuredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} featured />
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">All Articles</h2>
              <Badge variant="secondary" className="text-sm">
                {filteredArticles.length} articles found
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="success" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Success Stories</h2>
            <Badge variant="secondary" className="text-sm">
              {successStories.length} stories
            </Badge>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {successStories.map((story) => (
              <SuccessStoryCard key={story.id} story={story} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trending" className="space-y-6">
          <div className="text-center py-12">
            <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trending Content</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Discover the most popular articles and topics based on community engagement and current industry trends.
            </p>
            <Button className="hover:bg-primary/90 transition-colors duration-200">
              <Users className="h-4 w-4 mr-2" />
              Join Community
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
