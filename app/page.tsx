import GameCard from '@/components/game/GameCard';
import GameFeatures from '@/components/game/GameFeatures';
import GameRules from '@/components/game/GameRules';
import { MingleSong } from '@/components/game/MingleSong';
import { getSiteConfig } from '@/lib/config';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const config = getSiteConfig();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{config.game.name}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {config.site.description}
          </p>
          <Link href="/how-to-play">
            <Button size="lg" variant="default">Learn Rules</Button>
          </Link>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Experience the Challenge</h2>
          <GameCard config={config} />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Game Features</h2>
          <GameFeatures />
        </div>

        <MingleSong />

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Play Mingle</h2>
          <GameRules />
        </div>

        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Test Your Survival Instincts?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of players in this intense psychological challenge.
          </p>
          <Button size="lg" asChild>
            <Link href="/how-to-play">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}