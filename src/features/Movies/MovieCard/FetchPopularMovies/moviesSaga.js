import { GetPopularMovies, GetMoviesByQuery } from "../../../../core/apiCalls";
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess, selectPage, selectQuery } from "./moviesSlice";
import { call, delay, put, select, takeLatest } from "redux-saga/effects";

function* fetchMoviesHandler() {
    try {
        yield delay(500);

        const query = yield select(selectQuery);
        const page = yield select(selectPage);

        const movies = yield !query 
        ? call(GetPopularMovies, page) 
        : call(GetMoviesByQuery, query, page);
        yield put(fetchMoviesSuccess(movies));
        
    } catch (error) {
        yield put(fetchMoviesError(error));
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type,  fetchMoviesHandler);
};