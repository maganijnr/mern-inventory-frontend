import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const FormButton = ({ type, title, styles, isLoading = false, ...others }) => {
	return (
		<button
			type={type}
			{...others}
			className={`${styles} font-semibold rounded-lg cursor-pointer`}
		>
			{isLoading ? <ClipLoader size={20} color="#fff" /> : title}
		</button>
	);
};

export default FormButton;
