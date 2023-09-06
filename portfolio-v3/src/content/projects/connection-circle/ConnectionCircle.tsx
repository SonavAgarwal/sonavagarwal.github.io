import styles from "./ConnectionCircle.module.css";

const ConnectionCircle = () => {
	return (
		<div className={styles.container}>
			<iframe
				style={{
					pointerEvents: "auto", //isMobile ? "none" : "auto",
					zIndex: 1,
				}}
				className={styles.map}
				src="https://connection-circle.web.app/map/32rwc6a9Q2OQuNnwgyEbtXfL0Rk2/zmvGc4CIhpe5T9H0fC3l?ui=false"
			></iframe>
		</div>
	);
};

export default ConnectionCircle;
