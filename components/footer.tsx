'use client';
import { FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#0b1320] text-gray-200 py-8 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        
        {/* Left section - Policy links */}
        <div className="flex items-center justify-center md:justify-start space-x-6 w-full md:w-1/4">
          <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm text-gray-400 hover:text-white transition">
            Terms
          </a>
        </div>

        {/* Centre section - Copyright */}
        <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} McCaigs AI. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            McCaigs® is a registered trademark of the McCaigs Group Ltd.
          </p>
          <p className="text-xs text-gray-400 mt-1">Edinburgh, Scotland</p>
        </div>

        {/* Right section - Social icons */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-1/4 space-x-5">
          <a href="https://twitter.com/" aria-label="X (Twitter)" className="hover:text-white transition">
            <FaXTwitter size={18} />
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" className="hover:text-white transition">
            <FaLinkedinIn size={18} />
          </a>
          <a href="https://instagram.com/" aria-label="Instagram" className="hover:text-white transition">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
