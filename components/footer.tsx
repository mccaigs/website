'use client';
import { FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#0b1320] text-gray-200 py-8 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        
        {/* Left section - Policy links */}
        <div className="order-3 w-full md:order-1 md:w-1/4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-2 md:justify-start md:text-left md:text-sm">
            <a href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/cookies-policy" className="hover:text-white transition">
              Cookies
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms
            </a>
            <a href="/trademark-usage" className="hover:text-white transition">
              Trademarks
            </a>
          </div>
        </div>

        {/* Centre section - Copyright */}
        <div className="order-1 flex flex-col items-center justify-center text-center w-full md:order-2 md:w-1/2">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} McCaigs AI. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            McCaigs® is a registered trademark of the McCaigs Group Ltd.
          </p>
          <p className="text-xs text-gray-400 mt-1">Edinburgh, Scotland</p>
        </div>

        {/* Right section - Social icons */}
        <div className="order-2 flex items-center justify-center space-x-5 w-full md:order-3 md:justify-end md:w-1/4">
          <a href="https://x.com/mccaigs" aria-label="X (Twitter)" className="hover:text-white transition">
            <FaXTwitter size={18} />
          </a>
          <a href="https://www.linkedin.com/company/mccaigs/" aria-label="LinkedIn" className="hover:text-white transition">
            <FaLinkedinIn size={18} />
          </a>
          <a href="https://www.instagram.com/we.are.mccaigs/" aria-label="Instagram" className="hover:text-white transition">
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
