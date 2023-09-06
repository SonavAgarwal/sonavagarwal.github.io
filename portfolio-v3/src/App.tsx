import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";

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
	{
		path: "/privacy-policy",
		element: <PrivacyPolicy />,
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

	return (
		<>
			<Toaster
				toastOptions={{
					style: {
						pointerEvents: "none",
						zIndex: 400,
					},
				}}
			/>
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
