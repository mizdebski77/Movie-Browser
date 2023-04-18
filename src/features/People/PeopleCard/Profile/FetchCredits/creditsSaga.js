import { call, delay, put, takeLatest } from "redux-saga/effects";
import { GetPeopleCredits } from "../../../../../core/apiCalls";
import { fetchPersonCredits, fetchPersonCreditsError, fetchPersonCreditsSuccess } from "./creditsSlice";

function* fetchPersonCreditsHandler(action) {
    try {
        yield delay(500);
        const credits = yield call(GetPeopleCredits, action.payload);
        yield put(fetchPersonCreditsSuccess(credits));
    } catch (error) {
        yield put(fetchPersonCreditsError(error));
        yield call(console.error);
    }
}

export function* personCreditsSaga() {
    yield takeLatest(fetchPersonCredits.type, fetchPersonCreditsHandler);
};