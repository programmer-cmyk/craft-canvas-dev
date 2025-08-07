import { useState } from "react"
import { 
  Home, 
  Users, 
  Settings, 
  Zap, 
  Puzzle, 
  User, 
  HelpCircle,
  ArrowUp
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Contacts", url: "/contacts", icon: Users, badge: "4" },
  { title: "Automations", url: "/automations", icon: Zap },
  { title: "Integrations", url: "/integrations", icon: Puzzle },
  { title: "Settings", url: "/settings", icon: Settings },
]

const bottomItems = [
  { title: "Profile", url: "/profile", icon: User },
  { title: "Help", url: "/help", icon: HelpCircle },
]

export function DashboardSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path

  const getNavClasses = (active: boolean) => 
    active 
      ? "bg-sidebar-accent text-sidebar-primary font-medium border border-sidebar-border" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground"

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-sidebar border-r border-sidebar-border">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            {!collapsed && (
              <span className="text-sidebar-foreground font-bold text-xl">Stide</span>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-4">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${getNavClasses(isActive(item.url))}`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto bg-muted text-muted-foreground">
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Upgrade Section */}
        <div className="px-4 pb-4">
          <div className="bg-gradient-card rounded-lg p-4 border border-sidebar-border">
            {!collapsed && (
              <>
                <h3 className="text-sidebar-foreground font-medium mb-2">Upgrade to</h3>
                <p className="text-sidebar-foreground/70 text-sm mb-3">
                  Unlock all features including AI and more
                </p>
              </>
            )}
            <Button 
              variant="default" 
              size={collapsed ? "icon" : "sm"} 
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Upgrade</span>}
            </Button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-4 pb-4">
              {bottomItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${getNavClasses(isActive(item.url))}`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Web Prodigies Badge */}
        {!collapsed && (
          <div className="px-4 pb-4">
            <div className="text-xs text-sidebar-foreground/50 text-center">
              Web Prodigies
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}