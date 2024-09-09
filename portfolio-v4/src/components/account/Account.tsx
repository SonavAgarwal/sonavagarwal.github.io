import classNames from "classnames";
import styles from "./Account.module.css";

interface Props {
	title: string;
	subtitle: string;
	photo: string;
	link: string;
}

const Account = (props: Props) => {
	return (
		<a
			className={classNames(styles.link)}
			href={props.link}
			target="_blank"
			rel="noreferrer"
		>
			<div className={classNames(styles.container)}>
				<img
					src={props.photo}
					alt="ProfilePhoto"
					className={classNames(styles.profilePhoto)}
				/>
				<div className={classNames(styles.right)}>
					<div className={classNames(styles.title)}>{props.title}</div>
					<div className={classNames(styles.subtitle)}>{props.subtitle}</div>
				</div>
			</div>
		</a>
	);
};

export default Account;
