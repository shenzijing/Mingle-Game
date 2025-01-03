"use client";

interface StatProps {
    label: string;
    value: string;
}

export function StatCard({ label, value }: StatProps) {
    return (
        <div className="bg-muted p-4 rounded-lg text-center">
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
        </div>
    );
}