import axios from "axios";
import { toast } from "react-toastify";

const getAllProducts = async () => {
	try {
		const response = await axios.get(
			`${process.env.REACT_APP_BACKEND_URL}/api/products`
		);

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

const deleteProduct = async (id) => {
	try {
		await axios.delete(
			`${process.env.REACT_APP_BACKEND_URL}/api/products/${id}`
		);

		toast.success("Deleted successfully");
		// getAllProducts();
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

const createProduct = async (product) => {
	try {
		const config = {
			headers: { "Content-Type": "application/json" },
		};
		const { data } = await axios.post(
			`${process.env.REACT_APP_BACKEND_URL}/api/products/`,
			product,
			config
		);

		if (data) {
			toast.success("Product created successfully");
			return data;
		}
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

export { getAllProducts, deleteProduct, createProduct };
