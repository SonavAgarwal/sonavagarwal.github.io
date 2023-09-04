import classNames from "classnames";
import { FaPencilRuler, FaUserAlt } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import AccountList from "../components/account-list/AccountList";
import ContentSection from "../components/content-section/ContentSection";
import {
	ABOUT_ME_CONTENT,
	FOLLOWED_TOPICS,
	PROJECT_CONTENT,
	SUGGESTED_ACCOUNTS,
} from "../data/data";
import styles from "./HomePage.module.css";

const HomePage = () => {
	return (
		<div className={styles.page}>
			<div className={styles.left}>
				<button
					className={classNames(styles.pageTab, styles.pageTabActive)}
					name="forYou"
				>
					<IoSparkles />
					For You
				</button>
				<button className={classNames(styles.pageTab)} name="aboutMe">
					<FaUserAlt />
					About Me
				</button>
				<button className={classNames(styles.pageTab)} name="projects">
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
				{ABOUT_ME_CONTENT.map((data) => (
					<ContentSection contentInfo={data} key={data.title} />
				))}

				{PROJECT_CONTENT.map((data) => (
					<ContentSection contentInfo={data} key={data.title} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
