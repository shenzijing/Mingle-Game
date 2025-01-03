import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { getSiteConfig } from '@/lib/config';
import { GoogleTagManager } from '@/components/GoogleTagManager';
import { GoogleTagManagerNoScript } from '@/components/GoogleTagManagerNoScript';

const inter = Inter({ subsets: ['latin'] });
const config = getSiteConfig();

// Replace with your GTM ID
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX';

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
  keywords: config.site.keywords,
  icons: {
    icon: '/mingle-game.png', // 或其他扩展名
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <GoogleTagManager gtmId={GTM_ID} />
        <GoogleTagManagerNoScript gtmId={GTM_ID} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-grow max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}