'use client'

import { useState, useEffect } from 'react'
import { DashboardSidebar } from '@/components/sidebar'
import { DashboardHeader } from '@/components/header'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon-blue/20 via-background to-background pointer-events-none"></div>
      <DashboardSidebar />
      <div className={`flex flex-col flex-1 overflow-hidden relative transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-8 relative">
          {children}
        </main>
      </div>
    </div>
  )
}

