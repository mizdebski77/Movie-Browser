import { moviesSaga } from "../features/Movies/MovieCard/FetchPopularMovies/moviesSaga";
import { all } from "redux-saga/effects";
import { peopleSaga } from "../features/People/PeopleCard/FetchPeople/peopleSaga";
import { genresSaga } from "../features/Movies/MovieCard/FetchGenres/genreSaga";
import { profileSaga } from "../features/People/PeopleCard/Profile/FetchPeopleDetails/profileSaga";
import { creditsSaga } from "../features/Movies/MovieCard/MovieDetails.js/FetchCredits/creditsSaga";
import { personCreditsSaga } from "../features/People/PeopleCard/Profile/FetchCredits/creditsSaga";
import { movieDetailsSaga } from "../features/Movies/MovieCard/MovieDetails.js/FetchMovieDetails/movieDetailsSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
        genresSaga(),
        profileSaga(),
        creditsSaga(),
        personCreditsSaga(),
        movieDetailsSaga(),
    ])
}