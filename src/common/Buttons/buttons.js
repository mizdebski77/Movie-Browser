import React from 'react';
import { Arrows, Button, Page, Wrapper } from './styledButtons';
import rightArrow from '../Images/rightArrow.svg';
import leftArrow from '../Images/leftArrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { firstPage, lastPage, nextPage, prevPage, selectPage, selectTotalPages } from '../../features/Movies/MovieCard/FetchPopularMovies/moviesSlice';

export const Buttons = () => {
    const pageNumber = useSelector(selectPage);
    const pagesNumber = useSelector(selectTotalPages);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(firstPage(pageNumber))} disabled={pageNumber === 1}><Arrows src={leftArrow} />First</Button>
            <Button onClick={() => dispatch(prevPage(pageNumber))} disabled={pageNumber === 1}><Arrows src={leftArrow} />Previous</Button>
            <Page>Page {pageNumber} of {pagesNumber}</Page>
            <Button onClick={() => dispatch(nextPage(pageNumber))} disabled={pageNumber === pagesNumber} >Next<Arrows src={rightArrow} /> </Button>
            <Button onClick={() => dispatch(lastPage(pageNumber))} disabled={pageNumber === pagesNumber} >Last<Arrows src={rightArrow} /> </Button>
        </Wrapper >
    );
};

