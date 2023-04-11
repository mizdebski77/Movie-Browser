import { getPopularMovies } from "./API";
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess } from "./moviesSlice";
import { call, delay, put, takeLatest } from "redux-saga/effects";

function* fetchMoviesHandler(action) {
    try {
        yield delay(500);
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