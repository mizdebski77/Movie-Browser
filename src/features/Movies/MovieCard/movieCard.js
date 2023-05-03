import React from 'react';
import { CardImage, Genre, GenreWrapper, MovieCardWrapper, MovieTitle, MovieYear, Raiting, Informations, Star, Wrapper } from './styledMovieCard';
import star from '../../../common/Images/star.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMovies, selectStatus, setPage, setQuery } from './FetchPopularMovies/moviesSlice';
import { useEffect } from 'react';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { fetchGenre, selectGenre } from './FetchGenres/genreSlice';
import { CardsIMAGE_BASE_URL } from '../../../core/apiData';
import noPhoto from '../../../common/Images/noPhoto.svg';
import { searchQueryParamName, useQueryParameter } from '../../../core/queryParameters';

export const MovieCard = () => {
    const dispatch = useDispatch();
    const movies = useSelector(selectMovies);
    const genres = useSelector(selectGenre);
    const status = useSelector(selectStatus);
    const page = +useQueryParameter("page");
    const query = useQueryParameter(searchQueryParamName);

    useEffect(() => {
        if (!page) {
            dispatch(setPage(1))
        } else {
            dispatch(setPage(page));
        }
        if (query !== null) {
            dispatch(setQuery(query));
        } else {
            dispatch(setQuery(null));
        }
        
        dispatch(fetchMovies(page, query));
        dispatch(fetchGenre());
    }, [dispatch, page, query]);

    const getGenreName = (genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
    };

    return (<>
        {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
            <Wrapper>
                {movies.map((movie) => (
                    <MovieCardWrapper to={`/movie/${movie.id}`} onClick={() => window.scrollTo(0, 0)} key={movie.id}>
                        <CardImage src={movie.poster_path ? `${CardsIMAGE_BASE_URL}${movie.poster_path}` : noPhoto} />
                        <Informations>
                            <MovieTitle>{movie.original_title}</MovieTitle>
                            <MovieYear>
                                {isNaN(new Date(movie.release_date).getFullYear()) ? "" : new Date(movie.release_date).getFullYear()}
                            </MovieYear>
                            <GenreWrapper>
                                {movie.genre_ids.map((genre) => (
                                    <Genre key={genre}>{getGenreName(genre)}</Genre>
                                ))};
                            </GenreWrapper>
                            <Raiting>
                                <Star src={star} />
                                {movie.vote_average.toFixed(1)} / 10
                            </Raiting>
                        </Informations>

                    </MovieCardWrapper>
                ))}
            </Wrapper>
        }
    </>
    );
};
