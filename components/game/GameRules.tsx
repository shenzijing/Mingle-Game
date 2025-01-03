export default function GameRules() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-3">Game Setup</h3>
          <p className="text-muted-foreground mb-4">
            All participants begin on a central spinning platform. The game starts when the platform stops rotating and a number is announced.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Core Mechanics</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>When a number is announced, players must form groups of exactly that size</li>
            <li>Groups have 30 seconds to form and reach a designated room</li>
            <li>The door must be closed once your group is inside the room</li>
            <li>Groups that are too large or too small face elimination</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Winning Conditions</h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Form a group with the exact number of players announced</li>
            <li>Successfully enter a room within the time limit</li>
            <li>Close the door before time runs out</li>
          </ul>
        </section>

        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm font-medium">Important Note:</p>
          <p className="text-sm text-muted-foreground">
            This is a high-pressure game that requires quick thinking and decisive action. 
            Stay alert and be prepared to make split-second decisions.
          </p>
        </div>
      </div>
    </div>
  );
}