import { call, delay, put, takeLatest } from "redux-saga/effects";
import { GetMovieDetails, } from "../../../../../core/apiCalls";
import { fetchMovieDetails, fetchMovieDetailsError, fetchMovieDetailsSuccess } from "./movieDetailsSlice";

function* fetchMovieDetailsHandler(action) {
    try {
        yield delay(1000);
        const movie = yield call(GetMovieDetails, action.payload);
        yield put(fetchMovieDetailsSuccess(movie));
    } catch (error) {
        yield put(fetchMovieDetailsError(error));
    }
}

export function* movieDetailsSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}