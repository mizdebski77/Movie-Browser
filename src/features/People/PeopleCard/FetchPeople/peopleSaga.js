import { call, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople } from "./API";
import { fetchPeople, fetchPeopleError, fetchPeopleSuccess } from "./peopleSlice";

function* fetchPeopleHandler(action) {
    try {
        const people = yield call(getPopularPeople, action.payload);
        yield put(fetchPeopleSuccess(people));
    } catch (error) {
        yield put(fetchPeopleError(error));
        yield call(console.error);
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
};