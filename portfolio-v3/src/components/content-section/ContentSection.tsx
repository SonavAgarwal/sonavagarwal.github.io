import classNames from "classnames";
import { toast } from "react-hot-toast";
import { BsChatDotsFill, BsChatFill, BsHeartFill } from "react-icons/bs";
import { FiMusic } from "react-icons/fi";
import { IoIosShareAlt } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { useCopyToClipboard, useMediaQuery } from "usehooks-ts";
import { ContentInfo } from "../../data/types";
import styles from "./ContentSection.module.css";
import { useReducer, useState } from "react";
import { sendLike } from "../../data/firebase";

interface Props {
	contentInfo: ContentInfo;
}

const ContentSection = ({ contentInfo }: Props) => {
	const [_, copy] = useCopyToClipboard();
	const [__, forceUpdate] = useReducer((x) => x + 1, 0);

	const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");
	const [liked, setLiked] = useState(false);

	const [infoOpen, setInfoOpen] = useState(false);

	const { ref, inView } = useInView({
		// triggerOnce: true,
	});

	function ActionButtons() {
		return (
			<>
				<button
					className={classNames(styles.action, liked && styles.actionActive)}
					name="like"
					onClick={() => {
						if (liked) return;
						sendLike(contentInfo.id);
						setLiked(true);
						contentInfo.likes++;
						forceUpdate();
					}}
				>
					<span
						className={classNames(
							styles.actionIcon,
							liked && styles.actionIconActive
						)}
					>
						<BsHeartFill />
					</span>
				</button>
				<div className={styles.actionText}>
					{displayNumber(contentInfo.likes)}
				</div>
				{/* <button className={classNames(styles.action)} name="comment">
						<span className={classNames(styles.actionIcon)}>
							<BsChatDotsFill />{" "}
						</span>
					</button>
					<div className={styles.actionText}>
						{displayNumber(contentInfo.likes)}
					</div> */}
				<button
					name="share"
					className={classNames(styles.action)}
					onClick={() => {
						copy(contentInfo.link);
						toast.success("Copied link!", {
							position: isMobile ? "top-center" : "bottom-right",
							icon: "📋",
						});
					}}
				>
					<span className={classNames(styles.actionIcon)}>
						<IoIosShareAlt />
					</span>
				</button>
				<div className={styles.actionText}></div>
			</>
		);
	}

	if (isMobile) {
		return (
			<div className={styles.content} ref={ref}>
				{inView && <contentInfo.content.component />}

				<div
					className={styles.textInfo}
					onClick={() => {
						setInfoOpen(!infoOpen);
					}}
				>
					<div className={styles.title}>{contentInfo.title}</div>
					<p
						className={classNames(
							styles.description,
							!infoOpen && styles.descriptionCut
						)}
					>
						{contentInfo.description}
					</p>
					<p className={styles.sound}>
						<FiMusic />
						{contentInfo.sound}
					</p>
				</div>
				<div className={styles.actions}>
					<a href={contentInfo.link} target="_blank" rel="noreferrer">
						<img
							src={contentInfo.photo}
							alt="ContentImage"
							className={classNames(styles.contentPhoto)}
						/>
					</a>
					<ActionButtons />
				</div>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<a href={contentInfo.link} target="_blank" rel="noreferrer">
					<img
						src={contentInfo.photo}
						alt="ContentImage"
						className={classNames(styles.contentPhoto)}
					/>
				</a>
			</div>

			<div className={styles.right}>
				<div className={styles.top}>
					<div className={styles.title}>{contentInfo.title}</div>
					<p className={styles.description}>{contentInfo.description}</p>
					<p className={styles.sound}>
						<FiMusic />
						{contentInfo.sound}
					</p>
				</div>

				<div className={styles.bottom}>
					<div className={styles.content} ref={ref}>
						{inView && <contentInfo.content.component />}
					</div>
					<div className={styles.actions}>
						<ActionButtons />
					</div>
				</div>
			</div>
		</div>
	);
};

function displayNumber(number: number) {
	if (number < 1000) {
		return number;
	} else if (number < 1000000) {
		return (number / 1000).toFixed(1) + "K";
	} else if (number < 1000000000) {
		return (number / 1000000).toFixed(1) + "M";
	}
	return (number / 1000000000).toFixed(1) + "B";
}

export default ContentSection;
