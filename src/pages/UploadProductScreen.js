import React, { useState } from "react";
import FormButton from "../components/atoms/FormButton";
import FormInput from "../components/atoms/FormInput";
import DashboardLayout from "../components/layout/DashboardLayout";
import { toast } from "react-toastify";
import { createProduct } from "../redux/services/productService";

const UploadProductScreen = () => {
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [countInStock, setCountInStock] = useState(0);
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleProductUpload = async (e) => {
		e.preventDefault();

		if (
			!name ||
			!image ||
			!countInStock ||
			!price ||
			!description ||
			!category
		) {
			return toast.error("All fields are required");
		}

		const newProduct = {
			name,
			price,
			description,
			countInStock,
			category,
			image,
		};

		setIsLoading(true);
		try {
			const data = await createProduct(newProduct);

			if (data) {
				setCategory("");
				setName("");
				setCountInStock(0);
				setPrice(0);
				setDescription("");
				setImage("");
				setIsLoading(false);
			}
		} catch (error) {
			setIsLoading(false);
		}
	};

	return (
		<DashboardLayout>
			<form
				className="w-full bg-white mt-5 rounded-lg p-5"
				onSubmit={handleProductUpload}
			>
				<h2 className="text-xl md:text-2xl xl:text-3xl font-semibold text-secondary-600">
					Upload Product
				</h2>
				<div className="mt-8 space-y-5">
					<div className="max-w-md mx-auto">
						<label
							htmlFor="name"
							className="font-medium text-lg text-secondary-600"
						>
							Product Name
						</label>
						<FormInput
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
						/>
					</div>
					<div className="max-w-md mx-auto">
						<label
							htmlFor="price"
							className="font-medium text-lg text-secondary-600"
						>
							Product Price
						</label>
						<FormInput
							name="price"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							type="number"
						/>
					</div>
					<div className="max-w-md mx-auto">
						<label
							htmlFor="image"
							className="font-medium text-lg text-secondary-600"
						>
							Product Image Url
						</label>
						<FormInput
							name="image"
							value={image}
							onChange={(e) => setImage(e.target.value)}
							type="text"
						/>
					</div>
					<div className="max-w-md mx-auto">
						<label
							htmlFor="category"
							className="font-medium text-lg text-secondary-600"
						>
							Product Category
						</label>
						<FormInput
							name="category"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							type="text"
						/>
					</div>
					<div className="max-w-md mx-auto">
						<label
							htmlFor="countInStock"
							className="font-medium text-lg text-secondary-600"
						>
							Quantity
						</label>
						<FormInput
							name="countInStock"
							value={countInStock}
							onChange={(e) => setCountInStock(e.target.value)}
							type="number"
						/>
					</div>
					<div className="max-w-md mx-auto">
						<label
							htmlFor="description"
							className="font-medium text-lg text-secondary-600"
						>
							Product description
						</label>
						<textarea
							name="description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							type="text"
							className={`w-full border-2 border-secondary-700 rounded-lg h-[150px] pl-2 font-medium outline-none py-1 resize-none`}
						></textarea>
					</div>

					<div className="max-w-md mx-auto w-full">
						<FormButton
							type="submit"
							styles="bg-secondary-600 py-3 text-white w-full"
							isLoading={isLoading}
							title="Upload"
						/>
					</div>
				</div>
			</form>
		</DashboardLayout>
	);
};

export default UploadProductScreen;
