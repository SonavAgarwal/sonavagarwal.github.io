import classNames from "classnames";
import { useEffect, useId, useReducer, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import FlipTile from "../../components/FlipTile";
import AboutMe from "../content/AboutMe";
import Project1 from "../content/Project1";
import Project2 from "../content/Project2";
import FlipTile2 from "../../components/FlipTile2";
import ClockContent from "../content/Clock";
import FlipFastTile from "../../components/FlipFastTile";

const TILE_GAP = 0;

const IMAGE_OPTIONS = [
	// "/content/images/activities-1.webp",
	// "/content/images/activities-2.webp",
	"/content/images/activities-3.webp",
	// "/content/images/activities-4.webp",
	"/content/images/activities-5.webp",
];

function generateBaseGrid(x: number, y: number, defaultValue = 0) {
	const BASE_GRID: number[][] = [];
	for (let i = 0; i < x; i++) {
		BASE_GRID.push(new Array(y).fill(defaultValue));
	}

	return BASE_GRID;
}

function deepCopy(g: number[][]) {
	let newGrid: number[][] = [];
	g.forEach((row) => {
		newGrid.push([...row]);
	});
	return newGrid;
}

function calculateGridSettings(
	screenWidth: number,
	screenHeight: number,
	resolution: number
) {
	let rows = Math.floor((screenHeight - TILE_GAP) / (resolution + TILE_GAP));
	let cols = Math.floor((screenWidth - TILE_GAP) / (resolution + TILE_GAP));
	return { rows, cols };
}

const RESOLUTION = 100;

const INITIAL_CONTENT = <Project1 />;

const Clock = () => {
	const [gridScreenRef, { width, height }] = useMeasure();
	const { rows, cols } = calculateGridSettings(width, height, RESOLUTION);
	const TILE_WIDTH = width / cols - TILE_GAP;
	const TILE_HEIGHT = height / rows - TILE_GAP;

	const [grid, setGrid] = useState(deepCopy(generateBaseGrid(rows, cols)));
	useEffect(() => {
		const { rows, cols } = calculateGridSettings(width, height, RESOLUTION);
		setGrid(deepCopy(generateBaseGrid(rows, cols)));
	}, [width, height]);

	const [flipTrigger, triggerFlip] = useReducer((c) => c + 1, 0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			triggerFlip();
		}, 2000);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div
			className="h-screen w-screen"
			ref={gridScreenRef}
			style={
				{
					// paddingLeft: (width % (RESOLUTION + TILE_GAP)) / 2,
					// paddingRight: (width % (RESOLUTION + TILE_GAP)) / 2,
					// paddingTop: (height % (RESOLUTION + TILE_GAP)) / 2,
					// paddingBottom: (height % (RESOLUTION + TILE_GAP)) / 2,
				}
			}
		>
			<div
				className="flex flex-col"
				style={{
					width: cols * RESOLUTION,
					height: rows * RESOLUTION,
					gap: TILE_GAP,
				}}
			>
				{grid.map((row, x) => (
					<div
						className="flex flex-row"
						key={`row-${x}`}
						style={{
							width: cols * RESOLUTION,
							gap: TILE_GAP,
						}}
					>
						{row.map((value, y) => (
							<FlipFastTile
								key={`tile-${x}-${y}`}
								x={x}
								y={y}
								on={value === 1}
								flipTrigger={flipTrigger}
								// onClick={flipAll}
								// onClick={() => editGrid(x, y, value === 1 ? 0 : 1)}
								// onClick={changeContent}
								// width={RESOLUTION}
								width={TILE_WIDTH}
								height={TILE_HEIGHT}
								base="red"
								color="green"
								content={<ClockContent />}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Clock;
