"use client";

interface YouTubeEmbedProps {
    videoId: string;
}

export function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
    return (
        <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            />
        </div>
    );
}