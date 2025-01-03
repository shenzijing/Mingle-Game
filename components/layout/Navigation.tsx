"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '../theme/ModeToggle';
import { getSiteConfig } from '@/lib/config';
import dynamic from 'next/dynamic';

const config = getSiteConfig();
const LogoIcon = dynamic(() => import('lucide-react').then((mod) => mod[config.site.logo]));

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <LogoIcon className="h-6 w-6" />
              <span className="font-bold text-xl">{config.site.name}</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {config.navigation.map((item) => (
              <Link key={item.path} href={item.path} className="hover:text-primary">
                {item.title}
              </Link>
            ))}
            <ModeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {config.navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block px-3 py-2 hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
            <div className="px-3 py-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}