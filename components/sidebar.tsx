'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Cpu, ChevronRight, ChevronLeft, Bell } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { routes, Route } from '@/lib/routes'

export function DashboardSidebar() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleSidebar = () => setIsExpanded(!isExpanded)

  const renderNavItem = (item: Route) => (
    <Tooltip key={item.name}>
      <TooltipTrigger asChild>
        <Link
          href={item.path}
          className={cn(
            "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out",
            pathname === item.path
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
            isExpanded ? "justify-start" : "justify-center"
          )}
        >
          <item.icon className={cn("h-5 w-5 flex-shrink-0 transition-all duration-200 ease-in-out", isExpanded ? "mr-3" : "")} />
          <span className={cn("transition-all duration-200 ease-in-out", isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden")}>{item.name}</span>
        </Link>
      </TooltipTrigger>
      {!isExpanded && (
        <TooltipContent side="right">
          <p>{item.name}</p>
        </TooltipContent>
      )}
    </Tooltip>
  )

  return (
    <TooltipProvider>
      <aside className={cn(
        "flex h-screen flex-col border-r border-secondary bg-card/50 backdrop-blur-sm transition-all duration-300 ease-in-out relative z-10",
        isExpanded ? "w-64" : "w-16"
      )}>
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className={cn("flex items-center transition-all duration-200 ease-in-out", isExpanded ? "" : "justify-center")}>
            {isExpanded ? (
              <>
                <Cpu className="h-6 w-6 text-primary animate-pulse" />
                <span className="ml-2 text-lg font-bold animate-fade-in">AI Catalyst</span>
              </>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Cpu className="h-6 w-6 text-primary animate-pulse" />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>AI Catalyst</p>
                </TooltipContent>
              </Tooltip>
            )}
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-2">
          {routes.map((group) => (
            <div key={group.name} className="mb-4">
              {isExpanded && <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground animate-fade-in">{group.name}</h3>}
              {group.routes.map(renderNavItem)}
            </div>
          ))}
        </nav>
        <div className="p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("w-full transition-all duration-200 ease-in-out", isExpanded ? "justify-start px-3" : "justify-center")}
              >
                <Bell className={cn("h-5 w-5 transition-all duration-200 ease-in-out", isExpanded ? "mr-3" : "")} />
                <span className={cn("transition-all duration-200 ease-in-out", isExpanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden")}>Notifications</span>
              </Button>
            </TooltipTrigger>
            {!isExpanded && (
              <TooltipContent side="right">
                <p>Notifications</p>
              </TooltipContent>
            )}
          </Tooltip>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="absolute -right-4 top-20 bg-card border border-secondary rounded-full shadow-md transition-all duration-200 ease-in-out hover:bg-muted hover:text-neon-blue"
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </aside>
    </TooltipProvider>
  )
}

