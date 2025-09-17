export function StatsSection() {
  const stats = [
    { number: "50K+", label: "Students Guided" },
    { number: "500+", label: "Career Paths" },
    { number: "95%", label: "Success Rate" },
    { number: "1000+", label: "Expert Mentors" },
  ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
