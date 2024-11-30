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
import { Cpu, MoreVertical, PlusCircle } from 'lucide-react'
import Link from 'next/link'

const agents = [
  { id: 1, name: 'Customer Support Agent', status: 'Active', tasks: 15, efficiency: '95%' },
  { id: 2, name: 'Data Analysis Agent', status: 'Inactive', tasks: 0, efficiency: '0%' },
  { id: 3, name: 'Inventory Management Agent', status: 'Active', tasks: 8, efficiency: '88%' },
  { id: 4, name: 'Sales Forecasting Agent', status: 'Active', tasks: 3, efficiency: '92%' },
  { id: 5, name: 'Email Marketing Agent', status: 'Paused', tasks: 2, efficiency: '78%' },
]

export default function AgentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">AI Agents</h1>
        <Button asChild className="bg-black hover:bg-black/90">
          <Link href="/dashboard/create-agent">
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Agent
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Your AI Agents</CardTitle>
          <CardDescription>Manage and monitor your AI agents' performance</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Active Tasks</TableHead>
                <TableHead>Efficiency</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {agents.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Cpu className="mr-2 h-4 w-4 text-muted-foreground" />
                      {agent.name}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        agent.status === 'Active' ? 'default' : 
                        agent.status === 'Paused' ? 'secondary' : 
                        'destructive'
                      }
                    >
                      {agent.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{agent.tasks}</TableCell>
                  <TableCell>
                    <span className={
                      parseInt(agent.efficiency) > 90 ? 'text-green-600' :
                      parseInt(agent.efficiency) > 80 ? 'text-yellow-600' :
                      'text-muted-foreground'
                    }>
                      {agent.efficiency}
                    </span>
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

