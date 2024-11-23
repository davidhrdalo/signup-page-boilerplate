import Image from "next/image";
import { Button } from "@/components/ui/button";
import { createClient } from '@/supabase/server';
import { cookies } from 'next/headers';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import SignupDialog from '@/components/comps/SignupDialog';

export default async function Home() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-white dark:from-violet-950 dark:via-gray-950 dark:to-gray-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-violet-100 dark:bg-violet-900/50 rounded-full text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Beta Access Now Open
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
                  Amazing
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Join thousands of makers and creators who are building the future with our powerful platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <SignupDialog>
                  <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 dark:from-violet-500 dark:to-indigo-500 dark:hover:from-violet-600 dark:hover:to-indigo-600">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SignupDialog>
                <Button variant="outline" size="lg" className="dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                  Live Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Trusted by innovative teams</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  {/* Replace with actual company logos */}
                  <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                  <div className="h-8 w-24 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
                </div>
              </div>
            </div>

            {/* Right side - Feature preview */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-indigo-100 dark:from-violet-900/50 dark:to-indigo-900/50 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-2xl shadow-xl">
                  {/* Preview content */}
                  <div className="p-6">
                    <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded mb-4" />
                    <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded mb-2" />
                    <div className="h-3 w-4/5 bg-gray-100 dark:bg-gray-800 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-gray-950 py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
                title: "Lightning Fast",
                description: "Build and deploy in minutes, not hours"
              },
              {
                icon: <Shield className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
                title: "Enterprise Ready",
                description: "Security and scaling built right in"
              },
              {
                icon: <Sparkles className="h-6 w-6 text-violet-600 dark:text-violet-400" />,
                title: "Powerful Features",
                description: "Everything you need to succeed"
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 space-y-4">
                  <div className="inline-block p-3 bg-violet-50 dark:bg-violet-900/50 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}