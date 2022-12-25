import React, { useState } from "react";
import Pagination from "../atoms/Pagination";
import styled from "styled-components";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBinLine } from "react-icons/ri";
import { formatNumbers } from "../../helpers/formatNumbers";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/services/productService";

const RowTable = ({ items, handleDelete }) => {
	const dispatch = useDispatch();

	const itemsPerPage = 5;
	const [itemOffset, setItemOffset] = useState(0);

	const endOffset = itemOffset + itemsPerPage;
	const currentItems = items.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(items.length / itemsPerPage);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length;
		setItemOffset(newOffset);
	};

	const getTotal = (a, b) => {
		return a * b;
	};

	// const handleDelete = async (id) => {
	// 	await dispatch(deleteProduct(id));
	// };
	return (
		<div>
			<TableContainer className="rounded-lg overflow-x-scroll">
				<table className="w-full">
					<thead>
						<HeaderRow className="w-full">
							<NameTableHead>Product Name</NameTableHead>
							<RowTableHead className="text-left">Category</RowTableHead>
							<RowTableHead className="text-left">Quantity</RowTableHead>
							<RowTableHead className="text-left">Price</RowTableHead>
							<RowTableHead className="text-left">Total</RowTableHead>
							<RowTableHead className="text-left">Actions</RowTableHead>
						</HeaderRow>
					</thead>
					<tbody>
						{currentItems &&
							currentItems.map((item) => (
								<tr key={item._id} className="h-[50px]">
									<td>
										<div className="flex items-center pl-1">
											<img
												className="h-10 w-10 rounded-lg object-cover mr-[10px]"
												src={item.image}
												alt={item.name}
											/>
											<h2 className="font-semibold text-lg">
												{item.name}
											</h2>
										</div>
									</td>
									<td className="">{item.category}</td>
									<td className="">{item.countInStock}</td>
									<td className="">
										${formatNumbers(item.price.toFixed(2))}
									</td>
									<td className="">
										$
										{formatNumbers(
											getTotal(
												item.price,
												item.countInStock
											).toFixed(2)
										)}
									</td>
									<td className="flex items-center h-full my-auto space-x-4 py-2">
										<TbEdit
											fontSize={25}
											className="cursor-pointer text-secondary-600"
										/>
										<RiDeleteBinLine
											fontSize={25}
											className="text-red-600 cursor-pointer"
											onClick={() => handleDelete(item._id)}
										/>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</TableContainer>

			<Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
		</div>
	);
};

const TableContainer = styled.div`
	&::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}
`;

const HeaderRow = styled.tr`
	background: #4c713e;
	height: 50px;
	color: #fff;
`;

const NameTableHead = styled.th`
	width: 350px;
	min-width: 250px;
	/* max-width: 300px; */
	text-align: left;
	padding-left: 5px;
`;

const RowTableHead = styled.th`
	width: 150px;
	min-width: 150px;
	text-align: left;
	padding-left: 5px;
`;

export default RowTable;
