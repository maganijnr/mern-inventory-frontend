import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProductScreen from "./pages/EditProductScreen";

import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import ProfileScreen from "./pages/ProfileScreen";
import RegisterScreen from "./pages/RegisterScreen";
import UploadProductScreen from "./pages/UploadProductScreen";
import UsersScreen from "./pages/UsersScreen";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeScreen />,
	},
	{
		path: "/users",
		element: <UsersScreen />,
	},
	{
		path: "/upload-product",
		element: <UploadProductScreen />,
	},
	{
		path: "/edit-product/:id",
		element: <EditProductScreen />,
	},
	{
		path: "/profile",
		element: <ProfileScreen />,
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
