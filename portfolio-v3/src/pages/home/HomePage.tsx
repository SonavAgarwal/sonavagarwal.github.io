import classNames from "classnames";
import { useEffect, useReducer } from "react";
import { FaPencilRuler, FaUserAlt } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import AccountList from "../../components/account-list/AccountList";
import ContentSection from "../../components/content-section/ContentSection";
import {
	ABOUT_ME_CONTENT,
	FOLLOWED_TOPICS,
	PROJECT_CONTENT,
	SUGGESTED_ACCOUNTS,
} from "../../data/data";
import { getAllInfo } from "../../data/firebase";
import styles from "./HomePage.module.css";
import { toast } from "react-hot-toast";

const HomePage = () => {
	const isMobile = useMediaQuery("(max-aspect-ratio: 1/1");

	useEffect(() => {
		toast.success(
			isMobile ? "Tap videos to unmute!" : "Click videos to unmute!",
			{
				duration: 3000,
				position: isMobile ? "top-right" : "top-center",
				icon: "🔊",
			}
		);
	}, []);

	const [_, forceUpdate] = useReducer((x) => x + 1, 0);
	useEffect(() => {
		getAllInfo().then(() => {
			forceUpdate();
		});
	}, []);

	const [searchParams, setSearchParams] = useSearchParams();
	let activeTab = searchParams.get("t");
	if (!activeTab) {
		activeTab = "forYou";
	}

	// const { ref: aboutContentRef, inView: ACInView } = useInView({});
	// const { ref: projectContentRef, inView: PCInView } = useInView({});

	// useEffect(() => {
	// 	if (ACInView) {
	// 		setSearchParams({ t: "forYou" });
	// 	} else if (PCInView) {
	// 		setSearchParams({ t: "projects" });
	// 	}
	// }, [ACInView, PCInView]);

	useEffect(() => {
		if (activeTab === "forYou") {
			let element = document.getElementById("aboutMe");
			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
				});
			}
		}
		if (activeTab === "projects") {
			let element = document.getElementById("projects");
			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
				});
			}
		}
	}, []);

	function handleTabClick(e: React.MouseEvent<HTMLButtonElement>) {
		const name = e.currentTarget.name;
		if (name === "forYou") {
			// remove query param
			setSearchParams({});
		} else {
			setSearchParams({ t: name });
		}
		let element = document.getElementById(name);
		let contentElement = document.querySelector(
			"." + styles.content
		) as HTMLElement;
		if (contentElement) {
			// console.log(contentElement.style.scrollSnapType);
			// // change element scroll snap property
			// let originalScrollSnapType = contentElement.style.scrollSnapType;
			// contentElement.style.scrollSnapType = "none";
			// setTimeout(() => {
			// 	contentElement.style.scrollSnapType = originalScrollSnapType;
			// }, 1000);
		}
		if (element) {
			// console.log(element);
			element.scrollIntoView({
				behavior: "smooth",
			});
		}
	}

	if (isMobile) {
		return (
			<div className={styles.content}>
				<div className={classNames(styles.topTabs)}>
					<button
						className={classNames(
							styles.topTab,
							activeTab === "forYou" && styles.topTabActive
						)}
						name="forYou"
						onClick={handleTabClick}
					>
						For You
					</button>{" "}
					|{""}
					<button
						className={classNames(
							styles.topTab,
							activeTab === "projects" && styles.topTabActive
						)}
						name="projects"
						onClick={handleTabClick}
					>
						Projects
					</button>
				</div>
				<div
					className={styles.contentSectionWrapper}
					//  ref={aboutContentRef}
				>
					<div id="forYou" className={styles.scrollAnchor} />
					{ABOUT_ME_CONTENT.map((data) => (
						<ContentSection contentInfo={data} key={data.title} />
					))}
				</div>

				<div
					// ref={projectContentRef}
					className={styles.contentSectionWrapper}
				>
					<div id="projects" className={styles.scrollAnchor} />
					{PROJECT_CONTENT.map((data) => (
						<ContentSection contentInfo={data} key={data.title} />
					))}
				</div>
			</div>
		);
	}

	return (
		<div className={styles.page}>
			<div className={styles.left}>
				<button
					className={classNames(
						styles.pageTab,
						activeTab === "forYou" && styles.pageTabActive
					)}
					name="forYou"
					onClick={handleTabClick}
				>
					<IoSparkles />
					For You
				</button>
				<button
					className={classNames(
						styles.pageTab,
						activeTab === "projects" && styles.pageTabActive
					)}
					name="projects"
					onClick={handleTabClick}
				>
					<FaPencilRuler />
					Projects
				</button>
				<a
					className={classNames(styles.pageTab, styles.myResume)}
					target="_blank"
					rel="noreferrer"
					href="https://drive.google.com/file/d/16hSG8AxpPcxUk6R3GXby9oZa1VWwoNJH/view"
				>
					<FaUserAlt />
					My Resume
				</a>

				<div className={styles.horizontalLine} />
				<h1 className={styles.sectionTitle}>Followed topics</h1>

				<AccountList accounts={FOLLOWED_TOPICS} initialCount={3} />

				<div className={styles.horizontalLine} />
				<h1 className={styles.sectionTitle}>Suggested accounts</h1>

				<AccountList accounts={SUGGESTED_ACCOUNTS} initialCount={4} />

				<div className={styles.horizontalLine} />
				<p className={classNames(styles.sectionTitle, styles.footer)}>
					© 2023 <span className={styles.name}>Sonav Agarwal</span>
					<br />
					<br />
					By using this site, you agree to our{" "}
					<Link to="/privacy-policy" className={styles.privacyPolicy}>
						Privacy Policy
					</Link>
				</p>
			</div>
			<div className={classNames(styles.leftSpacer)} />

			<div className={styles.content}>
				<div
					// ref={aboutContentRef}

					className={styles.contentSectionWrapper}
				>
					<div id="forYou" className={styles.scrollAnchor} />
					{ABOUT_ME_CONTENT.map((data) => (
						<ContentSection contentInfo={data} key={data.title} />
					))}
				</div>

				<div
					// ref={projectContentRef}
					className={styles.contentSectionWrapper}
				>
					<div id="projects" className={styles.scrollAnchor} />
					{PROJECT_CONTENT.map((data) => (
						<ContentSection contentInfo={data} key={data.title} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
