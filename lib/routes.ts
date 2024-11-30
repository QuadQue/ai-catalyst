import { BarChart, Cpu, PlusCircle, Zap, FileText, Users, Settings, HelpCircle } from 'lucide-react'

export interface Route {
  name: string
  path: string
  icon: React.ComponentType
}

export interface RouteGroup {
  name: string
  routes: Route[]
}

export const routes: RouteGroup[] = [
  {
    name: 'Overview',
    routes: [
      { name: 'Dashboard', path: '/', icon: BarChart },
    ]
  },
  {
    name: 'AI Management',
    routes: [
      { name: 'AI Agents', path: '/agents', icon: Cpu },
      { name: 'Create Agent', path: '/create-agent', icon: PlusCircle },
      { name: 'Tasks', path: '/tasks', icon: Zap },
    ]
  },
  {
    name: 'Insights',
    routes: [
      { name: 'Analytics', path: '/analytics', icon: FileText },
    ]
  },
  {
    name: 'Administration',
    routes: [
      { name: 'Team', path: '/team', icon: Users },
      { name: 'Settings', path: '/settings', icon: Settings },
    ]
  },
  {
    name: 'Support',
    routes: [
      { name: 'Help', path: '/help', icon: HelpCircle },
    ]
  }
]

