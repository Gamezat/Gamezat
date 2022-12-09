import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import games from "../games.json";
const initialState = {
	games: [],
	currentGame: {
		name: "",
		url: "",
		id: "",
	},
	loading: true,
};

const APIURL = "../games.json";

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
	try {
		const res = await axios({
			method: "get",
			url: APIURL,
			baseURL: "/",
		});
		console.log(res);
		return res.data;
	} catch (err) {
		return err.message;
	}
});

export const gameSlice = createSlice({
	name: "games",
	initialState,
	reducers: {
		addCurrentGame: (state, action) => {
			return { ...state, currentGame: action.payload };
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchGames.pending, (state, action) => {
			return { ...state, loading: false };
		});
		builder.addCase(fetchGames.fulfilled, (state, action) => {
			return { ...state, games: action.payload };
		});
	},
});
export const { addCurrentGame } = gameSlice.actions;

export default gameSlice.reducer;
