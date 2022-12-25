import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	products: [],
	product: null,
	totalStoreValue: 0,
	outOfStock: 0,
	categories: [],
};

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		FETCH_PRODUCTS(state, action) {
			state.products = action.payload;
		},
		FETCH_PRODUCT(state, action) {
			state.product = action.payload;
		},
		CALC_STORE_VALUE(state, action) {
			const products = action.payload;

			const array = [];
			products.map((item) => {
				const { price, countInStock } = item;

				const productValue = price * countInStock;

				return array.push(productValue);
			});

			const totalValue = array.reduce((a, b) => {
				return a + b;
			}, 0);
			state.totalStoreValue = totalValue;
		},
		PRODUCTS_OUT_OF_STOCK(state, action) {
			const products = action.payload;

			const outOfStockProducts = products.filter(
				(item) => item.countInStock === 0
			);

			state.outOfStock = outOfStockProducts.length;
		},
		GET_NUM_OF_CATEGORIES(state, action) {
			const products = action.payload;
			const array = [];
			products.map((item) => {
				const { category } = item;

				return array.push(category);
			});

			const uniqueCategory = [...new Set(array)];
			state.categories = uniqueCategory;
		},
	},
});

export const {
	FETCH_PRODUCTS,
	FETCH_PRODUCT,
	CALC_STORE_VALUE,
	PRODUCTS_OUT_OF_STOCK,
	GET_NUM_OF_CATEGORIES,
} = productSlice.actions;

export default productSlice.reducer;
