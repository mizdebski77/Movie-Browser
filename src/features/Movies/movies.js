import React from 'react';
import { Title, Wrapper } from './styledMovies';
import { MovieCard } from './MovieCard/movieCard';
import { Buttons } from '../../common/Buttons/buttons';
import { useSelector } from 'react-redux';
import { selectStatus } from './MovieCard/FetchPopularMovies/moviesSlice';

export const Movies = () => {
    const status = useSelector(selectStatus);

    return (
        <Wrapper>
            <Title>Popular Movies</Title>
            <MovieCard />
            {status === "success" && <Buttons />}
        </Wrapper>
    );
};
