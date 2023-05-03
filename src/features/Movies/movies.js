import React from 'react';
import {  Title, Wrapper } from './styledMovies';
import { MovieCard } from './MovieCard/movieCard';
import { Buttons } from '../../common/Buttons/buttons';
import { useSelector } from 'react-redux';
import {selectQuery, selectStatus, selectTotalPages } from './MovieCard/FetchPopularMovies/moviesSlice';

export const Movies = () => {
    const status = useSelector(selectStatus);
    const query = useSelector(selectQuery);
    const totalPages = useSelector(selectTotalPages);


    return (
        <Wrapper>
            {totalPages > 0 ? (
                <Title>
                    {!query ? "Popular Movies" : `Search results for "${query}" ${status === "success" ? `(${totalPages})` : ""}`}
                </Title>
            ) : (
                <Title>{!query ? "Popular Movies" : `Sorry, there are no results for  "${query}"`}</Title>
            )}
            <MovieCard />
            {status === "success" && < Buttons totalPages = {totalPages}/>}

               </Wrapper>
    );
};
