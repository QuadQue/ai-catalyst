import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const recentActivities = [
  {
    name: 'John Doe',
    action: 'created a new AI agent',
    time: '2 hours ago',
    initials: 'JD',
  },
  {
    name: 'Jane Smith',
    action: 'updated analytics dashboard',
    time: '4 hours ago',
    initials: 'JS',
  },
  {
    name: 'Mike Johnson',
    action: 'optimized task allocation algorithm',
    time: 'Yesterday at 2:30 PM',
    initials: 'MJ',
  },
  {
    name: 'Sarah Williams',
    action: 'added new team member',
    time: 'Yesterday at 11:15 AM',
    initials: 'SW',
  },
  {
    name: 'David Brown',
    action: 'generated monthly report',
    time: '2 days ago',
    initials: 'DB',
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{activity.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">
              {activity.action}
            </p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  )
}

