import { useEffect, useState } from "react";
import styles from "./AITeach.module.css";

import frame1 from "./images/aita-1.webp";
import frame2 from "./images/aita-2.webp";
import frame3 from "./images/aita-3.webp";
import frame4 from "./images/aita-4.webp";
import frame5 from "./images/aita-5.webp";

const FRAMES = [frame1, frame2, frame3, frame4, frame5];

const AITeach = () => {
	const [frame, setFrame] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setFrame((frame) => (frame + 1) % FRAMES.length);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.container}>
			<img src={FRAMES[frame]} alt="AITeach" className={styles.image} />
		</div>
	);
};

export default AITeach;
