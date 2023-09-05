import classNames from "classnames";
import styles from "./Navbar.module.css";
import Logo from "../../assets/icons/SparkleLogo.svg";
import ProfilePhoto from "../../assets/images/CornerProfilePhoto.png";
import { useMediaQuery } from "usehooks-ts";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK } from "../../data/data";

interface Props {}

const Navbar = (props: Props) => {
	const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");

	if (isMobile) {
		return (
			<div className={classNames(styles.container)}>
				<img src={Logo} alt="Logo" className={classNames(styles.logo)} />
				<a
					className={classNames(styles.icon)}
					href={GITHUB_LINK}
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub />
				</a>
				<a
					className={classNames(styles.icon)}
					href={LINKEDIN_LINK}
					target="_blank"
					rel="noreferrer"
				>
					<FaLinkedin />
				</a>
				<a
					className={classNames(styles.icon)}
					href={INSTAGRAM_LINK}
					target="_blank"
					rel="noreferrer"
				>
					<FaInstagram />
				</a>
				<img
					src={ProfilePhoto}
					alt="ProfilePhoto"
					className={classNames(styles.profilePhoto)}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(styles.container)}>
			<div className={classNames(styles.left)}>
				<img src={Logo} alt="Logo" className={classNames(styles.logo)} />
				<div className={classNames(styles.logoText)}>SonavAgarwal</div>
			</div>

			<div className={classNames(styles.middle)}></div>

			<div className={classNames(styles.right)}>
				<img
					src={ProfilePhoto}
					alt="ProfilePhoto"
					className={classNames(styles.profilePhoto)}
				/>
			</div>
		</div>
	);
};

export default Navbar;
