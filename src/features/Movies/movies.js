import React from 'react';
import { Container, Image, Title, Wrapper } from './styledMovies';
import { MovieCard } from './MovieCard/movieCard';
import { Buttons } from '../../common/Buttons/buttons';
import { useSelector } from 'react-redux';
import { selectQuery, selectStatus, selectTotalPages, selectTotalResuults } from './MovieCard/FetchPopularMovies/moviesSlice';
import noResults from '../../common/Images/no-results.png';

export const Movies = () => {
    const status = useSelector(selectStatus);
    const query = useSelector(selectQuery);
    const totalPages = useSelector(selectTotalPages);
    const totalResults = useSelector(selectTotalResuults);

    return (
        <Wrapper>
            {totalResults === 0 && status === "success" ? (
                <Container>
                    <Title>Sorry, there are no results for  "{query}"</Title>
                    {status === "success" && totalResults === 0 && <Image src={noResults} />}
                </Container>
            ) : (
                <Title>
                    {!query ? "Popular Movies" : `Search results for "${query}" ${status === "success" ? `(${totalResults})` : ""}`}
                </Title>
            )}
            <MovieCard />
            {status === "success" && totalResults > 0 && < Buttons totalPages={totalPages} />}
        </Wrapper>
    );
};
