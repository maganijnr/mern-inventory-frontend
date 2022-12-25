import React, { useState } from "react";

import WebLayout from "../components/layout/WebLayout";
import { toast } from "react-toastify";
import { registerUser } from "../redux/services/authServices";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SAVE_USER, SET_LOGIN } from "../redux/features/auth/authSlice";
import FormInput from "../components/atoms/FormInput";
import FormButton from "../components/atoms/FormButton";

//Form initial state
const initialState = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const RegisterScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setformData] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false);
	const { name, email, password, confirmPassword } = formData;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setformData({ ...formData, [name]: value });
	};

	const validateEmail = (userMail) => {
		return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			userMail
		);
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		if (!name || !email || !password || !confirmPassword) {
			return toast.error("All fields are required");
		}

		if (password.length < 6) {
			return toast.error("Password is short");
		}

		if (password !== confirmPassword) {
			return toast.error("Passwords do not match");
		}

		//Validate email
		const validateUserEmail = validateEmail(email);

		if (!validateUserEmail) {
			return toast.error("Please enter a valid email");
		}

		const userData = {
			name,
			email,
			password,
		};

		setIsLoading(true);
		try {
			const data = await registerUser(userData);

			console.log(data);
			await dispatch(SET_LOGIN(true));
			// await dispatch(SET_NAME(data.name));
			await dispatch(SAVE_USER(data));
			setIsLoading(false);
			toast.success("Registered successfully");
			navigate("/");
		} catch (error) {
			setIsLoading(false);
		}
	};

	return (
		<WebLayout>
			<form
				onSubmit={handleRegister}
				className="w-full bg-white mt-10 md:mt-[60px] xl:mt-20 flex flex-col rounded-xl p-5 max-w-[500px] mx-auto space-y-5"
			>
				<h2 className="text-center font-bold capitalize text-3xl text-secondary-700">
					Register
				</h2>
				<FormInput
					name="name"
					type="text"
					placeholder="Enter your name"
					value={name}
					onChange={handleInputChange}
				/>
				<FormInput
					name="email"
					type="text"
					placeholder="Enter your email"
					value={email}
					onChange={handleInputChange}
				/>
				<FormInput
					name="password"
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={handleInputChange}
				/>
				<FormInput
					name="confirmPassword"
					type="password"
					placeholder="Enter your confirmPassword"
					value={confirmPassword}
					onChange={handleInputChange}
				/>
				<FormButton
					type="submit"
					styles="bg-secondary-700 py-3 text-white"
					isLoading={isLoading}
					title="Create Account"
				/>
				<span className="w-full text-secondary-700 font-medium text-center mt-5">
					<Link to="/login">Already have an account? Click here</Link>
				</span>
			</form>
		</WebLayout>
	);
};

export default RegisterScreen;
