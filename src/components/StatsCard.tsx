interface StatsCardProps {
  title: string
  subtitle: string
  percentage: number
  description: string
}

export function StatsCard({ title, subtitle, percentage, description }: StatsCardProps) {
  return (
    <div className="bg-gradient-card rounded-xl border border-border p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-foreground">{percentage}</span>
            <span className="text-lg text-muted-foreground">%</span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}