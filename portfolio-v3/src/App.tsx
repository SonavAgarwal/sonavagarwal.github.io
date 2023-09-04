import { Toaster } from "react-hot-toast";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<div>
			<Toaster />
			<Navbar />
			<HomePage />
		</div>
	);
}

export default App;
