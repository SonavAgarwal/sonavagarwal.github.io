import VideoContent from "../../../components/video-content/VideoContent";
// import CarouselContent from "../../../components/carousel-content/CarouselContent";
// import me1 from "./images/me-1.webp";
// import me2 from "./images/me-2.webp";
// import me3 from "./images/me-3.webp";
// import me4 from "./images/me-4.webp";
// import me5 from "./images/me-5.webp";

// https://storage.googleapis.com/sonaviscool.appspot.com/personal-website/Sonav%20Boomerang%20Wave%201.mp4

interface Props {}

// const FRAMES = [me1, me2, me3, me4, me5];

const WelcomeContent = (props: Props) => {
	// return <CarouselContent FRAMES={FRAMES} interval={2000} />;

	return (
		<VideoContent url="https://storage.googleapis.com/sonaviscool.appspot.com/personal-website/boomerang-wave-3.mp4" />
	);
};

export default WelcomeContent;
