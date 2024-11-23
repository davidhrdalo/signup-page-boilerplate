import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import SignupDialog from '@/components/comps/SignupDialog';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left - Home Link with Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={24}
            height={24}
            className="mr-2"
          />
        </Link>

        {/* Right - Signup Button */}
        <SignupDialog>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
          >
            Join Beta
          </Button>
        </SignupDialog>
      </div>
    </header>
  );
}