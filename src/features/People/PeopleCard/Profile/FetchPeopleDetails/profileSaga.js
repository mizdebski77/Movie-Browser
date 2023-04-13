import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPeopleDetails } from "./API";
import { fetchProfile, fetchProfileError, fetchProfileSuccess } from "./profileSlice";

function* fetchProfileHandler(action) {
    try {
        yield delay(500);
        const profile = yield call(getPeopleDetails, action.payload);
        yield put(fetchProfileSuccess(profile));
    } catch (error) {
        yield put(fetchProfileError(error));
    }
}

export function* profileSaga() {
    yield takeLatest(fetchProfile.type, fetchProfileHandler);
}