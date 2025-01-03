"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GameSectionProps {
    title: string;
    children: React.ReactNode;
}

export function GameSection({ title, children }: GameSectionProps) {
    return (
        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
}