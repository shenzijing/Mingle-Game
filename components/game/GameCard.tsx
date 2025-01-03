"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { SiteConfig } from '@/types/site';

export default function GameCard({ config }: { config: SiteConfig }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Play {config.game.name}</CardTitle>
        <CardDescription>Mix different sounds and create your own unique music composition</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src={config.game.iframe}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </CardContent>
    </Card>
  );
}