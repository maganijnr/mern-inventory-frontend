import { createSlice } from "@reduxjs/toolkit";

const name = JSON.parse(localStorage.getItem("name"));

const initialState = {
	isLoggedIn: false,
	name: name ? name : "",
	user: {
		name: "",
		email: "",
		photo: "",
		bio: "",
	},
	userId: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		SET_LOGIN(state, action) {
			state.isLoggedIn = action.payload;
		},
		SET_NAME(state, action) {
			localStorage.setItem("name", JSON.stringify(action.payload));
			state.name = action.payload;
		},
		SAVE_USER(state, action) {
			const profile = action.payload;
			state.user.name = profile.name;
			state.user.email = profile.email;
			state.user.photo = profile.photo;
			state.user.bio = profile.bio;
		},
	},
});

export const { SET_LOGIN, SET_NAME, SAVE_USER } = authSlice.actions;

//Exporting an individual stae
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
