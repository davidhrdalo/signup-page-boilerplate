import Image from "next/image";
import { Button } from "@/components/ui/button";
import { createClient } from '@/supabase/server';
import { cookies } from 'next/headers';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

export default async function Home() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-white to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-violet-100 rounded-full text-violet-700 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                Beta Access Now Open
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Build Something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                  Amazing
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Join thousands of makers and creators who are building the future with our powerful platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Live Demo
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">Trusted by innovative teams</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                  {/* Replace with actual company logos */}
                  <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>

            {/* Right side - Feature preview */}
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-100 to-indigo-100 rounded-2xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-white rounded-2xl shadow-xl">
                  {/* Preview content */}
                  <div className="p-6">
                    <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
                    <div className="h-3 w-full bg-gray-100 rounded mb-2" />
                    <div className="h-3 w-4/5 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="h-6 w-6 text-violet-600" />,
                title: "Lightning Fast",
                description: "Build and deploy in minutes, not hours"
              },
              {
                icon: <Shield className="h-6 w-6 text-violet-600" />,
                title: "Enterprise Ready",
                description: "Security and scaling built right in"
              },
              {
                icon: <Sparkles className="h-6 w-6 text-violet-600" />,
                title: "Powerful Features",
                description: "Everything you need to succeed"
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 space-y-4">
                  <div className="inline-block p-3 bg-violet-50 rounded-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}