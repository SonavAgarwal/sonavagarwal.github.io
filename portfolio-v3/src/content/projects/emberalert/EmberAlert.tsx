import classNames from "classnames";
import { Img } from "react-image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ContentFallback from "../../../components/content-fallback/ContentFallback";
import VideoContent from "../../../components/video-content/VideoContent";
import "./CarouselContent.css";
import styles from "./CarouselContent.module.css";
import i1 from "./images/emberalert_team.webp";

const EmberAlert = (_: any) => {
	return (
		<Carousel
			className={classNames(styles.container)}
			emulateTouch={true}
			swipeable={true}
			// autoPlay
			infiniteLoop={false}
			showThumbs={false}
			showArrows={false}
			useKeyboardArrows={true}
			showStatus={false}
			// interval={interval}
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
			<div className={classNames(styles.imageContainer)}>
				<VideoContent
					volume={0.7}
					autoplay={false}
					url="https://www.youtube.com/watch?v=YQ8jbAAUyys"
				/>
			</div>
			<div className={classNames(styles.imageContainer)} key={i1}>
				<Img
					src={i1}
					loader={<ContentFallback />}
					alt={i1}
					className={classNames(styles.image)}
				/>
			</div>
		</Carousel>
	);
};

export default EmberAlert;
