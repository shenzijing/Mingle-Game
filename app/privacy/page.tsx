import { getMarkdownContent } from '@/lib/config';

export default function Privacy() {
    const content = getMarkdownContent('privacy');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto prose dark:prose-invert">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}