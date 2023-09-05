import { useContext, useEffect, useState } from "react";
import { HiVolumeUp } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { Oval } from "react-loader-spinner";
import ReactPlayer from "react-player";
import { useMediaQuery } from "usehooks-ts";
import { MuteContext } from "../../App";

interface Props {
	url: string;
	volume?: number;
}

// const FRAMES = [me1, me2, me3, me4, me5];

const VideoContent = ({ url, volume }: Props) => {
	const [playing, setPlaying] = useState(true);
	const { muteState: muted, setMuteState: setMuted } = useContext(MuteContext);
	const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");

	// const { ref: topRef, inView: topInView } = useInView({});
	const { ref: bottomRef, inView: bottomInView } = useInView({});
	useEffect(() => {
		// if (isMobile) {
		if (bottomInView) {
			setPlaying(true);
		} else {
			setPlaying(false);
		}
		// } else {
		// 	setPlaying(true);
		// }
	}, [bottomInView, isMobile]);

	return (
		<div
			onMouseDown={() => {
				// setPlaying(false);
			}}
			onMouseUp={() => {
				// setPlaying(true);
			}}
			onClick={() => {
				setMuted(!muted);
			}}
			style={{
				width: "var(--content-width)",
				height: "var(--content-height)",
				backgroundColor: "black",
				position: "relative",
			}}
		>
			{!muted && (
				<div
					style={{
						position: "absolute",
						top: "0",
						right: "0",
						padding: "0.5rem",
						boxSizing: "border-box",
						color: "white",
						zIndex: 10,
					}}
				>
					<HiVolumeUp />
				</div>
			)}

			<ReactPlayer
				url={url}
				style={{
					width: "100%",
					height: "100%",
				}}
				width={"100%"}
				height={"100%"}
				controls={false}
				playing={playing}
				muted={muted}
				loop={true}
				volume={volume || 1}
				fallback={
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: "black",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Oval
							height={80}
							width={80}
							color="white"
							wrapperStyle={{}}
							wrapperClass=""
							visible={true}
							ariaLabel="oval-loading"
							secondaryColor="lightgray"
							strokeWidth={2}
							strokeWidthSecondary={2}
						/>
					</div>
				}
			/>
			<div
				ref={bottomRef}
				style={{
					position: "absolute",
					bottom: "calc(0.4 * var(--content-height))",
					width: "100%",
					left: "0",
					height: "calc(0.1 * var(--content-height))",
					pointerEvents: "none",
				}}
			/>
		</div>
	);
};

export default VideoContent;
