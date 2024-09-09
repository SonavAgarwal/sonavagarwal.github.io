import { Oval } from "react-loader-spinner";

const ContentFallback = () => {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				backgroundColor: "black",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Oval
				height={80}
				width={80}
				color="white"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				ariaLabel="oval-loading"
				secondaryColor="lightgray"
				strokeWidth={2}
				strokeWidthSecondary={2}
			/>
		</div>
	);
};

export default ContentFallback;
