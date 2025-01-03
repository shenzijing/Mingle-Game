import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Timer, Brain, Target, Shield } from "lucide-react";
import { getSiteConfig } from '@/lib/config';

const features = [
  {
    icon: Users,
    title: "Dynamic Group Formation",
    description: "Form strategic alliances and make split-second decisions about who to trust"
  },
  {
    icon: Timer,
    title: "Time Pressure",
    description: "30 seconds to form groups and reach safety - every moment counts"
  },
  {
    icon: Brain,
    title: "Psychological Challenge",
    description: "Test your mental fortitude and decision-making under extreme pressure"
  },
  {
    icon: Target,
    title: "Strategic Gameplay",
    description: "Position yourself strategically and plan your moves carefully"
  },
  {
    icon: Shield,
    title: "Survival Mechanics",
    description: "Master the art of survival in this intense challenge"
  }
];

export default function GameFeatures() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Card key={index} className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <Icon className="h-8 w-8 mb-2 text-primary" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}