'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
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
  );
}
