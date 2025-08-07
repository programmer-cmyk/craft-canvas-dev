import { Search, Bell, User } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left side - Trigger and Search */}
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="lg:hidden" />
          
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by name, email or status"
              className="pl-10 bg-muted/50 border-border"
            />
          </div>
        </div>

        {/* Right side - Create Automation & Profile */}
        <div className="flex items-center space-x-4">
          <Button 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            size="sm"
          >
            <Zap className="mr-2 h-4 w-4" />
            Create an Automation
          </Button>
          
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-primary-foreground">
              U
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}

function Zap({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
    </svg>
  )
}