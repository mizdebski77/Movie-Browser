import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import moviesReducer from "../features/Movies/MovieCard/FetchPopularMovies/moviesSlice";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },

    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

