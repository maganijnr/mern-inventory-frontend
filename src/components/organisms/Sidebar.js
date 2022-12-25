import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineUpload } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
	return (
		<div className="w-[250px] max-w-[250px] bg-secondary-600 h-full pt-5">
			<h2 className="w-full text-center text-white font-bold text-3xl">
				Eubond
			</h2>
			<div className="mt-10 space-y-5">
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive
							? "font-bold flex items-center space-x-2 h-10 bg-white w-full max-w-[200px] mx-auto px-5 rounded-2xl"
							: "font-bold flex items-center space-x-2 h-10 text-white w-full max-w-[200px] mx-auto px-5 rounded-2xl"
					}
				>
					<AiFillHome fontSize={20} className="mr-4" />
					Dashboard
				</NavLink>
				<NavLink
					to="/users"
					className={({ isActive }) =>
						isActive
							? "font-bold flex items-center space-x-2 h-10 bg-white w-full max-w-[200px] mx-auto px-5 rounded-2xl"
							: "font-bold flex items-center space-x-2 h-10 text-white w-full max-w-[200px] mx-auto px-5 rounded-2xl"
					}
				>
					<FaUsers fontSize={20} className="mr-4" />
					Users
				</NavLink>
				<NavLink
					to="/upload-product"
					className={({ isActive }) =>
						isActive
							? "font-bold flex items-center space-x-2 h-10 bg-white w-full max-w-[200px] mx-auto px-5 rounded-2xl"
							: "font-bold flex items-center space-x-2 h-10 text-white w-full max-w-[200px] mx-auto px-5 rounded-2xl"
					}
				>
					<AiOutlineUpload fontSize={20} className="mr-4" />
					Upload Product
				</NavLink>
				<NavLink
					to="/profile"
					className={({ isActive }) =>
						isActive
							? "font-bold flex items-center space-x-2 h-10 bg-white w-full max-w-[200px] mx-auto px-5 rounded-2xl"
							: "font-bold flex items-center space-x-2 h-10 text-white w-full max-w-[200px] mx-auto px-5 rounded-2xl"
					}
				>
					<CgProfile fontSize={20} className="mr-4" />
					Profile
				</NavLink>
			</div>
		</div>
	);
};

export default Sidebar;
