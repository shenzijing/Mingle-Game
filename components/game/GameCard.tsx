"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { YouTubeEmbed } from "./YouTubeEmbed";
import type { SiteConfig } from '@/types/site';

export default function GameCard({ config }: { config: SiteConfig }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>What are the rules for Mingle Game?</CardTitle>
        <CardDescription>Mingle, the latest addition to Squid Game Season 2, pushes the boundaries of human psychology and social dynamics. In this nerve-wracking challenge, players must form groups of specific sizes within mere seconds, turning friends into potential obstacles and strangers into life-saving allies.</CardDescription>
      </CardHeader>
      <CardContent>
        <YouTubeEmbed videoId="cacTG7VQOV8?rel=0&playlist=cacTG7VQOV8&loop=0&end=134" />
      </CardContent>
    </Card>
  );
}