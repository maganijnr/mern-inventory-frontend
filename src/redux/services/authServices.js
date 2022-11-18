import axios from "axios";
import { toast } from "react-toastify";

const registerUser = async (userData) => {
	try {
		const response = await axios.post(
			`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,
			userData
		);

		if (response.statusText === "OK") {
			toast.success("Registered successfully");
		}

		return response.data;
	} catch (error) {
		const msg =
			(error.response &&
				error.response.data &&
				error.response.data.message) ||
			error.message ||
			error.toString();

		toast.error(msg);
	}
};

const loginUser = async (userData) => {
	try {
		const response = await axios.post(
			`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,
			userData
		);

		if (response.statusText === "OK") {
			toast.success("Logged in successfully");
		}

		return response.data;
	} catch (error) {
		const msg =
			(error.response &&
				error.response.data &&
				error.response.data.message) ||
			error.message ||
			error.toString();

		toast.error(msg);
	}
};

export { registerUser, loginUser };
