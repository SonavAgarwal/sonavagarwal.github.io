import classNames from "classnames";

const IMAGE_OPTIONS = [
	// "/content/images/activities-1.webp",
	// "/content/images/activities-2.webp",
	"/content/images/activities-3.webp",
	// "/content/images/activities-4.webp",
	"/content/images/activities-5.webp",
];

const AboutMe = () => {
	return (
		<div
			className={classNames(
				"h-screen w-screen flex flex-row items-center justify-center"
				// "bg-yellow-200"
			)}
		>
			<div className="flex-1 flex flex-col h-full gap-4">
				<h1 className="text-4xl text-black">Hey, I'm Sonav</h1>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<img
					src={"/content/images/activities-3.webp"}
					alt="random"
					className="object-cover w-1/2 h-1/2"
				/>
			</div>
		</div>
	);
};

export default AboutMe;
