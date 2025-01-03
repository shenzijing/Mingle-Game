"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { YouTubeEmbed } from "./YouTubeEmbed";
import type { SiteConfig } from '@/types/site';

export default function GameCard({ config }: { config: SiteConfig }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Play {config.game.name}</CardTitle>
        <CardDescription>Experience the intense psychological challenge from Squid Game</CardDescription>
      </CardHeader>
      <CardContent>
        <YouTubeEmbed videoId="cacTG7VQOV8?rel=0&playlist=cacTG7VQOV8&loop=0&end=134" />
      </CardContent>
    </Card>
  );
}