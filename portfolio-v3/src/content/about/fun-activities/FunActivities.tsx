import CarouselContent from "../../../components/carousel-content/CarouselContent";

import f6 from "./images/activity_museum.webp";
import f7 from "./images/activity_capy.webp";
import f8 from "./images/activity_pyramid.webp";

const FRAMES = [f7, f6, f8];

const FunActivities = () => {
	return <CarouselContent FRAMES={FRAMES} interval={2000} />;
};

export default FunActivities;
