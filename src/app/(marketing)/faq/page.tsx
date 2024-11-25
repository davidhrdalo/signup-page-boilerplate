import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to commonly asked questions about our beta program.",
  keywords: ["faq", "help", "questions", "support"],
};

const faqs = [
  {
    question: "When will the beta be available?",
    answer: "We're planning to launch our beta in early 2024. Sign up now to secure your spot and be among the first to get access."
  },
  {
    question: "Is the beta free?",
    answer: "Yes, the beta is completely free. Beta users will also receive special benefits and pricing when we launch."
  },
  {
    question: "What features will be available in the beta?",
    answer: "Beta users will have access to all core features including [Feature 1], [Feature 2], and [Feature 3]. We'll be adding more features based on user feedback."
  },
  {
    question: "How long will the beta last?",
    answer: "We expect the beta period to last approximately 3 months. During this time, we'll be actively collecting feedback and improving the product."
  },
  {
    question: "Will my data be secure?",
    answer: "Yes, security is our top priority. We use industry-standard encryption and security practices to protect all user data."
  },
  {
    question: "How can I provide feedback during the beta?",
    answer: "Beta users will have direct access to our feedback system and can communicate with our team through dedicated channels."
  },
  {
    question: "What happens after the beta ends?",
    answer: "Beta users will have the option to transition to our launch pricing with special benefits, or choose from our regular pricing plans."
  },
  {
    question: "Can I invite my team to the beta?",
    answer: "Yes! Beta users can invite team members. Details about team invitations will be provided when you get access."
  }
];

export default function FAQPage() {
  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-white dark:from-violet-950 dark:via-gray-950 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about the beta and our product.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-gray-200 dark:border-gray-800"
              >
                <AccordionTrigger className="text-left hover:text-violet-600 dark:text-white dark:hover:text-violet-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions section */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 dark:text-white">Still have questions?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Feel free to reach out to our team.
              </p>
              <a
                href="/contact"
                className="text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 font-medium transition-colors"
              >
                Contact us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}