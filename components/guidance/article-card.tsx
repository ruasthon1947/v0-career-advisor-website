import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowRight } from "lucide-react"

interface Article {
  id: number
  title: string
  excerpt: string
  author: string
  authorRole: string
  publishDate: string
  readTime: string
  category: string
  tags: string[]
  image: string
  featured: boolean
}

interface ArticleCardProps {
  article: Article
  featured?: boolean
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 ${
        featured ? "lg:col-span-1" : ""
      }`}
    >
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>}
          <Badge variant="secondary" className="absolute top-3 right-3 text-xs">
            {article.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{article.excerpt}</p>
        </div>

        <div className="flex flex-wrap gap-1">
          {article.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">{article.authorRole}</p>
          <p className="text-xs text-muted-foreground">{article.publishDate}</p>
        </div>

        <Button size="sm" className="w-full hover:bg-primary/90 transition-colors duration-200 group-hover:scale-105">
          Read Article
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
