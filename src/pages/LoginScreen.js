import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import FormButton from "../components/atoms/FormButton";
import FormInput from "../components/atoms/FormInput";
import WebLayout from "../components/layout/WebLayout";
import { toast } from "react-toastify";
import { SAVE_USER, SET_LOGIN } from "../redux/features/auth/authSlice";
import { loginUser } from "../redux/services/authServices";

const initialState = {
	email: "",
	password: "",
};

const LoginScreen = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [formData, setformData] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false);
	const { email, password } = formData;

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		setformData({ ...formData, [name]: value });
	};

	const validateEmail = (userMail) => {
		return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
			userMail
		);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			return toast.error("All fields are required");
		}

		if (password.length < 6) {
			return toast.error("Password is short");
		}

		const validateUserEmail = validateEmail(email);

		if (!validateUserEmail) {
			return toast.error("Please enter a valid email");
		}

		const userData = {
			email,
			password,
		};

		setIsLoading(true);
		try {
			const data = await loginUser(userData);

			console.log(data);
			await dispatch(SET_LOGIN(true));
			await dispatch(SAVE_USER(data));
			setIsLoading(false);
			toast.success("Logged in successfully");
			navigate("/dashboard");
		} catch (error) {
			setIsLoading(false);
		}
	};

	return (
		<WebLayout>
			<form
				onSubmit={handleLogin}
				className="w-full bg-white mt-10 md:mt-[60px] xl:mt-20 flex flex-col rounded-xl p-5 max-w-[500px] mx-auto space-y-5"
			>
				<h2 className="text-center font-bold capitalize text-3xl text-secondary-700">
					Login
				</h2>
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
				<FormButton
					type="submit"
					styles="bg-secondary-700 py-3 text-white"
					isLoading={isLoading}
					title="Sign In"
				/>
				<span className="w-full text-secondary-700 font-medium text-center mt-5">
					<Link to="/register">Don't have an account? Click here</Link>
				</span>
			</form>
		</WebLayout>
	);
};

export default LoginScreen;
