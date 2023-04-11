import React from 'react';
import { CardImage, Genre, GenreWrapper, MovieCardWrapper, MovieTitle, MovieYear, Raiting, Informations, Star, Wrapper } from './styledMovieCard';
import star from '../../../common/Images/star.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMovies, selectStatus } from './FetchPopularMovies/moviesSlice';
import { useEffect } from 'react';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';

export const MovieCard = () => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


    const status = useSelector(selectStatus);
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);




    return (<>
        {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
            <Wrapper>
                {movies.results.map((movie) => (

                    <MovieCardWrapper to="xd" key={movie.id}>
                        <CardImage src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
                        <Informations>

                            <MovieTitle>{movie.original_title}</MovieTitle>
                            <MovieYear> {new Date(movies.results[0].release_date).getFullYear()}</MovieYear>
                            <GenreWrapper>
                                {movie.genre_ids.map((genre) => (
                                    <Genre key={genre}>{genre}</Genre>
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
