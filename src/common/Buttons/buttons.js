import React from 'react';
import { Arrows, Button, Page, Wrapper } from './styledButtons';
import rightArrow from '../Images/rightArrow.svg';
import leftArrow from '../Images/leftArrow.svg'
import { useSelector } from 'react-redux';
import { selectPage, selectTotalPages } from '../../features/Movies/MovieCard/FetchPopularMovies/moviesSlice';

export const Buttons = () => {
    const pagesNumber = useSelector(selectTotalPages);
    const pageNumber = useSelector(selectPage);


    return (
        <Wrapper>
            <Button disabled={pageNumber === 1}><Arrows src={leftArrow} />First</Button>
            <Button disabled={pageNumber === 1}><Arrows src={leftArrow} />Previous</Button>
            <Page>Page {pageNumber} of {pagesNumber}</Page>
            <Button disabled={pageNumber === pagesNumber} >Next<Arrows src={rightArrow} /> </Button>
            <Button disabled={pageNumber === pagesNumber} >Last<Arrows src={rightArrow} /> </Button>
        </Wrapper >
    );
};

