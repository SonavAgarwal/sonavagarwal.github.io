import classNames from "classnames";
import { useEffect, useReducer } from "react";
import { FaPencilRuler, FaUserAlt } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { useSearchParams } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import AccountList from "../components/account-list/AccountList";
import ContentSection from "../components/content-section/ContentSection";
import {
	ABOUT_ME_CONTENT,
	FOLLOWED_TOPICS,
	PROJECT_CONTENT,
	SUGGESTED_ACCOUNTS,
} from "../data/data";
import { getAllInfo } from "../data/firebase";
import styles from "./HomePage.module.css";
import { toast } from "react-hot-toast";

const HomePage = () => {
	const isMobile = useMediaQuery("(max-aspect-ratio: 1/1");

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

	const { ref: aboutContentRef, inView: ACInView } = useInView({});
	const { ref: projectContentRef, inView: PCInView } = useInView({});

	useEffect(() => {
		if (ACInView) {
			setSearchParams({ t: "aboutMe" });
		} else if (PCInView) {
			setSearchParams({ t: "projects" });
		}
	}, [ACInView, PCInView]);

	function handleTabClick(e: React.MouseEvent<HTMLButtonElement>) {
		const name = e.currentTarget.name;
		setSearchParams({ t: name });
	}

	if (isMobile) {
		return (
			<div className={styles.content}>
				<div ref={aboutContentRef}>
					{ABOUT_ME_CONTENT.map((data) => (
						<ContentSection contentInfo={data} key={data.title} />
					))}
				</div>

				<div ref={projectContentRef}>
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
						activeTab === "aboutMe" && styles.pageTabActive
					)}
					name="aboutMe"
					onClick={handleTabClick}
				>
					<FaUserAlt />
					About Me
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

				<div className={styles.horizontalLine} />
				<h1 className={styles.sectionTitle}>Followed topics</h1>

				<AccountList accounts={FOLLOWED_TOPICS} initialCount={3} />

				<div className={styles.horizontalLine} />
				<h1 className={styles.sectionTitle}>Suggested accounts</h1>

				<AccountList accounts={SUGGESTED_ACCOUNTS} initialCount={4} />

				<div className={styles.horizontalLine} />
				<p className={classNames(styles.sectionTitle, styles.footer)}>
					© 2023 <span className={styles.name}>Sonav Agarwal</span>
				</p>
			</div>
			<div className={classNames(styles.leftSpacer)} />

			<div className={styles.content}>
				<div ref={aboutContentRef}>
					{ABOUT_ME_CONTENT.map((data) => (
						<ContentSection contentInfo={data} key={data.title} />
					))}
				</div>

				<div ref={projectContentRef}>
					{PROJECT_CONTENT.map((data) => (
						<ContentSection contentInfo={data} key={data.title} />
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
