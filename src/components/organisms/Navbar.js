import React, { useEffect, useState } from "react";

const Navbar = () => {
	const [showShadow, setShowShadow] = useState(false);

	const checkScroll = () => {
		if (window.scrollY >= 70) {
			setShowShadow(true);
		} else {
			setShowShadow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScroll);
	}, []);

	return (
		<div
			className={
				showShadow
					? "fixed top-0 left-0 shadow-md w-full h-[65px] ease-in duration-200 bg-secondary-700"
					: "w-full h-[65px] relative bg-secondary-700"
			}
		>
			<div className="max-w-[1440px] px-3 h-full mx-auto flex items-center justify-between">
				<h2 className="font-bold text-3xl text-white cursor-pointer">
					Eubond Admin
				</h2>
			</div>
		</div>
	);
};

export default Navbar;
