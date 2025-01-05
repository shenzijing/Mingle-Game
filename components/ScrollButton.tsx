"use client";

import { useCallback } from 'react';

interface ScrollButtonProps {
    children: React.ReactNode;
    targetId: string;
}

export function ScrollButton({ children, targetId }: ScrollButtonProps) {
    const scrollToElement = useCallback(() => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [targetId]);

    return (
        <div onClick={scrollToElement} className="cursor-pointer">
            {children}
        </div>
    );
}