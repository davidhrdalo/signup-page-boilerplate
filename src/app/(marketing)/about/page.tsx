import { Rocket, Users, Stars, ArrowUpRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-white dark:from-violet-950 dark:via-gray-950 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-gray-900 dark:text-white">
            Building the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
              Product Development
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We're on a mission to empower creators and developers with tools that make building products faster, easier, and more enjoyable.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {[
            { label: 'Early Users', value: '1,000+' },
            { label: 'Countries', value: '50+' },
            { label: 'Beta Signups', value: '5,000+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold text-center mb-12 dark:text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Rocket className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
                title: "Move Fast",
                description: "We believe in rapid iteration and continuous improvement"
              },
              {
                icon: <Users className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
                title: "User First",
                description: "Everything we build starts with user needs"
              },
              {
                icon: <Stars className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
                title: "Excellence",
                description: "Quality is not an act, it's a habit"
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/50 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12 dark:text-white">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                image: "/api/placeholder/300/300"
              },
              {
                name: "Alex Rodriguez",
                role: "Head of Engineering",
                image: "/api/placeholder/300/300"
              },
              {
                name: "Maya Patel",
                role: "Head of Product",
                image: "/api/placeholder/300/300"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-100 dark:bg-gray-800"
                />
                <h3 className="text-lg font-semibold dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <div className="bg-violet-50 dark:bg-violet-900/20 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl font-semibold mb-4 dark:text-white">
              Join Us on Our Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're looking for passionate people to join our beta and help shape the future of our product.
            </p>
            <a 
              href="/"
              className="inline-flex items-center text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 font-medium transition-colors"
            >
              Sign up for beta access
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}