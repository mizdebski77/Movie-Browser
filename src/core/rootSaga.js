import { moviesSaga } from "../features/Movies/MovieCard/FetchPopularMovies/moviesSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
    ])
}