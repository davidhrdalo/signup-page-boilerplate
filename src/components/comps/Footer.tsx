import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-col items-center justify-center space-y-8">
          {/* Main Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link 
              href="/" 
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/faq" 
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              FAQ
            </Link>
            <Link 
              href="/privacy" 
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
            >
              Terms
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} Your Company. All rights reserved.
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
}