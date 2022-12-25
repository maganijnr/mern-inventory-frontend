import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DashboardLayout from "../components/layout/DashboardLayout";
import WidgetCard from "../components/molecules/WidgetCard";
import { BsCart4 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteProduct,
	getAllProducts,
} from "../redux/services/productService";
import {
	CALC_STORE_VALUE,
	FETCH_PRODUCTS,
	GET_NUM_OF_CATEGORIES,
	PRODUCTS_OUT_OF_STOCK,
} from "../redux/features/product/productSlice";
import { formatNumbers } from "../helpers/formatNumbers";
import RowTable from "../components/molecules/RowTable";

const HomeScreen = () => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const items = useSelector((state) => state.product);

	const { products, totalStoreValue, outOfStock, categories } = items;

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		if (products.length > 0) {
			dispatch(CALC_STORE_VALUE(products));
			dispatch(PRODUCTS_OUT_OF_STOCK(products));
			dispatch(GET_NUM_OF_CATEGORIES(products));
		}
	}, [dispatch, products]);

	const fetchProducts = async () => {
		setIsLoading(true);
		try {
			const data = await getAllProducts();
			await dispatch(FETCH_PRODUCTS(data));
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	};

	const handleDelete = async (id) => {
		setIsLoading(true);
		try {
			await dispatch(deleteProduct(id));
			const data = await getAllProducts();
			await dispatch(FETCH_PRODUCTS(data));
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	};
	return (
		<DashboardLayout loading={isLoading}>
			<WidgetsContainer className="grid grid-cols-1  md:grid-cols-2 gap-5 xl:grid-cols-4 lg:gap-2">
				<WidgetCard
					title="Total products"
					cardNum={products.length}
					mainIcon={<BsCart4 fontSize={35} />}
					bgColor="#4c713e"
				/>
				<WidgetCard
					title="Total store value"
					cardNum={formatNumbers(totalStoreValue.toFixed(2))}
					mainIcon={<BsCart4 fontSize={35} />}
					bgColor="#4c713e"
					cash={true}
				/>
				<WidgetCard
					title="Out of stock"
					cardNum={outOfStock}
					mainIcon={<BsCart4 fontSize={35} />}
					bgColor="#4c713e"
				/>
				<WidgetCard
					title="All Categories"
					cardNum={categories.length}
					mainIcon={<BsCart4 fontSize={35} />}
					bgColor="#4c713e"
				/>
			</WidgetsContainer>
			<section className="w-full bg-white mt-10 rounded-lg p-5">
				<h2 className="text-2xl font-semibold text-secondary-600">
					Products in Inventory
				</h2>
				<div className="mt-8">
					<RowTable items={products} handleDelete={handleDelete} />
				</div>
			</section>
		</DashboardLayout>
	);
};

export default HomeScreen;

const WidgetsContainer = styled.section`
	&::-webkit-scrollbar {
		width: 0px;
		height: 0px;
	}
`;
