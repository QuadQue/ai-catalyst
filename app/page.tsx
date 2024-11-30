'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Overview } from '@/components/overview'
import { RecentActivity } from '@/components/recent-activity'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Cpu, DollarSign, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`flex-1 space-y-6 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight animate-fade-in">Welcome to AI Catalyst</h1>
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 animate-slide-in">
          <Link href="/create-agent">
            <Cpu className="mr-2 h-4 w-4" /> Create New Agent
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card/50 backdrop-blur-sm border border-secondary hover:border-neon-blue transition-all duration-200 hover:scale-105 animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Total AI Agents</CardTitle>
            <Cpu className="h-4 w-4 text-neon-blue animate-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-sm border border-secondary hover:border-neon-purple transition-all duration-200 hover:scale-105 animate-fade-in" style={{animationDelay: '0.1s'}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Active Tasks</CardTitle>
            <Zap className="h-4 w-4 text-neon-purple animate-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">34</div>
            <p className="text-xs text-muted-foreground">+5 since yesterday</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-sm border border-secondary hover:border-neon-pink transition-all duration-200 hover:scale-105 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Cost Savings</CardTitle>
            <DollarSign className="h-4 w-4 text-neon-pink animate-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$12,345</div>
            <p className="text-xs text-muted-foreground">+15% from last quarter</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-sm border border-secondary hover:border-neon-blue transition-all duration-200 hover:scale-105 animate-fade-in" style={{animationDelay: '0.3s'}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-foreground">Team Members</CardTitle>
            <Users className="h-4 w-4 text-neon-blue animate-glow" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">9</div>
            <p className="text-xs text-muted-foreground">+1 new this week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-4 bg-card/50 backdrop-blur-sm border border-secondary hover:border-neon-blue transition-all duration-200 hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <CardHeader>
            <CardTitle className="text-foreground">Performance Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3 bg-card/50 backdrop-blur-sm border border-secondary hover:border-neon-purple transition-all duration-200 hover:scale-105 animate-fade-in" style={{animationDelay: '0.5s'}}>
          <CardHeader>
            <CardTitle className="text-foreground">Recent Activity</CardTitle>
            <CardDescription className="text-muted-foreground">You have 5 new activities this week.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>

      {/* Additional content... */}
    </div>
  )
}

