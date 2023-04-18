import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchPeople, fetchPeopleError, fetchPeopleSuccess } from "./peopleSlice";
import { GetPopularPeople } from "../../../../core/apiCalls";

function* fetchPeopleHandler(action) {
    try {
        yield delay (500);
        const people = yield call(GetPopularPeople, action.payload);
        yield put(fetchPeopleSuccess(people));
    } catch (error) {
        yield put(fetchPeopleError(error));
        yield call(console.error);
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
};