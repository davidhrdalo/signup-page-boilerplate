import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-col items-center justify-center space-y-8">
          {/* Main Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link href="/faq" className="text-sm text-gray-600 hover:text-gray-900">
              FAQ
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Your Company. All rights reserved.
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
}