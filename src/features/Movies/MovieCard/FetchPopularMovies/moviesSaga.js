import { getPopularMovies } from "./API";
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess } from "./moviesSlice";
import { call, put, takeLatest } from "redux-saga/effects";

function* fetchMoviesHandler(action) {
    try {
        const movies = yield call(getPopularMovies, action.payload);
        yield put(fetchMoviesSuccess(movies));
    } catch (error) {
        yield put(fetchMoviesError(error));
        yield call(console.error);
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler);
};