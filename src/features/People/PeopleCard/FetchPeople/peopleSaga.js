import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { fetchPeople, fetchPeopleError, fetchPeopleSuccess, selectPage, selectQuery } from "./peopleSlice";
import { GetPeopleByQuery, GetPopularPeople } from "../../../../core/apiCalls";

function* fetchPeopleHandler() {
    try {
        yield delay(500);

        const query = yield select(selectQuery);
        const page = yield select(selectPage);

        const people = yield !query
        ? call(GetPopularPeople, page)
        : call(GetPeopleByQuery, query, page);
        yield put(fetchPeopleSuccess(people));
    } catch (error) {
        yield put(fetchPeopleError(error));
    }
}

export function* peopleSaga() {
    yield takeLatest(fetchPeople.type, fetchPeopleHandler);
};