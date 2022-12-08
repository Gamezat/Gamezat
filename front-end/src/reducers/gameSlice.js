import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	games: [],
	loading: true,
};

const APIURL = "https://h5games.online/freegames.json";

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
	try {
		const res = await axios.get(APIURL);
		console.log(res);
		return res.data;
	} catch (err) {
		return err.message;
	}
});

export const gameSlice = createSlice({
	name: "games",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchGames.pending, (state, action) => {
			return { ...state, loading: false };
		});
		builder.addCase(fetchGames.fulfilled, (state, action) => {
			return { ...state, games: action.payload };
		});
	},
});

export default gameSlice.reducer;
