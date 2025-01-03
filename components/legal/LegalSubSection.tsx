"use client";

interface LegalSubSectionProps {
    title: string;
    children: React.ReactNode;
}

export function LegalSubSection({ title, children }: LegalSubSectionProps) {
    return (
        <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            {children}
        </div>
    );
}