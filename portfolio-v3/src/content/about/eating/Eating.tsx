import CarouselContent from "../../../components/carousel-content/CarouselContent";

import f1 from "./images/food-1.webp";
import f2 from "./images/food-2.webp";
import f3 from "./images/food-3.webp";
import f4 from "./images/food-4.webp";
import f5 from "./images/food-5.webp";
import f6 from "./images/food-6.webp";

const FRAMES = [f3, f2, f1, f4, f5, f6];

const Eating = () => {
	return <CarouselContent FRAMES={FRAMES} interval={2000} />;
};

export default Eating;
