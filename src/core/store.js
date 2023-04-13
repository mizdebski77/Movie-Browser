import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import moviesReducer from "../features/Movies/MovieCard/FetchPopularMovies/moviesSlice";
import rootSaga from "./rootSaga";
import peopleReducer from '../features/People/PeopleCard/FetchPeople/peopleSlice';
import genresReducer from '../features/Movies/MovieCard/FetchGenres/genreSlice'
import profileReducer from '../features/People/PeopleCard/Profile/FetchPeopleDetails/profileSlice';
import creditsReducer from '../features/Movies/MovieCard/MovieDetails.js/FetchCredits/creditsSlice';
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        people: peopleReducer,
        genres: genresReducer,
        profile: profileReducer,
        credits: creditsReducer,
    },

    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

