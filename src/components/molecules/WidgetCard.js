import React from "react";

const WidgetCard = ({ mainIcon, title, cardNum, cash = false, bgColor }) => {
	return (
		<div
			className={`flex items-center min-w-[250px] px-2 py-5 text-white rounded-lg space-x-4`}
			style={{ backgroundColor: bgColor }}
		>
			{mainIcon}
			<span>
				<h2 className="text-base font-semibold">{title}</h2>{" "}
				<h4 className="flex font-medium text-2xl items-center space-x-2">
					{cash && "$"} {cardNum}
				</h4>
			</span>
		</div>
	);
};

export default WidgetCard;
