import React from 'react';
import { ImageContainer, NotFoundImage, Title, Wrapper } from './styledMovies';
import { MovieCard } from './MovieCard/movieCard';
import { Buttons } from '../../common/Buttons/buttons';
import { useSelector } from 'react-redux';
import { selectQuery, selectStatus, selectTotalResuults } from './MovieCard/FetchPopularMovies/moviesSlice';
import notFound from '../../common/Images/no-results.png';

export const Movies = () => {
    const status = useSelector(selectStatus);
    const query = useSelector(selectQuery);
    const total_results = useSelector(selectTotalResuults);

    return (
        <Wrapper>
            {total_results > 0 ? (
                <Title>
                    {!query ? "Popular Movies" : `Search results for "${query}" ${status === "success" ? `(${total_results})` : ""}`}
                </Title>
            ) : (
                <>

                    <Title>{!query ? "Popular Movies" : `Sorry, there are no results for  "${query}"`}</Title>
                    <ImageContainer>
                        <NotFoundImage src={notFound} />
                    </ImageContainer>
                </>
            )}
            <MovieCard />
            {status === "success" && <Buttons />}
        </Wrapper>
    );
};
