'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createClient } from '@/supabase/client';
import { Loader2, Check } from 'lucide-react';

interface BetaSignup {
  email: string;
  product: string;
}

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    const signup: BetaSignup = {
      email,
      product: 'my-product' // Change this for different products
    };

    try {
      const { error: supabaseError } = await supabase
        .from('beta_signups')
        .insert([signup]);

      if (supabaseError) throw supabaseError;
      
      setStatus('success');
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setError(err.code === '23505' ? 
        'You\'re already signed up!' : 
        'Something went wrong. Please try again.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 dark:bg-green-900/50 p-2">
            <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-green-800 dark:text-green-300">
          You're on the list!
        </h3>
        <p className="mt-2 text-sm text-green-700 dark:text-green-400">
          We'll be in touch soon with next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email address
          </label>
          <div className="flex gap-2">
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              className={`
                dark:bg-gray-800 
                dark:border-gray-700 
                dark:placeholder:text-gray-500 
                ${error ? 'border-red-300 dark:border-red-700' : ''}
              `}
            />
            <Button
              type="submit"
              disabled={status === 'loading'}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 
                dark:from-violet-500 dark:to-indigo-500 dark:hover:from-violet-600 dark:hover:to-indigo-600"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Joining...
                </>
              ) : (
                'Join Beta'
              )}
            </Button>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
        </div>
      </form>
    </div>
  );
}