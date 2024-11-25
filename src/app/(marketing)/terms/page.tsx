import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read our terms of service and usage conditions.',
  robots: {
    index: true,
    follow: false,
  },
};

export default function TermsPage() {
  const lastUpdated = "February 23, 2024";

  const sections = [
    {
      title: "1. Agreement to Terms",
      content: `By accessing or using our beta service, you agree to be bound by these Terms of Service ('Terms'). If you disagree with any part of the terms, you do not have permission to access the service.`
    },
    {
      title: "2. Beta Service",
      content: [
        "This is a beta version of our service provided for testing and feedback purposes",
        "The service may contain bugs, errors, or inaccuracies",
        "We may change, suspend, or discontinue any aspect of the service at any time",
        "We make no guarantees about service availability or performance",
        "Your feedback and suggestions about the service are welcome and may be used without compensation"
      ]
    },
    {
      title: "3. User Accounts",
      content: [
        "You must provide accurate and complete information when registering",
        "You are responsible for maintaining the security of your account",
        "You must notify us immediately of any unauthorized access",
        "We reserve the right to suspend or terminate accounts at our discretion"
      ]
    },
    {
      title: "4. Acceptable Use",
      content: `You agree not to:`,
      list: [
        "Use the service for any illegal purposes",
        "Send spam or unsolicited messages",
        "Attempt to interfere with or disrupt the service",
        "Attempt to access areas/features you aren't authorized to access",
        "Use the service in a way that could damage or overburden it",
        "Copy, modify, or distribute our content without permission"
      ]
    },
    {
      title: "5. Intellectual Property",
      content: `All rights, title, and interest in and to the service (excluding content provided by users) are and will remain the exclusive property of us and our licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.`
    },
    {
      title: "6. User Content",
      content: [
        "You retain rights to content you submit to the service",
        "By submitting content, you grant us a license to use, modify, and display it",
        "You are responsible for any content you submit",
        "We may remove any content at our discretion"
      ]
    },
    {
      title: "7. Disclaimer of Warranties",
      content: `THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.`
    },
    {
      title: "8. Limitation of Liability",
      content: `IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH THE SERVICE OR THESE TERMS.`
    },
    {
      title: "9. Changes to Terms",
      content: `We reserve the right to modify or replace these terms at any time. We will provide notice of significant changes. Your continued use of the service after such modifications constitutes acceptance of the updated terms.`
    },
    {
      title: "10. Governing Law",
      content: `These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.`
    },
    {
      title: "11. Contact",
      content: `For any questions about these Terms, please contact us at legal@example.com`
    }
  ];

  return (
    <div className="bg-gradient-to-b from-violet-50 via-white to-white dark:from-violet-950 dark:via-gray-950 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <article className="prose prose-gray dark:prose-invert max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          {sections.map((section, index) => (
            <section key={index} className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>
              
              {/* Handle different content types */}
              {typeof section.content === 'string' ? (
                <p className="text-gray-600 dark:text-gray-300 mb-4">{section.content}</p>
              ) : Array.isArray(section.content) ? (
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="marker:text-gray-400 dark:marker:text-gray-500">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              
              {/* Additional list if present */}
              {section.list && (
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="marker:text-gray-400 dark:marker:text-gray-500">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              These terms are subject to change. Users will be notified of any material changes to these terms.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}