import React from 'react';
import { Arrows, Button, Page, Span, Wrapper } from './styledButtons';
import rightArrow from '../Images/rightArrow.svg';
import leftArrow from '../Images/leftArrow.svg'
import upArrow from '../Images/upArrow.svg'
import doubleLeft from '../Images/doubleLeft.svg'
import doubleRight from '../Images/doubleRight.svg'

import { useDispatch, useSelector } from 'react-redux';
import { selectPage, selectTotalPages, setPage } from '../../features/Movies/MovieCard/FetchPopularMovies/moviesSlice';

export const Buttons = () => {
    
    const pagesNumber = useSelector(selectTotalPages);
    const page = useSelector(selectPage);
    const lastPageNumber = pagesNumber > 500 ? 500 : pagesNumber;

    const dispatch = useDispatch();


    return (
        <Wrapper>
            <Button disabled={page === 1} onClick={() => dispatch(setPage(1)) && window.scrollTo(0, 0)}><Arrows src={doubleLeft} /><Span>First</Span></Button>
            <Button disabled={page === 1} onClick={() => dispatch(setPage(page - 1)) && window.scrollTo(0, 0)}><Arrows src={leftArrow} /><Span>Previous</Span></Button>
            <Page>Page {page} of {lastPageNumber}</Page>
            <Button disabled={page === lastPageNumber} onClick={() => dispatch(setPage(page + 1)) && window.scrollTo(0, 0)}><Span>Next</Span><Arrows src={rightArrow} /></Button>
            <Button disabled={page === lastPageNumber} onClick={() => dispatch(setPage(lastPageNumber)) && window.scrollTo(0, 0)}><Span>Last</Span><Arrows src={doubleRight} /></Button>
            <Button scrollTo onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })}>
                <Arrows up = "true" src={upArrow}/> <Span >Scroll to top</Span>
            </Button>
        </Wrapper >
       
    );
};
