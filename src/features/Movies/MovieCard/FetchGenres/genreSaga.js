import { call, put, takeLatest } from "redux-saga/effects";
import { getGenres } from "./API";
import { fetchGenre, fetchGenreError, fetchGenreSuccess } from "./genreSlice";

function* fethcGenresHandler(action) {
    try {
        const genres = yield call(getGenres, action.payload);
        yield put(fetchGenreSuccess(genres));
    } catch (error) {
        yield put(fetchGenreError(error));
    }
}

export function* genresSaga() {
    yield takeLatest(fetchGenre.type, fethcGenresHandler);
}