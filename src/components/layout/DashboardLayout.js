import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../organisms/Sidebar";
import { FaBars } from "react-icons/fa";
import FormInput from "../atoms/FormInput";
import FormButton from "../atoms/FormButton";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import PageLoading from "../molecules/PageLoading";

const DashboardLayout = ({ loading, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [isProfileOpen, setIsProfileOpen] = useState(false);
	return (
		<div className="flex">
			{loading && <PageLoading />}
			<SidebarContainer
				onClick={() => setIsOpen(false)}
				className={`lg:w-[250px] lg:max-w-[250px] fixed lg:left-0 lg:top-0 h-screen min-h-screen lg:h-screen lg:block ${
					isOpen
						? "z-20 left-0 top-0 duration-700 block ease-linear transition-all w-full cursor-pointer"
						: "-left-72 top-0 duration-700 ease-linear hidden transition-all"
				}`}
			>
				{/* <div className="fixed top-0 left-0 w-full h-screen bg-yellow-300 block lg:hidden" /> */}
				<Sidebar />
			</SidebarContainer>
			<MainContainer className="bg-yellow h-full absolute right-0 top-0">
				<div className="h-[65px] w-full flex items-center justify-between px-5">
					<FaBars
						fontSize={24}
						className="cursor-pointer text-secondary-600 block lg:hidden"
						onClick={() => setIsOpen(true)}
					/>
					<div className="flex space-x-2">
						<FormInput
							placeholder="Search product..."
							name="search"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<FormButton
							title={"Search"}
							styles="bg-secondary-600 px-4 text-white"
							type="button"
							onClick={() => console.log(search)}
						/>
					</div>

					<div className="relative flex items-center space-x-2">
						<img
							className="w-10 h-10 rounded-full object-cover"
							src="https://cdn.pocket-lint.com/r/s/970x/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG"
							alt="profile"
						/>
						{isProfileOpen ? (
							<IoMdArrowDropup
								className="cursor-pointer"
								onClick={() => setIsProfileOpen(false)}
							/>
						) : (
							<IoMdArrowDropdown
								className="cursor-pointer"
								onClick={() => setIsProfileOpen(true)}
							/>
						)}
						{isProfileOpen && (
							<div className="bg-secondary-600 text-white px-1 rounded-md absolute top-11 right-0 space-y-1 py-2 w-[100px] flex flex-col duration-500 ease-linear">
								<button>Profile</button>
								<button>Logout</button>
							</div>
						)}
					</div>
				</div>
				<ContentWrapper className="px-5 py-10 w-full xl:max-w-[1660px] mx-auto bg-gray-100">
					{children}
				</ContentWrapper>
			</MainContainer>
		</div>
	);
};

export default DashboardLayout;

const SidebarContainer = styled.div`
	background: rgba(76, 113, 62, 0.33);

	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border: 1px solid rgba(76, 113, 62, 0.3);
`;
const MainContainer = styled.div`
	width: calc(100% - 250px);

	@media screen and (max-width: 1025px) {
		width: 100%;
	}
`;

const ContentWrapper = styled.div`
	min-height: calc(100% - 65px);
`;
