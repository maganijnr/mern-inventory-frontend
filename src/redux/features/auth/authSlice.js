import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("eubondUser"));

const initialState = {
	isLoggedIn: false,
	name: savedUser ? savedUser.name : "",
	user: {
		name: savedUser ? savedUser.name : "",
		email: savedUser ? savedUser.email : "",
		photo: savedUser ? savedUser.photo : "",
		bio: savedUser ? savedUser.bio : "",
		token: savedUser ? savedUser.token : "",
		userId: savedUser ? savedUser._id : "",
	},
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
			const profile = action.payload;
			state.user.name = profile.name;
			state.user.email = profile.email;
			state.user.photo = profile.photo;
			state.user.bio = profile.bio;
			state.user.userId = profile._id;
			state.user.token = profile.token;
		},
	},
});

export const { SET_LOGIN, SET_NAME, SAVE_USER } = authSlice.actions;

//Exporting an individual stae
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
