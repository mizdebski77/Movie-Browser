import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchProfile, fetchProfileError, fetchProfileSuccess } from "./profileSlice";
import { GetPeopleDetails } from "../../../../../core/apiCalls";

function* fetchProfileHandler(action) {
    try {
        yield delay(500);
        const profile = yield call(GetPeopleDetails, action.payload);
        yield put(fetchProfileSuccess(profile));
    } catch (error) {
        yield put(fetchProfileError(error));
    }
}

export function* profileSaga() {
    yield takeLatest(fetchProfile.type, fetchProfileHandler);
}