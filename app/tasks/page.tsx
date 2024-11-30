import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { MoreVertical, Plus } from 'lucide-react'

const tasks = [
  { id: 1, name: 'Process customer inquiries', agent: 'Customer Support Agent', status: 'In Progress', priority: 'High' },
  { id: 2, name: 'Analyze Q2 sales data', agent: 'Data Analysis Agent', status: 'Pending', priority: 'Medium' },
  { id: 3, name: 'Update inventory levels', agent: 'Inventory Management Agent', status: 'Completed', priority: 'Low' },
  { id: 4, name: 'Generate monthly sales report', agent: 'Sales Forecasting Agent', status: 'In Progress', priority: 'High' },
  { id: 5, name: 'Send follow-up emails', agent: 'Email Marketing Agent', status: 'Pending', priority: 'Medium' },
]

export default function TasksPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Tasks</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create New Task
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Active Tasks</CardTitle>
          <CardDescription>View and manage tasks assigned to AI agents</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task Name</TableHead>
                <TableHead>Assigned Agent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">{task.name}</TableCell>
                  <TableCell>{task.agent}</TableCell>
                  <TableCell>
                    <Badge variant={task.status === 'Completed' ? 'default' : 'secondary'}>
                      {task.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      task.priority === 'High' ? 'destructive' :
                      task.priority === 'Medium' ? 'default' : 'secondary'
                    }>
                      {task.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

