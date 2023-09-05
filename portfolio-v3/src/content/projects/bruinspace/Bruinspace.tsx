import ReactPlayer from "react-player";
import VideoContent from "../../../components/video-content/VideoContent";

interface Props {}

const Bruinspace = (props: Props) => {
	return (
		<VideoContent
			url="https://storage.googleapis.com/sonaviscool.appspot.com/personal-website/IMG_17552.mp4"
			volume={0.03}
		/>
	);
};

export default Bruinspace;
