import React from 'react';
import { Title, Wrapper } from './styledMovies';
import { MovieCard } from './MovieCard/movieCard';

export const Movies = () => {
    return (
        <Wrapper>
            <Title>Popular Movies</Title>
            <MovieCard />
        </Wrapper>
    );
};
