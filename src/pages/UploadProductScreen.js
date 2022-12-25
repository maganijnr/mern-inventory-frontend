import axios from "axios";
import React, { useState } from "react";
import FormButton from "../components/atoms/FormButton";
import FormInput from "../components/atoms/FormInput";
import DashboardLayout from "../components/layout/DashboardLayout";

const UploadProductScreen = () => {
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [countInStock, setCountInStock] = useState(0);
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [uploading, setUploading] = useState(false);

	const uploadFileHandler = async (e) => {
		const file = e.target.files[0];

		const formData = new FormData();
		formData.append("image", file);
		setUploading(true);

		try {
			const config = {
				headers: { "Content-Type": "multipart/form-data" },
			};
			const data = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/api/uploads`,
				formData,
				config
			);
			setImage(data);
			setUploading(false);
		} catch (error) {
			console.log(error);
			setUploading(false);
		}
	};

	console.log(image);

	return (
		<DashboardLayout>
			<section className="w-full bg-white mt-5 rounded-lg p-5">
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
							htmlFor="price"
							className="font-medium text-lg text-secondary-600"
						>
							Product Image
						</label>
						<div>
							<input
								type="file"
								value={image}
								onChange={uploadFileHandler}
								className="w-full border-2 border-secondary-700 rounded-lg h-10 pl-2 font-medium outline-none py-1"
							/>
						</div>
						{!uploading && image && (
							<img src={image} alt={"product"} className="w-40 h-40" />
						)}
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
			</section>
		</DashboardLayout>
	);
};

export default UploadProductScreen;
