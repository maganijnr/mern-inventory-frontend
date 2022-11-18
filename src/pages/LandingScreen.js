import React, { useEffect } from "react";
import styled from "styled-components";
import WebLayout from "../components/layout/WebLayout";
import axios from "axios";

const LandingScreen = () => {
	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(
				`${process.env.REACT_APP_BACKEND_URL}/api/products/`
			);

			console.log(result.data);
		};

		fetchItems();
	}, []);
	return (
		<WebLayout>
			<H2 className="text-red-500">LandingScreen</H2>
		</WebLayout>
	);
};

export default LandingScreen;

const H2 = styled.h2`
	font-size: 24px;
`;
