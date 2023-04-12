import React from 'react';
import { Arrows, Button, Page, Wrapper } from './styledButtons';
import rightArrow from '../Images/rightArrow.svg';
import leftArrow from '../Images/leftArrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { firstPage, lastPage, nextPage, prevPage, selectMoviesState, selectPage, selectTotalPages } from '../../features/Movies/MovieCard/FetchPopularMovies/moviesSlice';
import { fetchMovies } from '../../features/Movies/MovieCard/FetchPopularMovies/moviesSlice'; // importuj akcję fetchMovies

export const Buttons = () => {
    const pageNumber = useSelector(selectPage);
    const pagesNumber = useSelector(selectTotalPages);

    const dispatch = useDispatch();

    const handleFirstPage = () => {
        dispatch(firstPage());
        dispatch(fetchMovies(pageNumber)); // użyj akcji fetchMovies i przekaż numer aktualnej strony
    }

    const handlePrevPage = () => {
        dispatch(prevPage());
        dispatch(fetchMovies(pageNumber));
    }

    const handleNextPage = () => {
        dispatch(nextPage());
        dispatch(fetchMovies(pageNumber));
    }

    const handleLastPage = () => {
        dispatch(lastPage());
        dispatch(fetchMovies(pageNumber));
    }
    
    return (
        <Wrapper>
            <Button onClick={handleFirstPage} disabled={pageNumber === 1}><Arrows src={leftArrow} />First</Button>
            <Button onClick={handlePrevPage} disabled={pageNumber === 1}><Arrows src={leftArrow} />Previous</Button>
            <Page>Page {pageNumber} of {pagesNumber}</Page>
            <Button onClick={handleNextPage} disabled={pageNumber === pagesNumber} >Next<Arrows src={rightArrow} /> </Button>
            <Button onClick={handleLastPage} disabled={pageNumber === pagesNumber} >Last<Arrows src={rightArrow} /> </Button>
        </Wrapper >
    );
};
