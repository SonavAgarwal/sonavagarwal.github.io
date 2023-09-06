import CarouselContent from "../../../components/carousel-content/CarouselContent";
import site1 from "./images/poppin-site-1.webp";
import site2 from "./images/poppin-site-2.webp";
import site3 from "./images/poppin-site-3.webp";
import site4 from "./images/poppin-site-4.webp";
import site5 from "./images/poppin-site-5.webp";
import site6 from "./images/poppin-site-6.webp";
import site7 from "./images/poppin-site-7.webp";
import site8 from "./images/poppin-site-8.webp";

const FRAMES = [site1, site2, site3, site4, site5, site6, site7, site8];

const PoppinWebsite = () => {
	return <CarouselContent FRAMES={FRAMES} interval={1500} />;
};

export default PoppinWebsite;
