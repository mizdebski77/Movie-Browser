import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import moviesReducer from "../features/Movies/MovieCard/FetchPopularMovies/moviesSlice";
import rootSaga from "./rootSaga";
import peopleReducer from '../features/People/PeopleCard/FetchPeople/peopleSlice';
import genresReducer from '../features/Movies/MovieCard/FetchGenres/genreSlice'
import profileReducer from '../features/People/PeopleCard/Profile/FetchPeopleDetails/profileSlice';
import creditsReducer from '../features/Movies/MovieCard/MovieDetails.js/FetchCredits/creditsSlice';
import personCreditsReducer from '../features/People/PeopleCard/Profile/FetchCredits/creditsSlice'
import movieDetailsReducer from '../features/Movies/MovieCard/MovieDetails.js/FetchMovieDetails/movieDetailsSlice'
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        people: peopleReducer,
        genres: genresReducer,
        profile: profileReducer,
        credits: creditsReducer,
        personCredits: personCreditsReducer,
        movieDetails: movieDetailsReducer,
    },

    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

