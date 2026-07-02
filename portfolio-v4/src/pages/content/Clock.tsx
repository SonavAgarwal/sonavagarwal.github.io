interface Props {}

const ClockContent = (props: Props) => {
	return (
		<div className="w-screen h-screen flex justify-center items-center bg-white">
			<h1 className="font-bold text-[15rem] w-full text-center">
				{new Date().toTimeString().split(" ")[0].split(":").join(" : ")}
			</h1>
		</div>
	);
};

export default ClockContent;
