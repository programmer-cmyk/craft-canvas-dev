import { ArrowRight, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  onClick?: () => void
}

export function FeatureCard({ title, description, icon: Icon, onClick }: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-card border border-border p-6 hover:shadow-card transition-all duration-300 hover:border-primary/20">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-primary transition-opacity duration-300" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{description}</p>
        
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onClick}
          className="group/btn p-0 h-auto text-primary hover:text-primary-glow transition-colors duration-200"
        >
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
        </Button>
      </div>
    </div>
  )
}