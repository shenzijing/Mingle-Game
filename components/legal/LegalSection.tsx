"use client";

interface LegalSectionProps {
    title: string;
    children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            {children}
        </section>
    );
}