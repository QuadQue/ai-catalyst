export const DASHBOARD_SECTIONS = {
  agents: {
    title: 'AI Agents',
    description: 'Manage and monitor your AI agents',
  },
  analytics: {
    title: 'Analytics',
    description: 'View detailed analytics and reports',
  },
  tasks: {
    title: 'Tasks',
    description: 'Manage and track AI agent tasks',
  },
  team: {
    title: 'Team',
    description: 'Manage team members and permissions',
  },
  settings: {
    title: 'Settings',
    description: 'Configure your account and preferences',
  },
  help: {
    title: 'Help',
    description: 'Get help and support',
  },
} as const

export const API_ENDPOINTS = {
  agents: '/api/agents',
  tasks: '/api/tasks',
  analytics: '/api/analytics',
  team: '/api/team',
} as const

export const DEFAULT_PAGINATION_LIMIT = 10

