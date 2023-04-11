import { moviesSaga } from "../features/Movies/MovieCard/FetchPopularMovies/moviesSaga";
import { all } from "redux-saga/effects";
import { peopleSaga } from "../features/People/PeopleCard/FetchPeople/peopleSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
    ])
}