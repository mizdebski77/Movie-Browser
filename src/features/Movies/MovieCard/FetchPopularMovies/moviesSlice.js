import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        status: "loading",
        movies: [],
    },

    reducers: {
        fetchMovies: (state) => {
            state.status = "loading";
        },

        fetchMoviesSuccess: (state, { payload: movies }) => {
            state.status = "success";
            state.movies = movies;
        },

        fetchMoviesError: (state) => {
            state.status = "error";
        },
    }
});

export const { fetchMovies, fetchMoviesError, fetchMoviesSuccess } = moviesSlice.actions;
export const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies;
export const selectStatus = state => selectMoviesState(state).status;

export default moviesSlice.reducer;