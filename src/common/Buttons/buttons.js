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



    return (
        <Wrapper>
            {/* <Button disabled={currentPage === 1} onClick={() => dispatch(setPage(1)) && window.scrollTo(0, 0)}><Arrows src={leftArrow} />First</Button>
            <Button disabled={currentPage === 1} onClick={() => dispatch(setPage(currentPage - 1)) && window.scrollTo(0, 0)}><Arrows src={leftArrow} />Previous</Button>
            <Page>Page {currentPage} of {lastPageNumber}</Page>
            <Button disabled={currentPage === lastPageNumber} onClick={() => dispatch(setPage(currentPage + 1)) && window.scrollTo(0, 0)}>Next<Arrows src={rightArrow} /></Button>
            <Button disabled={currentPage === lastPageNumber} onClick={() => dispatch(setPage(lastPageNumber)) && window.scrollTo(0, 0)}>Last<Arrows src={rightArrow} /></Button>
            <Button scrollTo onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })}> Scroll to top
            </Button> */}
        </Wrapper >
    );
};
