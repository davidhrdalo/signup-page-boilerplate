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
    <div className="bg-gradient-to-b from-violet-50 via-white to-white dark:from-violet-950 dark:via-gray-950 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have questions about the beta? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {contactMethods.map((method) => (
              <div
                key={method.name}
                className="text-center p-6 rounded-lg bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-800"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400 mb-4">
                  {method.icon}
                </div>
                <h3 className="font-medium mb-1 dark:text-white">{method.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{method.description}</p>
                <p className="text-sm font-medium text-violet-600 dark:text-violet-400">{method.contact}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-900/30 rounded-xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-6 dark:text-white">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    required 
                    className="dark:bg-gray-800 dark:border-gray-700 dark:placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    className="dark:bg-gray-800 dark:border-gray-700 dark:placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?" 
                  required 
                  className="dark:bg-gray-800 dark:border-gray-700 dark:placeholder:text-gray-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[120px] dark:bg-gray-800 dark:border-gray-700 dark:placeholder:text-gray-500"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 dark:from-violet-500 dark:to-indigo-500 dark:hover:from-violet-600 dark:hover:to-indigo-600"
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