import React from 'react';
import { Arrows, Button, Page, Wrapper } from './styledButtons';
import rightArrow from '../Images/rightArrow.svg';
import leftArrow from '../Images/leftArrow.svg'
import { useSelector } from 'react-redux';
import { selectPage, selectTotalPages } from '../../features/Movies/MovieCard/FetchPopularMovies/moviesSlice';

export const Buttons = () => {
    const pagesNumber = useSelector(selectTotalPages);
    const currentPage = useSelector(selectPage);


    return (
        <Wrapper>
            <Button disabled={currentPage === 1}><Arrows src={leftArrow} />First</Button>
            <Button disabled={currentPage === 1}><Arrows src={leftArrow} />Previous</Button>
            <Page>Page {currentPage} of {pagesNumber}</Page>
            <Button disabled={currentPage === pagesNumber} >Next<Arrows src={rightArrow} /> </Button>
            <Button disabled={currentPage === pagesNumber} >Last<Arrows src={rightArrow} /> </Button>
        </Wrapper >
    );
};
