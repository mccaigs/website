import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { X, GraduationCap } from 'lucide-react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Brands', href: '/brands' },
  { name: 'Models', href: '/models' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-700 rounded-lg">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-700">McCaigs AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-700 hover:bg-blue-50 ${
                  isActive(item.href)
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-4 bg-blue-700 hover:bg-blue-800">
              <Link to="/contact">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 border-0 shadow-none">
                <div className="flex flex-col justify-center space-y-1">
                  <div className="w-5 h-0.5 bg-gray-700 rounded-full"></div>
                  <div className="w-5 h-0.5 bg-gray-700 rounded-full"></div>
                  <div className="w-5 h-0.5 bg-gray-700 rounded-full"></div>
                </div>
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white p-6">
              {/* Close button - properly aligned */}
              <div
                className="absolute top-3 right-3 w-8 h-8 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors z-10"
                className="absolute top-3 right-3 w-10 h-10 rounded-md flex items-center justify-center cursor-pointer transition-colors z-10"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #d1d5db',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-gray-700" />
              </div>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              
              {/* Logo section - adjusted padding */}
              <div className="mb-6 pr-10">
                <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-700 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-blue-700">McCaigs AI</span>
                </Link>
              </div>
              
              {/* Navigation menu */}
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-blue-700 hover:bg-blue-50 ${
                      isActive(item.href)
                        ? 'text-blue-700 bg-blue-50 font-semibold'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 pt-2">
                  <Button asChild className="w-full bg-blue-700 hover:bg-blue-800">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}