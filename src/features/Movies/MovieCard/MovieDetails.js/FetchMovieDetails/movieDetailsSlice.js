import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movie",
    initialState: {
        status: "loading",
        movie: [],
    },

    reducers: {
        fetchMovieDetails: (state) => {
            state.status = "loading";
        },

        fetchMovieDetailsSuccess: (state, { payload: movie }) => {
            state.status = "success";
            state.movie = movie;
        },

        fetchMovieDetailsError: (state) => {
            state.status = "error";
        },
    }
});

export const { fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess } = movieDetailsSlice.actions;
export const selectMovieDetailsState = state => state.movieDetails;
export const selectDetailsState = state => selectMovieDetailsState(state).status;

export const selectMovieDetails = state => selectMovieDetailsState(state).movie;

export default movieDetailsSlice.reducer;
