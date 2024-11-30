'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { NotificationsMenu } from '@/components/notifications'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'

export function DashboardHeader() {
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return (
    <header className="flex h-16 items-center justify-between border-b border-secondary px-6 bg-card/50 backdrop-blur-sm z-10 relative">
      <div className="flex items-center gap-2">
        <Search className={`h-4 w-4 transition-colors duration-200 ${isSearchFocused ? 'text-primary' : 'text-muted-foreground'}`} />
        <Input
          type="search"
          placeholder="Search..."
          className="w-[300px] bg-secondary/50 border-secondary text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-neon-blue transition-all duration-200"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <NotificationsMenu />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">username</p>
                <p className="text-xs leading-none text-muted-foreground">
                  user@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/login">Login</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/signup">Sign Up</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

