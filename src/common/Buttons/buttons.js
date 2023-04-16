import React from 'react';
import { Arrows, Button, Page, Wrapper } from './styledButtons';
import rightArrow from '../Images/rightArrow.svg';
import leftArrow from '../Images/leftArrow.svg'
import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectTotalPages, setPage } from '../../features/Movies/MovieCard/FetchPopularMovies/moviesSlice';

export const Buttons = () => {
    const pagesNumber = useSelector(selectTotalPages);
    const currentPage = useSelector(selectPage);
    const lastPageNumber = pagesNumber > 500 ? 500 : pagesNumber;

    const dispatch = useDispatch();

    console.log(lastPageNumber);

    return (
        <Wrapper>
            <Button disabled={currentPage === 1} onClick={() => dispatch(setPage(1))}><Arrows src={leftArrow} />First</Button>
            <Button disabled={currentPage === 1} onClick={() => dispatch(setPage(currentPage -1))}><Arrows src={leftArrow} />Previous</Button>
            <Page>Page {currentPage} of {lastPageNumber}</Page>
            <Button disabled={currentPage === lastPageNumber} onClick={() => dispatch(setPage(currentPage + 1))}>Next<Arrows src={rightArrow} /></Button>
            <Button disabled={currentPage === lastPageNumber} onClick={() => dispatch(setPage(lastPageNumber))}>Last<Arrows src={rightArrow} /></Button>
        </Wrapper >
    );
};
