###

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
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Icons } from "@/components/ui/icons"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUploader } from "@/components/file-uploader"

interface FormStep {
  title: string
  description: string
}

const FORM_STEPS: FormStep[] = [
  { title: "Basic Information", description: "Set up your agent's identity" },
  { title: "Data Sources", description: "Configure knowledge sources" },
  { title: "Behavior & Capabilities", description: "Fine-tune your agent's responses" },
  { title: "Security & Deployment", description: "Set up access controls" },
]

export default function CreateAgentPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [agentType, setAgentType] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    agentType: '',
    description: '',
    businessWebsite: '',
    dataSourceType: 'manual', // 'manual' | 'website' | 'api'
    dataSources: [] as string[],
    uploadedFiles: [] as File[],
    temperature: 0.7,
    maxTokens: 2048,
    isActive: true,
    responseStyle: 'balanced',
    languagePreference: 'english',
    enableLearning: false,
    enableUserFeedback: false,
    enableConversationMemory: false,
    personalityTraits: [] as string[],
    apiKey: '',
    webhookUrl: '',
    customInstructions: '',
    knowledgeCutoff: new Date().toISOString(),
    fallbackBehavior: 'apologize', // 'apologize' | 'redirect' | 'escalate'
    supportedLanguages: ['english'],
    contextWindow: 4096,
    modelVersion: 'gpt-4',
    internalId: '',
    department: '',
    team: '',
    isPublic: false,
    requiresAuth: true,
    hierarchyLevel: '',
    reportingTo: '',
    supervisorId: '',
    priority: 'normal',
    escalationPath: [] as string[],
    canEscalateTo: [] as string[],
    isTeamLead: false,
    maxConcurrentTasks: 5,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleNext = () => {
    if (currentStep < FORM_STEPS.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1000))
    } catch (err) {
      setError('Failed to create agent. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Create New AI Agent</h1>
          <p className="text-muted-foreground">Configure your AI agent's settings and capabilities.</p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-4">
          <Progress value={(currentStep + 1) / FORM_STEPS.length * 100} className="h-2" />
          
          {/* Step Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FORM_STEPS.map((step, index) => (
              <div 
                key={index}
                className={`text-center p-2 rounded-lg transition-colors
                  ${index === currentStep 
                    ? 'bg-primary/10 text-primary' 
                    : index < currentStep 
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-background text-muted-foreground'
                  }`}
              >
                <div className="text-xs font-medium mb-1">{`Step ${index + 1}`}</div>
                <div className="text-sm font-semibold">{step.title}</div>
                <div className="text-xs hidden md:block">{step.description}</div>
              </div>
            ))}
          </div>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Card className="border-none shadow-none md:border md:shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">{FORM_STEPS[currentStep].title}</CardTitle>
              <CardDescription>{FORM_STEPS[currentStep].description}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {currentStep === 0 && (
                <div className="space-y-6">
                  {/* Agent Identity */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground">AGENT IDENTITY</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base font-medium">
                          Display Name <span className="text-red-500">*</span>
                        </Label>
                        <Input 
                          id="name" 
                          placeholder="e.g., Sales Assistant, Support Agent"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                        <p className="text-sm text-muted-foreground">Public name visible to users</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="internalId" className="text-base font-medium">
                          Internal ID
                        </Label>
                        <Input 
                          id="internalId" 
                          placeholder="e.g., sales-agent-01"
                          value={formData.internalId}
                          onChange={(e) => setFormData({...formData, internalId: e.target.value})}
                          pattern="[a-z0-9-]+"
                        />
                        <p className="text-sm text-muted-foreground">Unique identifier for API calls</p>
                      </div>
                    </div>
                  </div>

                  {/* Agent Classification */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-sm font-medium text-muted-foreground">CLASSIFICATION</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="type" className="text-base font-medium">
                          Agent Type <span className="text-red-500">*</span>
                        </Label>
                        <Select 
                          onValueChange={(value) => {
                            setAgentType(value)
                            setFormData({...formData, agentType: value})
                          }}
                          value={formData.agentType}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select agent type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="customer-support">Customer Support</SelectItem>
                            <SelectItem value="sales">Sales & Marketing</SelectItem>
                            <SelectItem value="data-analysis">Data Analysis</SelectItem>
                            <SelectItem value="knowledge-base">Knowledge Base</SelectItem>
                            <SelectItem value="workflow-automation">Workflow Automation</SelectItem>
                            <SelectItem value="content-generation">Content Generation</SelectItem>
                            <SelectItem value="custom">Custom Solution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="department" className="text-base font-medium">Department</Label>
                        <Select 
                          value={formData.department}
                          onValueChange={(value) => setFormData({...formData, department: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sales">Sales</SelectItem>
                            <SelectItem value="support">Customer Support</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="operations">Operations</SelectItem>
                            <SelectItem value="hr">Human Resources</SelectItem>
                            <SelectItem value="it">IT</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Agent Details */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-sm font-medium text-muted-foreground">DETAILS & INTEGRATION</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description" className="text-base font-medium">
                        Description <span className="text-red-500">*</span>
                      </Label>
                      <Textarea 
                        id="description" 
                        placeholder="Describe the agent's purpose, capabilities, and intended use cases..."
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        className="h-32"
                        required
                      />
                      <p className="text-sm text-muted-foreground">
                        Detailed description helps team members understand the agent's purpose
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="business-website" className="text-base font-medium">
                          Business Website
                        </Label>
                        <Input 
                          id="business-website" 
                          placeholder="https://your-business.com"
                          value={formData.businessWebsite}
                          onChange={(e) => setFormData({...formData, businessWebsite: e.target.value})}
                          type="url"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="team" className="text-base font-medium">Team</Label>
                        <Input 
                          id="team" 
                          placeholder="e.g., Enterprise Sales, Tier 1 Support"
                          value={formData.team}
                          onChange={(e) => setFormData({...formData, team: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Access Control */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-sm font-medium text-muted-foreground">ACCESS CONTROL</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base font-medium">Public Access</Label>
                          <p className="text-sm text-muted-foreground">Allow public users to interact with this agent</p>
                        </div>
                        <Switch
                          checked={formData.isPublic}
                          onCheckedChange={(checked) => setFormData({...formData, isPublic: checked})}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base font-medium">Authentication Required</Label>
                          <p className="text-sm text-muted-foreground">Users must be authenticated to access</p>
                        </div>
                        <Switch
                          checked={formData.requiresAuth}
                          onCheckedChange={(checked) => setFormData({...formData, requiresAuth: checked})}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hierarchy Setup */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-sm font-medium text-muted-foreground">HIERARCHY SETUP</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="hierarchyLevel" className="text-base font-medium">
                          Hierarchy Level <span className="text-red-500">*</span>
                        </Label>
                        <Select 
                          value={formData.hierarchyLevel}
                          onValueChange={(value) => setFormData({...formData, hierarchyLevel: value})}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="l1">L1 - First Line</SelectItem>
                            <SelectItem value="l2">L2 - Specialist</SelectItem>
                            <SelectItem value="l3">L3 - Expert</SelectItem>
                            <SelectItem value="supervisor">Supervisor</SelectItem>
                            <SelectItem value="manager">Manager</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-muted-foreground">Determines escalation path and permissions</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reportingTo" className="text-base font-medium">Reports To</Label>
                        <Select 
                          value={formData.reportingTo}
                          onValueChange={(value) => setFormData({...formData, reportingTo: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select supervisor" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="support-lead">Support Team Lead</SelectItem>
                            <SelectItem value="sales-manager">Sales Manager</SelectItem>
                            <SelectItem value="tech-lead">Technical Lead</SelectItem>
                            <SelectItem value="operations">Operations Manager</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="priority" className="text-base font-medium">Priority Level</Label>
                        <Select 
                          value={formData.priority}
                          onValueChange={(value) => setFormData({...formData, priority: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - Background Tasks</SelectItem>
                            <SelectItem value="normal">Normal - Standard Operations</SelectItem>
                            <SelectItem value="high">High - Critical Tasks</SelectItem>
                            <SelectItem value="urgent">Urgent - Emergency Response</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="maxConcurrentTasks" className="text-base font-medium">
                          Max Concurrent Tasks
                        </Label>
                        <Input 
                          id="maxConcurrentTasks"
                          type="number"
                          min="1"
                          max="20"
                          value={formData.maxConcurrentTasks}
                          onChange={(e) => setFormData({...formData, maxConcurrentTasks: parseInt(e.target.value)})}
                        />
                        <p className="text-sm text-muted-foreground">Maximum number of simultaneous tasks</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label className="text-base font-medium">Team Lead Capabilities</Label>
                          <p className="text-sm text-muted-foreground">Can manage and delegate tasks to other agents</p>
                        </div>
                        <Switch
                          checked={formData.isTeamLead}
                          onCheckedChange={(checked) => setFormData({...formData, isTeamLead: checked})}
                        />
                      </div>

                      {formData.isTeamLead && (
                        <div className="space-y-2">
                          <Label className="text-base font-medium">Can Escalate To</Label>
                          <div className="flex flex-wrap gap-2">
                            {['Technical Lead', 'Operations Manager', 'Department Head', 'System Admin'].map((role) => (
                              <Button
                                key={role}
                                variant={formData.canEscalateTo.includes(role) ? "default" : "outline"}
                                onClick={() => {
                                  const updatedRoles = formData.canEscalateTo.includes(role)
                                    ? formData.canEscalateTo.filter(r => r !== role)
                                    : [...formData.canEscalateTo, role]
                                  setFormData({...formData, canEscalateTo: updatedRoles})
                                }}
                                type="button"
                                size="sm"
                              >
                                {role}
                              </Button>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground">Select roles this agent can escalate tasks to</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-6">
                  <Tabs defaultValue="manual" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="manual">Manual Upload</TabsTrigger>
                      <TabsTrigger value="website">Website Scraping</TabsTrigger>
                      <TabsTrigger value="api">API Integration</TabsTrigger>
                    </TabsList>
                    <TabsContent value="manual" className="space-y-4">
                      <FileUploader 
                        onFilesSelected={(files) => setFormData({...formData, uploadedFiles: files})}
                        acceptedFileTypes={['.pdf', '.doc', '.docx', '.txt', '.csv']}
                        maxFileSize={10}
                      />
                    </TabsContent>
                    <TabsContent value="website" className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-base font-medium">Website URLs</Label>
                        <Textarea 
                          placeholder="Enter URLs (one per line)"
                          value={formData.dataSources.join('\n')}
                          onChange={(e) => setFormData({...formData, dataSources: e.target.value.split('\n')})}
                          className="h-32"
                        />
                        <p className="text-sm text-muted-foreground">
                          Add URLs to web pages you want the agent to learn from
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="api" className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-base font-medium">API Endpoint</Label>
                        <Input placeholder="https://api.your-service.com/data" className="max-w-lg" />
                        <div className="space-y-4 mt-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-base font-medium">Authentication Required</Label>
                              <p className="text-sm text-muted-foreground">Enable if your API requires authentication</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-8">
                  {/* Core Behavior */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground">CORE BEHAVIOR</h3>
                    
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="modelVersion" className="text-base font-medium">
                          Base Model <span className="text-red-500">*</span>
                        </Label>
                        <Select 
                          value={formData.modelVersion}
                          onValueChange={(value) => setFormData({...formData, modelVersion: value})}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select model version" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gpt-4">GPT-4 (Most Capable)</SelectItem>
                            <SelectItem value="gpt-4-turbo">GPT-4 Turbo (Fastest)</SelectItem>
                            <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo (Balanced)</SelectItem>
                            <SelectItem value="claude-2">Claude 2 (Analytical)</SelectItem>
                            <SelectItem value="llama-2">Llama 2 (Open Source)</SelectItem>
                          </SelectContent>
                        </Select>
                        <p className="text-sm text-muted-foreground">
                          Determines the core capabilities and performance
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-base font-medium">Response Style</Label>
                        <Select 
                          value={formData.responseStyle}
                          onValueChange={(value) => setFormData({...formData, responseStyle: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select style" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="concise">Concise (Brief and direct)</SelectItem>
                            <SelectItem value="balanced">Balanced (Default)</SelectItem>
                            <SelectItem value="detailed">Detailed (Comprehensive)</SelectItem>
                            <SelectItem value="technical">Technical (Expert-level)</SelectItem>
                            <SelectItem value="friendly">Friendly (Conversational)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="temperature" className="text-base font-medium">
                          Creativity Level
                        </Label>
                        <span className="text-sm font-medium">
                          {formData.temperature.toFixed(1)}
                        </span>
                      </div>
                      <Slider
                        id="temperature"
                        min={0}
                        max={1}
                        step={0.1}
                        value={[formData.temperature]}
                        onValueChange={(value: number[]) => setFormData({...formData, temperature: value[0]})}
                        className="max-w-lg"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Consistent</span>
                        <span>Balanced</span>
                        <span>Creative</span>
                      </div>
                    </div>
                  </div>

                  {/* Personality & Communication */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground">PERSONALITY & COMMUNICATION</h3>
                    
                    <div className="space-y-4">
                      <Label className="text-base font-medium">Personality Traits</Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {[
                          'Professional', 'Friendly', 'Technical', 'Casual', 'Formal',
                          'Empathetic', 'Direct', 'Patient', 'Proactive', 'Analytical'
                        ].map((trait) => (
                          <Button
                            key={trait}
                            variant={formData.personalityTraits.includes(trait) ? "default" : "outline"}
                            onClick={() => {
                              const traits = formData.personalityTraits.includes(trait)
                                ? formData.personalityTraits.filter(t => t !== trait)
                                : [...formData.personalityTraits, trait]
                              setFormData({...formData, personalityTraits: traits})
                            }}
                            type="button"
                            size="sm"
                            className="h-auto py-2"
                          >
                            {trait}
                          </Button>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Selected: {formData.personalityTraits.length ? 
                          formData.personalityTraits.join(', ') : 
                          'No traits selected'}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-base font-medium">Primary Language</Label>
                        <Select 
                          value={formData.languagePreference}
                          onValueChange={(value) => setFormData({...formData, languagePreference: value})}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">English</SelectItem>
                            <SelectItem value="spanish">Spanish</SelectItem>
                            <SelectItem value="french">French</SelectItem>
                            <SelectItem value="german">German</SelectItem>
                            <SelectItem value="chinese">Chinese</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-base font-medium">Additional Languages</Label>
                        <div className="flex flex-wrap gap-2">
                          {['Spanish', 'French', 'German', 'Chinese', 'Japanese'].map((lang) => (
                            <Button
                              key={lang}
                              variant={formData.supportedLanguages.includes(lang.toLowerCase()) ? "default" : "outline"}
                              onClick={() => {
                                const langs = formData.supportedLanguages.includes(lang.toLowerCase())
                                  ? formData.supportedLanguages.filter(l => l !== lang.toLowerCase())
                                  : [...formData.supportedLanguages, lang.toLowerCase()]
                                setFormData({...formData, supportedLanguages: langs})
                              }}
                              type="button"
                              size="sm"
                            >
                              {lang}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Settings */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-muted-foreground">ADVANCED SETTINGS</h3>
                    
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="text-base font-medium">Context Window</Label>
                        <div className="flex gap-2">
                          <Input 
                            type="number" 
                            value={formData.contextWindow}
                            onChange={(e) => setFormData({...formData, contextWindow: parseInt(e.target.value)})}
                            min={1024}
                            max={128000}
                            step={1024}
                            className="w-32"
                          />
                          <span className="text-sm text-muted-foreground self-center">tokens</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Memory capacity for conversation</p>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-base font-medium">Max Response Length</Label>
                        <div className="flex gap-2">
                          <Input 
                            type="number" 
                            value={formData.maxTokens}
                            onChange={(e) => setFormData({...formData, maxTokens: parseInt(e.target.value)})}
                            min={256}
                            max={32000}
                            step={256}
                            className="w-32"
                          />
                          <span className="text-sm text-muted-foreground self-center">tokens</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Maximum length of each response</p>
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="enableLearning" className="text-base font-medium">Adaptive Learning</Label>
                          <p className="text-sm text-muted-foreground">Improve responses based on interactions</p>
                        </div>
                        <Switch
                          id="enableLearning"
                          checked={formData.enableLearning}
                          onCheckedChange={(checked) => setFormData({...formData, enableLearning: checked})}
                        />
                      </div>

                      {formData.enableLearning && (
                        <div className="ml-4 p-4 bg-muted/50 rounded-lg space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-base font-medium">User Feedback Learning</Label>
                              <p className="text-sm text-muted-foreground">Learn from user ratings and feedback</p>
                            </div>
                            <Switch
                              checked={formData.enableUserFeedback}
                              onCheckedChange={(checked) => setFormData({...formData, enableUserFeedback: checked})}
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label className="text-base font-medium">Conversation Memory</Label>
                              <p className="text-sm text-muted-foreground">Remember past interactions for context</p>
                            </div>
                            <Switch
                              checked={formData.enableConversationMemory}
                              onCheckedChange={(checked) => setFormData({...formData, enableConversationMemory: checked})}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="apiKey" className="text-base font-medium">API Key</Label>
                    <Input
                      id="apiKey"
                      type="password"
                      placeholder="Enter API key"
                      value={formData.apiKey}
                      onChange={(e) => setFormData({...formData, apiKey: e.target.value})}
                      className="max-w-lg font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="webhookUrl" className="text-base font-medium">
                      Webhook URL (Optional)
                    </Label>
                    <Input
                      id="webhookUrl"
                      placeholder="https://your-service.com/webhook"
                      value={formData.webhookUrl}
                      onChange={(e) => setFormData({...formData, webhookUrl: e.target.value})}
                      className="max-w-lg"
                    />
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when the agent processes requests
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-base font-medium">Fallback Behavior</Label>
                    <Select 
                      value={formData.fallbackBehavior}
                      onValueChange={(value) => setFormData({...formData, fallbackBehavior: value})}
                    >
                      <SelectTrigger className="max-w-lg">
                        <SelectValue placeholder="Select fallback behavior" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="apologize">Apologize & Explain</SelectItem>
                        <SelectItem value="redirect">Redirect to Human</SelectItem>
                        <SelectItem value="escalate">Escalate to Supervisor</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-sm text-muted-foreground">
                      How the agent should handle queries it cannot answer
                    </p>
                  </div>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex justify-between pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="w-[120px]"
              >
                Previous
              </Button>
              {currentStep === FORM_STEPS.length - 1 ? (
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-[120px]"
                >
                  {isSubmitting ? (
                    <>
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    'Create Agent'
                  )}
                </Button>
              ) : (
                <Button 
                  type="button" 
                  onClick={handleNext}
                  className="w-[120px]"
                >
                  Next
                </Button>
              )}
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}

###