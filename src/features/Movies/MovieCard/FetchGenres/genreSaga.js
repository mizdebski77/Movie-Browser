import { call, put, takeLatest } from "redux-saga/effects";
import { fetchGenre, fetchGenreError, fetchGenreSuccess } from "./genreSlice";
import { GetGenres } from "../../../../core/apiCalls";

function* fethcGenresHandler(action) {
    try {
        const genres = yield call(GetGenres, action.payload);
        yield put(fetchGenreSuccess(genres));
    } catch (error) {
        yield put(fetchGenreError(error));
    }
}

export function* genresSaga() {
    yield takeLatest(fetchGenre.type, fethcGenresHandler);
}