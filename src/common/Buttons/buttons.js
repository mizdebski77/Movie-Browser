import React from 'react';
import { Arrows, Button, Page, Wrapper } from './styledButtons';
import rightArrow from '../Images/rightArrow.svg';
import leftArrow from '../Images/leftArrow.svg'
import { useSelector } from 'react-redux';
import { selectPage, selectTotalPages } from '../../features/Movies/MovieCard/FetchPopularMovies/moviesSlice';

export const Buttons = () => {
    const pageNumber = useSelector(selectPage);
    const pagesNumber = useSelector(selectTotalPages);

    return (
        <Wrapper>
            <Button><Arrows src={leftArrow} />First</Button>
            <Button><Arrows src={leftArrow} />Previous</Button>
            <Page>Page {pageNumber} of {pagesNumber}</Page>
            <Button >Next<Arrows src={rightArrow} /> </Button>
            <Button>Last<Arrows src={rightArrow} /> </Button>
        </Wrapper>
    );
};

