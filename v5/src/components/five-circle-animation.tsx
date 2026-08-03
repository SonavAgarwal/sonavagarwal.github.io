"use client";

import { useMemo } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";

type FiveCircleAnimationProps = {
    progress: MotionValue<number>;
    sizeMultiplier?: number;
};

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

const BASE_CIRCLE_SIZE = 64;
const BASE_CIRCLE_GAP = 48;
const circleIndexes = [0, 1, 2, 3, 4];

function getSemicircleKeyframes(circleSize: number): SemicircleKeyframes {
    return {
        0: {
            left: [{ x: 0, y: 0, rotate: 0, scale: 1 }],
            right: [
                { x: 0, y: 0, rotate: 0, scale: 1 },
                { x: 0, y: circleSize / 2, rotate: 0, scale: 1 },
            ],
        },
        1: {
            left: [{ x: 0, y: 0, rotate: 0, scale: 1 }],
            right: [{ x: 0, y: 0, rotate: 0, scale: 1 }],
        },
        2: {
            left: [
                { x: 0, y: 0, rotate: 45, scale: 1 },
                {
                    x: -circleSize * 0.3,
                    y: circleSize * 0.3,
                    rotate: 45,
                    scale: 1,
                },
            ],
            right: [
                { x: 0, y: 0, rotate: 45, scale: 1 },
                { x: 0, y: 0, rotate: 45, scale: 1 },
            ],
        },
        3: {
            left: [
                { x: 0, y: 0, rotate: 0, scale: 1 },
                { x: -circleSize * 0.2, y: 0, rotate: 25, scale: 1 },
            ],
            right: [
                { x: 0, y: 0, rotate: 0, scale: 1 },
                { x: circleSize * 0.2, y: 0, rotate: -25, scale: 1 },
            ],
        },
        4: {
            left: [
                { x: 0, y: 0, rotate: 0, scale: 1 },
                { x: -circleSize * 0.2, y: 0, rotate: -25, scale: 1 },
            ],
            right: [
                { x: 0, y: 0, rotate: 0, scale: 1 },
                { x: circleSize * 0.2, y: 0, rotate: 25, scale: 1 },
            ],
        },
    };
}

function getProgressInputRange(keyframeCount: number) {
    if (keyframeCount <= 1) {
        return [0, 1];
    }

    return Array.from(
        { length: keyframeCount },
        (_, index) => index / (keyframeCount - 1),
    );
}

function getTweenValues(
    positions: KeyframePosition[],
    property: keyof KeyframePosition,
) {
    if (positions.length === 1) {
        return [positions[0][property], positions[0][property]];
    }

    return positions.map((position) => position[property]);
}

function Semicircle({
    side,
    positions,
    progress,
    circleSize,
}: {
    side: SemicircleSide;
    positions: KeyframePosition[];
    progress: MotionValue<number>;
    circleSize: number;
}) {
    const isLeft = side === "left";
    const inputRange = useMemo(
        () => getProgressInputRange(positions.length),
        [positions.length],
    );
    const x = useTransform(progress, inputRange, getTweenValues(positions, "x"));
    const y = useTransform(progress, inputRange, getTweenValues(positions, "y"));
    const rotate = useTransform(
        progress,
        inputRange,
        getTweenValues(positions, "rotate"),
    );
    const scale = useTransform(
        progress,
        inputRange,
        getTweenValues(positions, "scale"),
    );

    return (
        <motion.svg
            aria-hidden="true"
            className={`absolute top-0 ${isLeft ? "left-0 origin-right" : "right-0 origin-left"
                }`}
            style={{
                x,
                y,
                rotate,
                scale,
                width: circleSize / 2,
                height: circleSize,
            }}
            viewBox="0 0 128 256"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
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
    progress,
    circleSize,
    keyframes,
}: {
    circleIndex: number;
    progress: MotionValue<number>;
    circleSize: number;
    keyframes: SemicircleKeyframes;
}) {
    const circleKeyframes = keyframes[circleIndex];

    return (
        <div
            className="relative shrink-0"
            style={{ width: circleSize, height: circleSize }}
            aria-hidden="true"
        >
            <Semicircle
                side="left"
                positions={circleKeyframes.left}
                progress={progress}
                circleSize={circleSize}
            />
            <Semicircle
                side="right"
                positions={circleKeyframes.right}
                progress={progress}
                circleSize={circleSize}
            />
        </div>
    );
}

export function FiveCircleAnimation({
    progress,
    sizeMultiplier = 1,
}: FiveCircleAnimationProps) {
    const circleSize = BASE_CIRCLE_SIZE * sizeMultiplier;
    const circleGap = BASE_CIRCLE_GAP * sizeMultiplier;
    const keyframes = useMemo(
        () => getSemicircleKeyframes(circleSize),
        [circleSize],
    );

    return (
        <div className="flex" style={{ gap: circleGap }}>
            {circleIndexes.map((circleIndex) => (
                <SplitCircle
                    key={circleIndex}
                    circleIndex={circleIndex}
                    progress={progress}
                    circleSize={circleSize}
                    keyframes={keyframes}
                />
            ))}
        </div>
    );
}
