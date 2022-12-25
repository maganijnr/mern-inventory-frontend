import React, { useEffect } from "react";
import Navbar from "../organisms/Navbar";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WebLayout = ({ children }) => {
	const navigate = useNavigate();
	const auth = useSelector((state) => state.auth);
	const { user } = auth;

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [user]);

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
