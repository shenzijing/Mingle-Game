import { getMarkdownContent } from '@/lib/config';

export default function About() {
  const content = getMarkdownContent('about');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}