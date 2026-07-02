import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import Home from "./pages/home/Home";
import Clock from "./pages/clock/Clock";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Home />,
	},
	{
		path: "clock",
		element: <Clock />,
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
