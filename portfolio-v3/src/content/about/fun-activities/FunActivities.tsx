import CarouselContent from "../../../components/carousel-content/CarouselContent";
import f1 from "./images/activities-1.webp";
import f2 from "./images/activities-2.webp";
import f3 from "./images/activities-3.webp";
import f4 from "./images/activities-4.webp";
import f5 from "./images/activities-5.webp";

interface Props {}

const FRAMES = [f1, f2, f3, f4, f5];

const FunActivities = (props: Props) => {
	return <CarouselContent FRAMES={FRAMES} interval={1500} />;
};

export default FunActivities;
