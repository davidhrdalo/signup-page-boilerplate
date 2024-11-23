export default function PrivacyPage() {
    const lastUpdated = "February 23, 2024";
  
    const sections = [
      {
        title: "Introduction",
        content: `This Privacy Policy describes how we collect, use, and protect your personal information when you use our beta service. By using our service, you agree to the collection and use of information in accordance with this policy.`
      },
      {
        title: "Information We Collect",
        subsections: [
          {
            title: "Information you provide",
            content: [
              "Email address when signing up for beta access",
              "Name and company information (optional)",
              "Feedback and communications with us",
              "Any additional information you choose to provide"
            ]
          },
          {
            title: "Information automatically collected",
            content: [
              "IP address and device information",
              "Browser type and version",
              "Usage patterns and preferences",
              "Cookies and similar tracking technologies"
            ]
          }
        ]
      },
      {
        title: "How We Use Your Information",
        content: [
          "To provide and maintain our service",
          "To notify you about changes and updates",
          "To provide customer support",
          "To gather analysis and insights to improve our service",
          "To detect and prevent technical issues"
        ]
      },
      {
        title: "Data Storage and Security",
        content: `We use industry-standard security measures to protect your personal information. Your data is stored securely on Supabase servers with encryption at rest and in transit.`
      },
      {
        title: "Third-Party Services",
        content: `We may use third-party services such as analytics providers and email service providers. These services have their own privacy policies and may collect information as specified in their respective privacy policies.`
      },
      {
        title: "Your Rights",
        content: [
          "Access your personal information",
          "Correct any inaccurate information",
          "Request deletion of your information",
          "Object to processing of your information",
          "Request data portability"
        ]
      },
      {
        title: "Contact Us",
        content: `If you have any questions about this Privacy Policy, please contact us at privacy@example.com`
      }
    ];
  
    return (
      <div className="bg-gradient-to-b from-violet-50 via-white to-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <article className="prose prose-gray max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600">
                Last updated: {lastUpdated}
              </p>
            </div>
  
            {/* Content */}
            {sections.map((section, index) => (
              <section key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                
                {section.subsections ? (
                  // Render subsections if they exist
                  section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="mb-6">
                      <h3 className="text-xl font-medium text-gray-800 mb-3">
                        {subsection.title}
                      </h3>
                      {Array.isArray(subsection.content) ? (
                        <ul className="list-disc pl-6 space-y-2 text-gray-600">
                          {subsection.content.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600">{subsection.content}</p>
                      )}
                    </div>
                  ))
                ) : Array.isArray(section.content) ? (
                  // Render array content as list
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  // Render string content as paragraph
                  <p className="text-gray-600">{section.content}</p>
                )}
              </section>
            ))}
  
            {/* Footer Note */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                This privacy policy is subject to change. We will notify users of any material changes to this policy.
              </p>
            </div>
          </article>
        </div>
      </div>
    );
  }