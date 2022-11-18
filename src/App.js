import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomeScreen from "./pages/HomeScreen";
import LandingScreen from "./pages/LandingScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingScreen />,
	},
	{
		path: "/dashboard",
		element: <HomeScreen />,
	},
	{
		path: "/login",
		element: <LoginScreen />,
	},
	{
		path: "/register",
		element: <RegisterScreen />,
	},
]);

const App = () => {
	return (
		<div>
			<RouterProvider router={router} />
			<ToastContainer />
		</div>
	);
};

export default App;
