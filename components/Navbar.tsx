'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* Desktop navbar */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 px-6 py-3 rounded-full shadow-lg flex items-center justify-between">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href ? 'text-accent' : 'text-primary hover:text-accent'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile navbar */}
      <nav className="md:hidden fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%]">
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 px-5 py-3 rounded-full shadow-lg flex items-center justify-between">
          <span className="text-sm font-semibold text-primary tracking-wide">Menu</span>
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className="relative w-7 h-5 flex flex-col justify-between items-center focus:outline-none"
          >
            <span
              className={`block w-5 h-[2px] bg-primary rounded-full transition-all duration-300 ease-in-out origin-center ${
                isOpen ? 'translate-y-[9px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-primary rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-primary rounded-full transition-all duration-300 ease-in-out origin-center ${
                isOpen ? '-translate-y-[9px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" />

        {/* Menu content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-semibold transition-all duration-500 ease-out ${
                pathname === link.href
                  ? 'text-accent'
                  : 'text-primary hover:text-accent'
              } ${
                isOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-6 opacity-0'
              }`}
              style={{
                transitionDelay: isOpen ? `${150 + index * 80}ms` : '0ms',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
