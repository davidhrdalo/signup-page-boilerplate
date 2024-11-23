import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Clock } from "lucide-react";

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    name: 'Email',
    description: 'Drop us a line anytime',
    contact: 'hello@example.com',
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    name: 'Live Chat',
    description: 'Chat with our team',
    contact: 'Coming soon',
  },
  {
    icon: <Clock className="h-6 w-6" />,
    name: 'Response Time',
    description: 'We usually respond within',
    contact: '24 hours',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              Have questions about the beta? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method) => (
              <div 
                key={method.name} 
                className="text-center p-6 rounded-lg bg-white shadow-sm border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-600 mb-4">
                  {method.icon}
                </div>
                <h3 className="font-medium mb-1">{method.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{method.description}</p>
                <p className="text-sm font-medium text-violet-600">{method.contact}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-sm rounded-xl p-6 sm:p-8 border border-gray-100">
            <h2 className="text-xl font-semibold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..." 
                  className="min-h-[120px]"
                  required 
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}