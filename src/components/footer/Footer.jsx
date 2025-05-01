"use client"
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Top section */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-8 flex justify-between items-center border-b border-gray-800">
          <div className="flex items-center">
            <Image src="/icons/logo.svg" alt="Lancepoint Logo" width={24} height={24} />
            <span className="ml-2 font-medium">Lancepoint</span>
          </div>
          
          <button 
            className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-200 transition duration-300"
            aria-label="Scroll to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
        
        {/* Bottom section */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-400">
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <Link href="/jobs" className="hover:text-white transition duration-300">Jobs</Link>
              <Link href="/blog" className="hover:text-white transition duration-300">Blog</Link>
              <Link href="/help" className="hover:text-white transition duration-300">Help</Link>
            </div>
            
            <div className="sm:ml-auto flex space-x-4">
              <Link href="/about-us" className="hover:text-white transition duration-300">About us</Link>
              <Link href="/for-customers" className="hover:text-white transition duration-300">For customers</Link>
              <Link href="/contacts" className="hover:text-white transition duration-300">Contacts</Link>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-gray-500">
            © 2025 — Copyright
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;