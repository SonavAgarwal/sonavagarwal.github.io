import classNames from "classnames";
import { useEffect, useId, useReducer, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import FlipTile from "../../components/FlipTile";
import AboutMe from "../content/AboutMe";
import Project1 from "../content/Project1";
import Project2 from "../content/Project2";
import FlipTile2 from "../../components/FlipTile2";

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

const RESOLUTION = 50;

const INITIAL_CONTENT = <Project1 />;

const Home = () => {
	const [gridScreenRef, { width, height }] = useMeasure();
	const { rows, cols } = calculateGridSettings(width, height, RESOLUTION);
	const TILE_WIDTH = width / cols - TILE_GAP;
	const TILE_HEIGHT = height / rows - TILE_GAP;

	const [grid, setGrid] = useState(deepCopy(generateBaseGrid(rows, cols)));
	useEffect(() => {
		const { rows, cols } = calculateGridSettings(width, height, RESOLUTION);
		setGrid(deepCopy(generateBaseGrid(rows, cols)));
	}, [width, height]);

	const forceUpdate = useReducer((c) => c + 1, 0)[1];

	function editGrid(x: number, y: number, newValue: number) {
		// setGrid((oldGrid) => {
		// 	let newGrid = deepCopy(oldGrid);
		// 	newGrid[x][y] = newValue;
		// 	return newGrid;
		// });
		grid[x][y] = newValue;
		forceUpdate();
	}

	function flipAll() {
		setGrid((oldGrid) => {
			let newGrid = deepCopy(oldGrid);
			newGrid.forEach((row, x) => {
				row.forEach((_, y) => {
					newGrid[x][y] = newGrid[x][y] === 1 ? 0 : 1;
				});
			});
			return newGrid;
		});
	}

	const contentIndex = useRef(0);
	const [content, setContent] = useState(INITIAL_CONTENT);
	const lastContentChange = useRef(Date.now());

	function nextContent() {
		console.log("next content called");
		const contents = [<Project1 />, <Project2 />];
		console.log(contentIndex.current);
		contentIndex.current = (contentIndex.current + 1) % contents.length;
		return contents[contentIndex.current];
	}

	function changeContent() {
		if (Date.now() - lastContentChange.current < 1500) return;

		setContent(nextContent());
		lastContentChange.current = Date.now();
	}

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
							<FlipTile2
								key={`tile-${x}-${y}`}
								x={x}
								y={y}
								on={value === 1}
								// onClick={flipAll}
								// onClick={() => editGrid(x, y, value === 1 ? 0 : 1)}
								onClick={changeContent}
								// width={RESOLUTION}
								width={TILE_WIDTH}
								height={TILE_HEIGHT}
								base="red"
								color="green"
								content={content}
							/>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
