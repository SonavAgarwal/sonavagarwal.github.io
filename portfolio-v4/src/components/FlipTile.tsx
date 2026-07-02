import React, { useEffect, useReducer, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import useMeasure from "react-use-measure";

const RANDOM_DELAY = new Array(100).fill(0).map(() => Math.random() * 0.5);
const SPEED = 0.1;
const MAX_DELAY = 1;

interface Props {
	x: number;
	y: number;
	width: number;
	base?: string;
	color?: string;
	on?: boolean;
	onClick: () => void;
	content: React.ReactNode;
}

const FlipTile = ({
	x,
	y,
	width,
	base = "white",
	color = "black",
	// on,
	onClick,
	content,
}: Props) => {
	const controls = useAnimationControls();
	// const status = useRef(on);
	// const [status, setStatus] = useState(on);
	const [tileRef, { top, left }] = useMeasure();

	// const [oldContent, setOldContent] = useState(content);
	// const [currentContent, setCurrentContent] = useState(content);
	const currentContent = useRef(content);

	const forceUpdate = useReducer((c) => c + 1, 0)[1];

	useEffect(() => {
		async function flip(cancelled: { current: boolean }) {
			// if (on === status.current) return;
			// status.current = on;

			if (content === currentContent.current) return;

			// const delay = RANDOM_DELAY[(x * 13 + y * 7) % RANDOM_DELAY.length];
			const delay = Math.random() * MAX_DELAY;

			// console.log("Delay", delay);

			await new Promise((resolve) => setTimeout(resolve, delay * 300));
			console.log("=======A");

			await controls.start(
				{ rotateX: 0 },
				{
					// duration: SPEED,
					type: "spring",

					// bounce: 0.5,
					// damping: 10,
					// bounce: 0,
					// stiffness: 100,
				}
			);

			await controls.start({ rotateX: -90 }, { duration: SPEED });

			if (cancelled.current) {
				console.log("Cancelled");
				return;
			}

			console.log("B");

			// setOldContent(currentContent);
			// setCurrentContent(content);
			currentContent.current = content;
			forceUpdate();

			await controls.start(
				{
					// backgroundColor: status.current ? color : base,
					rotateX: 90,
				},
				{
					duration: 0,
					type: "spring",
					bounce: 0,
					// bounce: 0.5,
				}
			);

			if (cancelled.current) {
				console.log("Cancelled");
				return;
			}

			console.log("C");

			await controls.start(
				{ rotateX: 0 },
				{
					// duration: SPEED,
					type: "spring",

					// bounce: 0.5,
					// damping: 10,
					// bounce: 0,
					// stiffness: 100,
				}
			);

			if (cancelled.current) {
				console.log("Cancelled");
				return;
			}

			console.log("D  ");

			// setTimeout(() => {
			// 	controls.set({ backgroundColor: status.current ? color : base });
			// }, SPEED * 5);

			// await controls.start(
			// 	{
			// 		rotateX: 180,
			// 	},
			// 	{
			// 		duration: SPEED * 10,
			// 		type: "spring",
			// 	}
			// );

			// await controls.start(
			// 	{
			// 		rotateX: 0,
			// 	},
			// 	{
			// 		duration: 0,
			// 		type: "spring",
			// 	}
			// );
		}

		const cancelled = { current: false };
		flip(cancelled);
		return () => {
			cancelled.current = true;
		};
	}, [color, base, x, y, content]);

	return (
		<div
			ref={tileRef}
			onClick={onClick}
			className=""
			style={{
				width: width,
				height: width,
				perspective: Math.floor(width * 1.5),
			}}
		>
			<motion.div
				className="overflow-hidden"
				style={{
					rotateX: 0,
					backgroundColor: base,
					width: width,
					height: width,
				}}
				animate={controls}
			>
				{/* <div
					style={{
						width: width,
						height: width,
                        backgroundColor: 
					}}
				></div> */}

				<div
					style={{
						transform: `translateX(-${left}px) translateY(-${top}px)`,
					}}
				>
					{currentContent.current}
				</div>
			</motion.div>
		</div>
	);
};

export default FlipTile;
