'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function CreateAgentPage() {
  const [agentType, setAgentType] = useState('')

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Create New AI Agent</h1>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Agent Details</CardTitle>
          <CardDescription>Configure your new AI agent</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Agent Name</Label>
            <Input id="name" placeholder="Enter agent name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Agent Type</Label>
            <Select onValueChange={setAgentType}>
              <SelectTrigger>
                <SelectValue placeholder="Select agent type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="customer-support">Customer Support</SelectItem>
                <SelectItem value="data-analysis">Data Analysis</SelectItem>
                <SelectItem value="inventory-management">Inventory Management</SelectItem>
                <SelectItem value="sales-forecasting">Sales Forecasting</SelectItem>
                <SelectItem value="custom">Custom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {agentType === 'custom' && (
            <div className="space-y-2">
              <Label htmlFor="description">Agent Description</Label>
              <Textarea id="description" placeholder="Describe the agent's purpose and capabilities" />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="data-source">Data Source</Label>
            <Input id="data-source" placeholder="Enter data source URL or path" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Create Agent</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

