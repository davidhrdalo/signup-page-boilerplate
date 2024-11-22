'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createClient } from '@/supabase/client';
import { Loader2, Check } from 'lucide-react';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('beta_signups')
        .insert([{ 
          email, 
          product: 'my-product' // Change this for different products
        }]);

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
      <div className="rounded-lg bg-green-50 p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 p-2">
            <Check className="h-6 w-6 text-green-600" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-green-800">You're on the list!</h3>
        <p className="mt-2 text-sm text-green-700">
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
            className="block text-sm font-medium text-gray-700 mb-1"
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
              className={error ? 'border-red-300' : ''}
            />
            <Button 
              type="submit" 
              disabled={status === 'loading'}
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
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </div>
      </form>
    </div>
  );
}