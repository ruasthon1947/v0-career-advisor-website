import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"

interface SuccessStory {
  id: number
  name: string
  previousRole: string
  currentRole: string
  timeframe: string
  story: string
  skills: string[]
  image: string
}

interface SuccessStoryCardProps {
  story: SuccessStory
}

export function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
      <CardHeader className="space-y-4">
        <div className="flex items-start space-x-4">
          <img
            src={story.image || "/placeholder.svg"}
            alt={story.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{story.name}</h3>
            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground">From: {story.previousRole}</p>
              <p className="font-medium text-primary">To: {story.currentRole}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{story.timeframe}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <blockquote className="text-sm text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-4">
          "{story.story}"
        </blockquote>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Key Skills Learned:</h4>
          <div className="flex flex-wrap gap-2">
            {story.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full hover:bg-secondary/10 transition-colors duration-200 bg-transparent"
        >
          Read Full Story
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
