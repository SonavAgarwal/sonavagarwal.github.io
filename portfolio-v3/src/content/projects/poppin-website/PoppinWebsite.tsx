import CarouselContent from "../../../components/carousel-content/CarouselContent";
import ss1 from "./images/poppin-app-screenshot-1.png";
import ss2 from "./images/poppin-app-screenshot-2.png";
import ss3 from "./images/poppin-app-screenshot-3.png";
import ss4 from "./images/poppin-create.webp";
import ss5 from "./images/poppin-stars.jpg";

const FRAMES = [ss4, ss1, ss2, ss3, ss5];

const PoppinWebsite = () => {
	return <CarouselContent FRAMES={FRAMES} interval={2000} />;
};

export default PoppinWebsite;
