"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Video, DollarSign, Star } from "lucide-react"

interface Mentor {
  id: number
  name: string
  title: string
  company: string
  expertise: string[]
  experience: string
  rating: number
  reviews: number
  hourlyRate: number
  languages: string[]
  timezone: string
  image: string
  bio: string
  availability: string
}

interface BookingModalProps {
  mentor: Mentor
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ mentor, isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [sessionType, setSessionType] = useState("career-guidance")
  const [message, setMessage] = useState("")
  const [isBooking, setIsBooking] = useState(false)

  const sessionTypes = [
    { value: "career-guidance", label: "Career Guidance", duration: "60 min" },
    { value: "resume-review", label: "Resume Review", duration: "45 min" },
    { value: "interview-prep", label: "Interview Preparation", duration: "60 min" },
    { value: "skill-assessment", label: "Skill Assessment", duration: "90 min" },
  ]

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM", "7:00 PM", "8:00 PM"]

  const handleBooking = async () => {
    setIsBooking(true)
    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false)
      onClose()
      // Show success message
      alert("Session booked successfully! You'll receive a confirmation email shortly.")
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3">
            <img
              src={mentor.image || "/placeholder.svg"}
              alt={mentor.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
            />
            <div>
              <h3 className="text-lg font-semibold">Book Session with {mentor.name}</h3>
              <p className="text-sm text-muted-foreground">
                {mentor.title} at {mentor.company}
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{mentor.rating}</span>
                <span className="text-sm text-muted-foreground">({mentor.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">${mentor.hourlyRate}/hour</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {mentor.expertise.slice(0, 2).map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="session-type">Session Type</Label>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {sessionTypes.map((type) => (
                    <Button
                      key={type.value}
                      variant={sessionType === type.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSessionType(type.value)}
                      className={`justify-start hover:scale-105 transition-all duration-200 ${
                        sessionType === type.value
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary/10 bg-transparent"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{type.label}</span>
                        <span className="text-xs">{type.duration}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="date">Preferred Date</Label>
                <div className="relative mt-2">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="pl-10 hover:border-primary/50 focus:border-primary transition-colors"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Available Times ({mentor.timezone})</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {availableTimes.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className={`hover:scale-105 transition-all duration-200 ${
                        selectedTime === time
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary/10 bg-transparent"
                      }`}
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Video className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Video Call Session</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  You'll receive a video call link via email 15 minutes before the session.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="message">Message to Mentor (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Tell your mentor about your goals, specific questions, or what you'd like to focus on during the session..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 hover:border-primary/50 focus:border-primary transition-colors"
              rows={4}
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Total: <span className="font-semibold text-foreground">${mentor.hourlyRate}</span>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={onClose}
                className="hover:bg-secondary/10 transition-colors duration-200 bg-transparent"
              >
                Cancel
              </Button>
              <Button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime || isBooking}
                className="hover:bg-primary/90 transition-colors duration-200"
              >
                {isBooking ? "Booking..." : "Book Session"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
