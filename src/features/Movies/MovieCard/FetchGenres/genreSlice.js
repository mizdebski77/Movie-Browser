import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        status: "loading",
        genres: [],
    },

    reducers: {
        fetchGenre: (state) => {
            state.status = "loading";
        },

        fetchGenreSuccess: (state, { payload: genres }) => {
            state.status = "success";
            state.genres = genres;
        },

        fetchGenreError: (state) => {
            state.status = "error";
        },
    }
});

export const { fetchGenre, fetchGenreError, fetchGenreSuccess } = genresSlice.actions;

export const selectGenre = state => state.genres.genres.genres;


export default genresSlice.reducer;