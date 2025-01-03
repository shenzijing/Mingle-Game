import Link from 'next/link';
import { getSiteConfig } from '@/lib/config';

const config = getSiteConfig();

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {config.footer.columns
            .filter(column => !column.social)
            .map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4">{column.title}</h3>
                {column.content && (
                  <p className="text-muted-foreground">{column.content}</p>
                )}
                {column.links && column.links.filter(link => link.title !== 'Contact Us').map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.path} className="hover:text-primary">
                      {link.title}
                    </Link>
                  </li>
                ))}
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