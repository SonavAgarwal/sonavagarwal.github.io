import classNames from "classnames";

const Project1 = () => {
	return (
		<div
			className={classNames(
				"h-screen w-screen flex flex-row items-center justify-center"
				// "bg-red-200"
			)}
		>
			<div className="flex-1 flex flex-col items-center justify-center gap-4">
				<h1 className="text-4xl text-black">Project 1</h1>
				<p className="text-lg text-gray-200">
					This is project number 1! Lorem ipsum dolor sit amet.
				</p>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<img
					src={"/content/images/poppin-site-1.webp"}
					alt="random"
					className="object-cover w-1/2 h-1/2"
				/>
			</div>
		</div>
	);
};

export default Project1;
