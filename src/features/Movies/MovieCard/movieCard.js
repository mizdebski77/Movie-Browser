import React from 'react';
import { CardImage, Genre, GenreWrapper, MovieCardWrapper, MovieTitle, MovieYear, Raiting, Star, Wrapper } from './styledMovieCard';
import poster from '../../../common/Images/poster.jpg'
import star from '../../../common/Images/star.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectMovies, selectMoviesState, selectStatus } from './FetchPopularMovies/moviesSlice';
import { useEffect } from 'react';

export const MovieCard = () => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


    const status = useSelector(selectStatus);
    const movies = useSelector(selectMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (status === "success") {

        const date = movies.results[0].release_date
        const formatedYear = new Date(date).getFullYear();
        console.log(movies.results[0].genre_ids);

        return (
            <Wrapper>
                {movies.results.map((movie) => (

                    <MovieCardWrapper to="xd" key={movie.id}>
                        <CardImage src={`${IMAGE_BASE_URL}${movie.poster_path}`} />
                        <MovieTitle>{movie.original_title}</MovieTitle>
                        <MovieYear> {formatedYear}</MovieYear>
                        <GenreWrapper>
                            {movie.genre_ids.map((genre) => (
                                <Genre>{genre}</Genre>
                            ))};
                        </GenreWrapper>
                        <Raiting>
                            <Star src={star} />
                            {movie.vote_average} / 10
                        </Raiting>
                    </MovieCardWrapper>
                ))};
            </Wrapper>
        );
    };
}

