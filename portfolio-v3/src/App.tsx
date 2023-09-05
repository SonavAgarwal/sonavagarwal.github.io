import { Toaster, toast } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import { createContext, useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

const router = createBrowserRouter([
	{
		path: "*",
		element: (
			<div>
				<Navbar />
				<HomePage />
			</div>
		),
	},
]);

export const MuteContext = createContext({
	muteState: true,
	setMuteState: (muteState: boolean) => {
		console.log("setMuteState not implemented", muteState);
	},
});

function App() {
	const [muteState, setMuteState] = useState(true);
	const isMobile = useMediaQuery("(max-aspect-ratio: 1/1)");

	useEffect(() => {
		toast.success("Tap to unmute!", {
			duration: 2000,
			position: isMobile ? "top-right" : "bottom-right",
			icon: "🔊",
		});
	}, []);

	return (
		<>
			<Toaster />
			<MuteContext.Provider
				value={{
					muteState,
					setMuteState,
				}}
			>
				<RouterProvider router={router}></RouterProvider>
			</MuteContext.Provider>
		</>
	);
}

export default App;
