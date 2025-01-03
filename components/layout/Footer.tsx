import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import { getSiteConfig } from '@/lib/config';

const config = getSiteConfig();

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.footer.columns.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              {column.content && (
                <p className="text-muted-foreground">{column.content}</p>
              )}
              {column.links && (
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.path} className="hover:text-primary">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {column.social && (
                <div className="flex space-x-4">
                  <Link href={config.site.social.twitter} className="hover:text-primary">
                    <Twitter className="h-6 w-6" />
                  </Link>
                  <Link href={config.site.social.github} className="hover:text-primary">
                    <Github className="h-6 w-6" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {config.site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}