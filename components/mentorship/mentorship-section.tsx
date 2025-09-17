"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MentorCard } from "./mentor-card"
import { BookingModal } from "./booking-modal"
import { Search, Users, Star, Calendar, Video } from "lucide-react"

const mentors = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Senior Software Engineer",
    company: "Google",
    expertise: ["Frontend Development", "React", "Career Transition"],
    experience: "8 years",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 150,
    languages: ["English", "Mandarin"],
    timezone: "PST",
    image: "/woman-mentor.png",
    bio: "Passionate about helping developers transition into tech. Specialized in frontend development and React ecosystem.",
    availability: "Weekdays 6-9 PM PST",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Full Stack Developer",
    company: "Microsoft",
    expertise: ["Full Stack Development", "Node.js", "System Design"],
    experience: "10 years",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 120,
    languages: ["English", "Spanish"],
    timezone: "EST",
    image: "/professional-man-mentor.png",
    bio: "Full stack developer with expertise in scalable web applications. Love mentoring junior developers.",
    availability: "Weekends 10 AM - 4 PM EST",
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    title: "ML Research Scientist",
    company: "OpenAI",
    expertise: ["Machine Learning", "Data Science", "AI Research"],
    experience: "12 years",
    rating: 5.0,
    reviews: 156,
    hourlyRate: 200,
    languages: ["English", "Hindi"],
    timezone: "PST",
    image: "/professional-woman-data-scientist.png",
    bio: "AI researcher with PhD in Computer Science. Helping professionals transition into AI/ML roles.",
    availability: "Flexible scheduling",
  },
  {
    id: 4,
    name: "Alex Thompson",
    title: "DevOps Engineer",
    company: "Netflix",
    expertise: ["DevOps", "Cloud Computing", "AWS", "Kubernetes"],
    experience: "7 years",
    rating: 4.7,
    reviews: 73,
    hourlyRate: 140,
    languages: ["English"],
    timezone: "PST",
    image: "/professional-person-devops-engineer.jpg",
    bio: "Cloud infrastructure expert helping developers master DevOps practices and cloud technologies.",
    availability: "Evenings and weekends",
  },
  {
    id: 5,
    name: "Lisa Wang",
    title: "Cybersecurity Specialist",
    company: "CrowdStrike",
    expertise: ["Cybersecurity", "Penetration Testing", "Security Architecture"],
    experience: "9 years",
    rating: 4.9,
    reviews: 94,
    hourlyRate: 160,
    languages: ["English", "Mandarin"],
    timezone: "EST",
    image: "/cybersecurity-expert-woman.png",
    bio: "Cybersecurity expert with focus on ethical hacking and security architecture. Passionate about security education.",
    availability: "Weekdays 7-10 PM EST",
  },
  {
    id: 6,
    name: "Jordan Kim",
    title: "Product Manager",
    company: "Stripe",
    expertise: ["Product Management", "Strategy", "Leadership"],
    experience: "6 years",
    rating: 4.8,
    reviews: 112,
    hourlyRate: 130,
    languages: ["English", "Korean"],
    timezone: "PST",
    image: "/professional-person-product-manager.jpg",
    bio: "Product manager helping engineers transition into product roles. Expert in product strategy and user research.",
    availability: "Weekends and evenings",
  },
]

const expertiseAreas = [
  "All",
  "Frontend Development",
  "Full Stack Development",
  "Machine Learning",
  "DevOps",
  "Cybersecurity",
  "Product Management",
]

export function MentorshipSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState("All")
  const [selectedMentor, setSelectedMentor] = useState<(typeof mentors)[0] | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some((exp) => exp.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesExpertise =
      selectedExpertise === "All" || mentor.expertise.some((exp) => exp.includes(selectedExpertise))
    return matchesSearch && matchesExpertise
  })

  const handleBookSession = (mentor: (typeof mentors)[0]) => {
    setSelectedMentor(mentor)
    setShowBookingModal(true)
  }

  return (
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Expert Mentorship</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get personalized guidance from industry experts to accelerate your career growth
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="border-border/50">
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm text-muted-foreground">Expert Mentors</div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6 text-center">
            <Star className="h-8 w-8 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold">1,200+</div>
            <div className="text-sm text-muted-foreground">Sessions Completed</div>
          </CardContent>
        </Card>
        <Card className="border-border/50">
          <CardContent className="p-6 text-center">
            <Video className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">95%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 space-y-4">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search mentors by name, company, or expertise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 hover:border-primary/50 focus:border-primary transition-colors"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {expertiseAreas.map((area) => (
            <Button
              key={area}
              variant={selectedExpertise === area ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedExpertise(area)}
              className={`hover:scale-105 transition-all duration-200 ${
                selectedExpertise === area
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary/10 bg-transparent"
              }`}
            >
              {area}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="mentors" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:w-auto lg:grid-cols-2">
          <TabsTrigger value="mentors" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Find Mentors</span>
          </TabsTrigger>
          <TabsTrigger value="sessions" className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>My Sessions</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mentors" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Available Mentors</h2>
            <Badge variant="secondary" className="text-sm">
              {filteredMentors.length} mentors found
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} onBookSession={() => handleBookSession(mentor)} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-6">
          <div className="text-center py-12">
            <div className="p-4 rounded-full bg-primary/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Sessions Yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Book your first mentorship session to get personalized career guidance from industry experts.
            </p>
            <Button className="hover:bg-primary/90 transition-colors duration-200">Browse Mentors</Button>
          </div>
        </TabsContent>
      </Tabs>

      {showBookingModal && selectedMentor && (
        <BookingModal
          mentor={selectedMentor}
          isOpen={showBookingModal}
          onClose={() => {
            setShowBookingModal(false)
            setSelectedMentor(null)
          }}
        />
      )}
    </div>
  )
}
