import ReactPlayer from "react-player";

interface Props {}

const Bruinspace = (props: Props) => {
	return (
		<div
			style={{
				width: "var(--content-width)",
				height: "var(--content-height)",
				backgroundColor: "black",
			}}
		>
			<ReactPlayer
				url="https://storage.googleapis.com/sonaviscool.appspot.com/personal-website/IMG_17552.mp4"
				style={{
					width: "100%",
					height: "100%",
				}}
				width={"100%"}
				height={"100%"}
				controls={false}
				playing={true}
				muted={true}
				loop={true}
			/>
		</div>
	);
};

export default Bruinspace;
