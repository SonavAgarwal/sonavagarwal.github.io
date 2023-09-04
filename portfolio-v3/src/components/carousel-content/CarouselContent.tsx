import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./CarouselContent.module.css";
import "./CarouselContent.css";
import classNames from "classnames";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "usehooks-ts";

interface Props {
	FRAMES: string[];
	interval?: number;
}

const CarouselContent = ({ FRAMES, interval = 1000 }: Props) => {
	const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");

	return (
		<Carousel
			className={classNames(styles.container)}
			emulateTouch={true}
			swipeable={true}
			autoPlay
			infiniteLoop={true}
			showThumbs={false}
			showArrows={false}
			showStatus={false}
			interval={interval}
			transitionTime={300}
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
					<img src={frame} alt={frame} className={classNames(styles.image)} />
				</div>
			))}
		</Carousel>
	);
};

export default CarouselContent;
