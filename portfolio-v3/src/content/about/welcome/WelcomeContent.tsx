import CarouselContent from "../../../components/carousel-content/CarouselContent";
import me1 from "./images/me-1.webp";
import me2 from "./images/me-2.webp";
import me3 from "./images/me-3.webp";
import me4 from "./images/me-4.webp";
import me5 from "./images/me-5.webp";

interface Props {}

const FRAMES = [me1, me2, me3, me4, me5];

const WelcomeContent = (props: Props) => {
	return <CarouselContent FRAMES={FRAMES} interval={2000} />;
};

export default WelcomeContent;
