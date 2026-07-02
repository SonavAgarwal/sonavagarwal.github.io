"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type SemicircleSide = "left" | "right";
type KeyframePosition = {
    x: number;
    y: number;
    rotate: number;
    scale: number;
};
type SemicircleKeyframes = Record<
    number,
    Record<SemicircleSide, KeyframePosition[]>
>;

const CIRCLE_SIZE = 64;

const circleIndexes = [0, 1, 2, 3, 4];

const semicircleKeyframes: SemicircleKeyframes = {
    0: {
        left: [
            { x: 0, y: 0, rotate: 0, scale: 1 },
            // { x: -64, y: -64, rotate: -45, scale: 1 },
            // { x: 0, y: 0, rotate: 0, scale: 1 },
        ],
        right: [
            { x: 0, y: 0, rotate: 0, scale: 1 },
            { x: 0, y: CIRCLE_SIZE / 2, rotate: 0, scale: 1 },
        ],
    },
    1: {
        left: [
            { x: 0, y: 0, rotate: 0, scale: 1 },
        ],
        right: [
            { x: 0, y: 0, rotate: 0, scale: 1 },
        ],
    },
    2: {
        left: [
            { x: 0, y: 0, rotate: 45, scale: 1 },
            { x: -CIRCLE_SIZE * 0.3, y: CIRCLE_SIZE * 0.3, rotate: 45, scale: 1 },
        ],
        right: [
            { x: 0, y: 0, rotate: 45, scale: 1 },
            { x: 0, y: 0, rotate: 45, scale: 1 },
        ],
    },
    3: {
        left: [
            { x: 0, y: 0, rotate: 0, scale: 1 },
            { x: -CIRCLE_SIZE * 0.2, y: 0, rotate: 25, scale: 1 },
        ],
        right: [
            { x: 0, y: 0, rotate: 0, scale: 1 },
            { x: CIRCLE_SIZE * 0.2, y: 0, rotate: -25, scale: 1 },
        ],
    },
    4: {
        left: [
            { x: 0, y: 0, rotate: 0, scale: 1 },
            { x: -CIRCLE_SIZE * 0.2, y: 0, rotate: -25, scale: 1 },
        ],
        right: [
            { x: 0, y: 0, rotate: 0, scale: 1 },
            { x: CIRCLE_SIZE * 0.2, y: 0, rotate: 25, scale: 1 },
        ],
    },
};

function Semicircle({
    circleIndex,
    side,
    position,
}: {
    circleIndex: number;
    side: SemicircleSide;
    position: KeyframePosition;
}) {
    const isLeft = side === "left";

    return (
        <motion.svg
            aria-hidden="true"
            className={`absolute top-0 h-16 w-8 ${isLeft ? "left-0 origin-right" : "right-0 origin-left"
                }`}
            custom={{ circleIndex, side }}
            animate={position}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewBox="0 0 128 256"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                d={
                    isLeft
                        ? "M128 0 A128 128 0 0 0 128 256 L128 0 Z"
                        : "M0 0 A128 128 0 0 1 0 256 L0 0 Z"
                }
                fill="black"
            />
        </motion.svg>
    );
}

function SplitCircle({
    circleIndex,
    keyframeIndex,
}: {
    circleIndex: number;
    keyframeIndex: number;
}) {
    const leftPositions = semicircleKeyframes[circleIndex].left;
    const rightPositions = semicircleKeyframes[circleIndex].right;

    return (
        <div className="relative size-16 shrink-0" aria-hidden="true">
            <Semicircle
                circleIndex={circleIndex}
                side="left"
                position={leftPositions[keyframeIndex % leftPositions.length]}
            />
            <Semicircle
                circleIndex={circleIndex}
                side="right"
                position={rightPositions[keyframeIndex % rightPositions.length]}
            />
        </div>
    );
}

export default function Home() {
    const [keyframeIndex, setKeyframeIndex] = useState(0);
    const keyframeCount = useMemo(
        () =>
            Math.max(
                ...circleIndexes.flatMap((circleIndex) => [
                    semicircleKeyframes[circleIndex].left.length,
                    semicircleKeyframes[circleIndex].right.length,
                ]),
            ),
        [],
    );

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.code !== "Space" || event.repeat) {
                return;
            }

            event.preventDefault();
            setKeyframeIndex((currentIndex) => (currentIndex + 1) % keyframeCount);
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [keyframeCount]);

    return (
        <main className="min-h-screen overflow-auto bg-white">
            <div className="flex min-h-screen min-w-max items-center justify-center p-16">
                <div className="flex gap-16">
                    {circleIndexes.map((circleIndex) => (
                        <SplitCircle
                            key={circleIndex}
                            circleIndex={circleIndex}
                            keyframeIndex={keyframeIndex}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
