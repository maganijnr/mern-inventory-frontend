import React from "react";
import styled from "styled-components";

const FormInput = ({
	name,
	onChange,
	type = "text",
	value,
	placeholder,
	styles,
}) => {
	return (
		<>
			<Input
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				className={`${styles} w-full border-2 border-secondary-700 rounded-lg h-10 pl-2 font-medium outline-none py-1`}
			/>
		</>
	);
};

const Input = styled.input``;

export default FormInput;
