"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/75 border-b supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Users className="h-6 w-6" />
                <span className="font-bold text-xl">Mingle Game</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Link href="/how-to-play" className="hover:text-primary">How to Play</Link>
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
          <div className="md:hidden bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 hover:text-primary">Home</Link>
              <Link href="/how-to-play" className="block px-3 py-2 hover:text-primary">How to Play</Link>
              <div className="px-3 py-2">
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-16" />
    </>
  );
}