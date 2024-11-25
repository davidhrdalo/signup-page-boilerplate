'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Check } from 'lucide-react';
import { createClient } from '@/supabase/client';
import { PostgrestError } from '@supabase/supabase-js';

interface ContactFormData {
  product: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFormData: ContactFormData = {
  product: '',
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const supabase = createClient();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([{
          product: 'my-product', // Change this for different products
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }]);

      if (supabaseError) {
        // Handle rate limiting error
        if (supabaseError.message.includes('rate-limited')) {
          throw new Error('Too many submissions. Please try again later.');
        }
        throw supabaseError;
      }

      setStatus('success');
      setFormData(initialFormData);
    } catch (err: unknown) {
      setStatus('error');
      // Type guard to handle different types of errors
      if (err instanceof Error || isPostgrestError(err)) {
        setError(err.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  // Type guard for PostgrestError
  function isPostgrestError(error: unknown): error is PostgrestError {
    return (
      typeof error === 'object' &&
      error !== null &&
      'message' in error &&
      typeof (error as PostgrestError).message === 'string'
    );
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="rounded-full bg-green-100 dark:bg-green-900/50 p-2">
            <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-green-800 dark:text-green-300">
          Message sent successfully!
        </h3>
        <p className="mt-2 text-sm text-green-700 dark:text-green-400">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-900/30 rounded-xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800">
      <h2 className="text-xl font-semibold mb-6 dark:text-white">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Name
            </label>
            <Input 
              id="name"
              name="name"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'loading'}
              className="dark:bg-gray-800 dark:border-gray-700 dark:placeholder:text-gray-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <Input 
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'loading'}
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
            name="subject"
            placeholder="How can we help?"
            required
            value={formData.subject}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="dark:bg-gray-800 dark:border-gray-700 dark:placeholder:text-gray-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us more about your inquiry..."
            required
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="min-h-[120px] dark:bg-gray-800 dark:border-gray-700 dark:placeholder:text-gray-500"
          />
        </div>
        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 dark:from-violet-500 dark:to-indigo-500 dark:hover:from-violet-600 dark:hover:to-indigo-600"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </form>
    </div>
  );
}