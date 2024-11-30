import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const faqs = [
  {
    question: "How do I create a new AI agent?",
    answer: "To create a new AI agent, navigate to the 'AI Agents' page and click on the 'Create New Agent' button. Follow the step-by-step wizard to configure your agent's settings and capabilities."
  },
  {
    question: "Can I integrate AI Catalyst with my existing systems?",
    answer: "Yes, AI Catalyst supports integration with various CRM, ERP, and marketing automation systems. Check the 'Integrations' tab in the Settings page to see the list of supported integrations and how to set them up."
  },
  {
    question: "How do I monitor the performance of my AI agents?",
    answer: "You can monitor your AI agents' performance on the main dashboard and the 'Analytics' page. These pages provide insights into task completion rates, efficiency metrics, and other key performance indicators."
  },
  {
    question: "What types of tasks can AI agents perform?",
    answer: "AI agents can perform a wide range of tasks, including customer support, data analysis, inventory management, sales forecasting, and more. The capabilities depend on how you configure your agents and the data sources you connect them to."
  },
  {
    question: "How secure is the data processed by AI Catalyst?",
    answer: "AI Catalyst takes data security seriously. We use industry-standard encryption for data in transit and at rest. All data processing complies with GDPR and other relevant data protection regulations. For more details, please refer to our security documentation."
  }
]

export default function HelpPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Help & Support</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Quick answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>Get in touch with our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  placeholder="How can we help?"
                  className="w-full min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

