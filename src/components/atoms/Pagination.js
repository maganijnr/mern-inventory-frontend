import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageClick }) => {
	return (
		<>
			<ReactPaginate
				breakLabel="..."
				nextLabel={<PaginateButton text="Next" />}
				onPageChange={handlePageClick}
				pageRangeDisplayed={4}
				pageCount={pageCount}
				previousLabel={<PaginateButton text="Previous" />}
				renderOnZeroPageCount={null}
				className="py-4 flex items-center justify-end space-x-5"
				activeClassName="text-white px-[6px] rounded-lg bg-secondary-700"
			/>
		</>
	);
};

const PaginateButton = ({ text }) => {
	return (
		<button className="text-white bg-secondary-600 py-2 px-3 font-medium cursor-pointer rounded-lg capitalize">
			{text}
		</button>
	);
};

export default Pagination;
