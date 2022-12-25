import { createSlice } from "@reduxjs/toolkit";

const savedUser = localStorage.getItem("eubondUser")
	? JSON.parse(localStorage.getItem("eubondUser"))
	: null;

const initialState = {
	isLoggedIn: savedUser ? true : false,
	name: savedUser ? savedUser.name : "",
	user: savedUser ? savedUser : null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		SET_LOGIN(state, action) {
			state.isLoggedIn = action.payload;
		},
		SET_NAME(state, action) {
			state.name = action.payload;
		},
		SAVE_USER(state, action) {
			localStorage.setItem("eubondUser", JSON.stringify(action.payload));
			state.user = action.payload;
		},
		LOGOUT_USER(state, action) {
			localStorage.removeItem("eubondUser");
			state.user = null;
		},
	},
});

export const { SET_LOGIN, SET_NAME, SAVE_USER, LOGOUT_USER } =
	authSlice.actions;

//Exporting an individual stae
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
