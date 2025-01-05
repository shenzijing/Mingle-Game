import { GameSection } from "@/components/how-to-play/GameSection";
import { StatCard } from "@/components/how-to-play/StatCard";
import { YouTubeEmbed } from "@/components/game/YouTubeEmbed";
import { Card } from "@/components/ui/card";

export default function HowToPlay() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">How to Play Mingle</h1>

                <Card className="mb-8">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-4">What are the rules of mingle?</h2>
                        <YouTubeEmbed videoId="cacTG7VQOV8?rel=0&playlist=cacTG7VQOV8&loop=0&end=134" />
                        <p className="mt-4 text-muted-foreground">
                            Watch this video to understand the intense gameplay and strategic elements of Mingle Game.
                        </p>
                    </div>
                </Card>

                <GameSection title="Understanding the Basics">
                    <p className="text-lg mb-4">
                        Mingle Game is a high-stakes challenge where players must quickly form groups
                        and find safety under extreme time pressure. Success requires quick thinking,
                        strategic positioning, and decisive action.
                    </p>
                </GameSection>

                <GameSection title="Game Mechanics">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Initial Setup</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Players gather on a central spinning platform</li>
                                <li>The platform rotates to randomize positions</li>
                                <li>A number is announced when the platform stops</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Core Gameplay</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium mb-2">1. Group Formation (30 seconds)</h4>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Form groups matching the announced number exactly</li>
                                        <li>No larger or smaller groups allowed</li>
                                        <li>Everyone must find a group</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">2. Room Entry</h4>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>Groups must reach a designated room</li>
                                        <li>All members must enter together</li>
                                        <li>Door must be closed to secure survival</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </GameSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <GameSection title="Key Statistics">
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard label="Time Limit" value="30s" />
                            <StatCard label="Survival Rate" value="39%" />
                            <StatCard label="Group Sizes" value="Vary" />
                            <StatCard label="Total Rooms" value="Multiple" />
                        </div>
                    </GameSection>

                    <GameSection title="Success Factors">
                        <ul className="space-y-2">
                            <li>✓ Quick decision-making abilities</li>
                            <li>✓ Strategic positioning</li>
                            <li>✓ Effective communication</li>
                            <li>✓ Adaptability under pressure</li>
                        </ul>
                    </GameSection>
                </div>

                <GameSection title="Safety Guidelines">
                    <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Important Reminders:</h3>
                        <ul className="space-y-2">
                            <li>• Stay calm under pressure</li>
                            <li>• Follow instructions precisely</li>
                            <li>• Maintain situational awareness</li>
                            <li>• Act decisively when needed</li>
                        </ul>
                    </div>
                </GameSection>

                <div className="text-center text-muted-foreground italic">
                    Remember: Mingle Game tests both physical and psychological resilience.
                    Success requires a balance of strategic thinking and quick action.
                </div>
            </div>
        </div>
    );
}