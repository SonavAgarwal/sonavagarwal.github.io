import React, { useEffect, useReducer, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import useMeasure from "react-use-measure";

const SPEED = 0.05;
const MAX_DELAY = 0.5;

interface Props {
	x: number;
	y: number;
	width: number;
	height: number;
	base?: string;
	color?: string;
	on?: boolean;
	onClick?: () => void;
	content: React.ReactNode;
	flipTrigger?: any;
}

const FlipFastTile = ({
	x,
	y,
	width,
	height,
	base = "white",
	color = "black",
	// on,
	onClick,
	content,
	flipTrigger = null,
}: Props) => {
	const controls = useAnimationControls();
	// const [status, setStatus] = useState(on);
	const [tileRef, { top, left }] = useMeasure();

	// const [oldContent, setOldContent] = useState(content);
	// const [currentContent, setCurrentContent] = useState(content);
	const flipped = useRef(false);
	const currentContent = useRef(content);

	const forceUpdate = useReducer((c) => c + 1, 0)[1];

	const rotation = useRef(0);

	useEffect(() => {
		async function flip(cancelled: { current: boolean }) {
			// if (on === flipped.current) return;
			// status.current = on;

			if (content === currentContent.current) return;

			// const delay = RANDOM_DELAY[(x * 13 + y * 7) % RANDOM_DELAY.length];
			const delay = Math.random() * MAX_DELAY;

			// console.log("Delay", delay);

			await new Promise((resolve) => setTimeout(resolve, delay * 1000));
			// console.log("=======A");

			await controls.start(
				{ rotateX: rotation.current + -90 },
				{ duration: SPEED }
			);

			if (cancelled.current) {
				// console.log("Cancelled");
				return;
			}

			// console.log("B");

			// console.log("old flipped", flipped.current);
			flipped.current = rotation.current % 360 === 0;
			// console.log("new flipped", flipped.current);
			currentContent.current = content;

			forceUpdate();

			if (cancelled.current) {
				// console.log("Cancelled");
				return;
			}

			// console.log("C");

			await controls.start(
				{ rotateX: rotation.current + -180 },
				{
					type: "spring",
					// bounce: 0.1,
				}
			);

			rotation.current += -180;

			if (rotation.current % 360 === 0) {
				await controls.start(
					{
						rotateX: 0,
					},
					{
						duration: 0,
					}
				);
				rotation.current = 0;
			}

			if (cancelled.current) {
				// console.log("Cancelled");
				return;
			}

			// console.log("D  ");
		}

		const cancelled = { current: false };
		flip(cancelled);
		return () => {
			cancelled.current = true;
		};
	}, [color, base, x, y, content, rotation, flipped, flipTrigger]);

	// console.log("flipped: ", flipped);

	return (
		<div
			ref={tileRef}
			onClick={() => {
				console.log("onclick called");
				onClick?.();
			}}
			className=""
			style={{
				width: width,
				height: height,
				perspective: Math.floor(width * 1.5),
			}}
		>
			<motion.div
				className="overflow-hidden"
				style={{
					rotateX: 0,
					// backgroundColor: base,
					width: width,
					height: height,
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
				{/* {flipped.current && <div>MEOW</div>} */}

				<motion.div
					style={{
						width: width,
						height: height,
						overflow: "hidden",
						rotateX: flipped.current ? 180 : 0,
						// transform: `rotateX(${flipped.current ? 180 : 0})`,
					}}
				>
					<div
						style={{
							transform: `translateX(-${left}px) translateY(-${top}px)`,
						}}
					>
						{currentContent.current}
					</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default FlipFastTile;
