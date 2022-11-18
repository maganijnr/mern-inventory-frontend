import React from "react";
import Navbar from "../organisms/Navbar";
import styled from "styled-components";

const WebLayout = ({ children }) => {
	return (
		<div>
			<Navbar />
			<WebContainer className="w-full bg-secondary-700 px-5 overflow-hidden">
				{children}
			</WebContainer>
		</div>
	);
};

export default WebLayout;

const WebContainer = styled.section`
	height: 100%;
	min-height: calc(100vh - 65px);
`;
