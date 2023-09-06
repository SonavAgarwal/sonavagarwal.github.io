import classNames from "classnames";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./CarouselContent.css";
import styles from "./CarouselContent.module.css";
import { Img } from "react-image";
import ContentFallback from "../content-fallback/ContentFallback";

interface Props {
	FRAMES: string[];
	interval?: number;
}

const CarouselContent = ({ FRAMES, interval = 1000 }: Props) => {
	return (
		<Carousel
			className={classNames(styles.container)}
			emulateTouch={true}
			swipeable={true}
			autoPlay
			infiniteLoop={true}
			showThumbs={false}
			showArrows={false}
			useKeyboardArrows={true}
			showStatus={false}
			interval={interval}
			transitionTime={300}
			preventMovementUntilSwipeScrollTolerance={true}
			swipeScrollTolerance={20}
			renderIndicator={(onClickHandler, isSelected, index) => {
				return (
					<div
						className={classNames(
							styles.indicator,
							isSelected && styles.indicatorActive
						)}
						onClick={onClickHandler}
						key={index}
						// data-testid={label}
					/>
				);
			}}
		>
			{FRAMES.map((frame) => (
				<div className={classNames(styles.imageContainer)} key={frame}>
					<Img
						src={frame}
						loader={<ContentFallback />}
						alt={frame}
						className={classNames(styles.image)}
					/>
				</div>
			))}
		</Carousel>
	);
};

export default CarouselContent;
