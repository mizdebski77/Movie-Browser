import { call, delay, put, takeLatest } from "redux-saga/effects";
import { GetCredits } from "../../../../../core/apiCalls";
import { fetchCredits, fetchCreditsError, fetchCreditsSuccess } from "./creditsSlice";

function* fetchCreditsHandler(action) {
    try {
        yield delay(500);
        const credits = yield call(GetCredits, action.payload);
        yield put(fetchCreditsSuccess(credits));
    } catch (error) {
        yield put(fetchCreditsError(error));
        yield call(console.error);
    }
}

export function* creditsSaga() {
    yield takeLatest(fetchCredits.type, fetchCreditsHandler);
};