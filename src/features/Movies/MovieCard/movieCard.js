import React from 'react';
import { CardImage, Genre, GenreWrapper, MovieCardWrapper, MovieTitle, MovieYear, Raiting, Informations, Star, Wrapper } from './styledMovieCard';
import star from '../../../common/Images/star.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMoviesByQuery, selectStatus } from './FetchPopularMovies/moviesSlice';
import { useEffect } from 'react';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { fetchGenre, selectGenre } from './FetchGenres/genreSlice';
import { useLocation } from 'react-router-dom';

export const MovieCard = () => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

    const location = useLocation();
    const query = (new URLSearchParams(location.search).get("search"));
    const status = useSelector(selectStatus);
    const movies = useSelector((state) => selectMoviesByQuery(state, query));
    const genres = useSelector(selectGenre);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
        dispatch(fetchGenre());
    }, [dispatch]);

    const getGenreName = (genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
    };

    return (<>
        {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
            <Wrapper>
                {movies.map((movie) => (
                    <MovieCardWrapper to={`/movies/${movie.id}`} onClick={() => window.scrollTo(0, 0)} key={movie.id}>
                        <CardImage src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
                        <Informations>

                            <MovieTitle>{movie.original_title}</MovieTitle>
                            <MovieYear>

                                {new Date(movie.release_date).getFullYear()}
                            </MovieYear>
                            <GenreWrapper>
                                {movie.genre_ids.map((genre) => (
                                    <Genre key={genre}>{getGenreName(genre)}</Genre>
                                ))};
                            </GenreWrapper>
                            <Raiting>
                                <Star src={star} />
                                {movie.vote_average} / 10
                            </Raiting>
                        </Informations>

                    </MovieCardWrapper>
                ))}
            </Wrapper>
        }
    </>
    );
};
