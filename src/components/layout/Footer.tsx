import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">McCaigs AI</span>
            </Link>
            <p className="text-slate-300 mb-4 max-w-md">
              Educational AI Solutions - Buy Once, Use Forever with Free Lifetime Updates
            </p>
            <div className="flex items-center space-x-2 text-slate-400 mb-2">
              <MapPin className="h-4 w-4" />
              <span>Edinburgh, Scotland</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400 mb-2">
              <Phone className="h-4 w-4" />
              <span>+44 131 XXX XXXX</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Mail className="h-4 w-4" />
              <span>hello@mccaigsai.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/models" className="text-slate-300 hover:text-white transition-colors">
                  Our Platforms
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-slate-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Solutions</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-300">AI Tutoring Systems</span>
              </li>
              <li>
                <span className="text-slate-300">Smart LMS Platforms</span>
              </li>
              <li>
                <span className="text-slate-300">Assessment Tools</span>
              </li>
              <li>
                <span className="text-slate-300">Student Analytics</span>
              </li>
              <li>
                <span className="text-slate-300">Bespoke AI Solutions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="https://linkedin.com/company/mccaigs-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com/mccaigsai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/mccaigs-ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hello@mccaigsai.com"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-400 text-sm mb-4 md:mb-0">
            © 2025 McCaigs AI. All rights reserved.
          </div>
          <div className="text-slate-400 text-sm">
            Proudly based in Edinburgh, Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿
          </div>
        </div>
      </div>
    </footer>
  );
}