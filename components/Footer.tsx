import Link from 'next/link';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Mingle Game</h3>
            <p className="text-muted-foreground">
              Experience the intense psychological challenge from Squid Game Season 2. Test your survival instincts and strategic thinking in this thrilling game of trust and betrayal.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/how-to-play" className="hover:text-primary">How to Play</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Mingle Game. All rights reserved.</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@minglegame.net" className="hover:text-primary">
                info@minglegame.net
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}