"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { YouTubeEmbed } from "./YouTubeEmbed";

export function MingleSong() {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Mingle Song</h2>
            <Card>
                <CardHeader>
                    <CardTitle>"Round and Round" (둥글게 둥글게)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <YouTubeEmbed videoId="SbAKYgfYET8?rel=0&playlist=SbAKYgfYET8&loop=0&end=64" />

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">About the Song</h3>
                            <p className="text-muted-foreground">
                                "Round and Round" (둥글게 둥글게) is a traditional Korean nursery rhyme composed by Lee Soo-in.
                                The song plays a crucial role in the Mingle game, creating a stark contrast between its cheerful melody
                                and the game's high stakes.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Cultural Impact</h3>
                            <p className="text-muted-foreground">
                                The song's use in Squid Game Season 2 highlights the show's masterful juxtaposition of childhood
                                innocence with survival gameplay. Its cheerful nature against the backdrop of the intense
                                Mingle game emphasizes the show's commentary on human nature under extreme pressure.
                            </p>
                        </div>

                        <div className="bg-muted p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Fun Fact</h3>
                            <p className="text-sm text-muted-foreground">
                                The song has gained significant popularity on social media platforms like TikTok, where users create
                                dances and content inspired by its catchy melody, further cementing its place in popular culture.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}