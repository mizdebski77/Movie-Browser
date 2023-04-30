import React from 'react';
import { Title, Wrapper } from './styledMovies';
import { MovieCard } from './MovieCard/movieCard';
import { Buttons } from '../../common/Buttons/buttons';
import { useSelector } from 'react-redux';
import { selectQuery, selectStatus, selectTotalResuults } from './MovieCard/FetchPopularMovies/moviesSlice';

export const Movies = () => {
    const status = useSelector(selectStatus);
    const query = useSelector(selectQuery);
    const total_results = useSelector(selectTotalResuults);

    return (
        <Wrapper>
            <Title>{!query ? "Popular Movies" : `Search results for "${query}" ${status === "success" ? ` (${total_results})` : ""}`}</Title>
            <MovieCard />
            {status === "success" && <Buttons />}
        </Wrapper>
    );
};
