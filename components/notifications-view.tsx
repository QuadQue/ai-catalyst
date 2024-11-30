import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/button'

const notifications = [
  {
    id: 1,
    title: 'New task assigned',
    description: 'You have been assigned a new task: "Analyze customer feedback data".',
    time: '5 minutes ago',
    type: 'task',
  },
  {
    id: 2,
    title: 'AI Agent performance update',
    description: 'Your AI agent "Customer Support" has improved its efficiency by 5%.',
    time: '1 hour ago',
    type: 'update',
  },
  {
    id: 3,
    title: 'System maintenance',
    description: 'Scheduled maintenance in 2 hours. Please save your work and expect brief downtime.',
    time: '2 hours ago',
    type: 'system',
  },
  {
    id: 4,
    title: 'New team member added',
    description: 'Sarah Johnson has joined your team. Please welcome her!',
    time: '1 day ago',
    type: 'team',
  },
  {
    id: 5,
    title: 'Integration successful',
    description: 'The CRM system has been successfully integrated with AI Catalyst.',
    time: '2 days ago',
    type: 'integration',
  },
]

export function NotificationsView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Stay updated with the latest activities and alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-4 bg-muted p-4 rounded-lg">
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-none">{notification.title}</p>
                  <Badge variant="outline">{notification.type}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{notification.description}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

