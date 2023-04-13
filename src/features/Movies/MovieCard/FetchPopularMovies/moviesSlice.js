import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        status: "loading",
        movies: [],
    },

    reducers: {
        fetchMovies: (state,) => {
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

export const { fetchMovies, fetchMoviesError, fetchMoviesSuccess, currentPage } = moviesSlice.actions;
export const selectMoviesState = state => state.movies;

export const selectMovies = state => selectMoviesState(state).movies.results;
export const selectStatus = state => selectMoviesState(state).status;
export const selectTotalPages = state => selectMoviesState(state).movies.total_pages;
export const selectPage = state => selectMoviesState(state).movies.page;

export const getDetailsByID = (state, movieID) => {
    const movies = selectMovies(state);
    if (movies && movies.length > 0) {
        return movies.find(movie => movie.id === parseInt(movieID));
    }
    return undefined;
};

export const selectMoviesByQuery = (state, query) => {
    const movies = selectMovies(state);

    if (!query || query.trim() === "") {
        return movies;
    }
    return movies.filter(({ original_title }) =>
        original_title.toUpperCase().includes(query.trim().toUpperCase())
    );

};

export default moviesSlice.reducer;