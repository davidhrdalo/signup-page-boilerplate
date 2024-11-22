'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignupForm from '../forms/SignupForm';

export default function SignupDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join the Beta</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <SignupForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}