import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";

const router = createBrowserRouter([
	{
		path: "*",
		element: <div>Home</div>,
	},
	{
		path: "/privacy-policy",
		element: <PrivacyPolicy />,
	},
]);

function App() {
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

			<RouterProvider router={router}></RouterProvider>
		</>
	);
}

export default App;
