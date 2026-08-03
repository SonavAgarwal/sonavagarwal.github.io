"use client";


import { FiveCircleAnimation } from "@/components/five-circle-animation";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const ANIMATION_SIZE_MULTIPLIER = 0.5;

export function Navbar() {
    const animationProgress = useMotionValue(0);

    useEffect(() => {
        const controls = animate(animationProgress, 1, {
            delay: 0.5,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        });

        return () => controls.stop();
    }, [animationProgress]);

    return (
        <nav
            aria-label="Primary navigation"
            className="sticky top-0 z-50 flex w-full shrink-0 items-center justify-center overflow-hidden bg-white py-6"
        >
            <FiveCircleAnimation
                progress={animationProgress}
                sizeMultiplier={ANIMATION_SIZE_MULTIPLIER}
            />
        </nav>
    );
}
