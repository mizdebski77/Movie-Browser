import React from 'react';
import { Arrows, Button, Page, Span, Wrapper } from './styledButtons';
import rightArrow from '../Images/rightArrow.svg';
import leftArrow from '../Images/leftArrow.svg'
import upArrow from '../Images/upArrow.svg'
import doubleLeft from '../Images/doubleLeft.svg'
import doubleRight from '../Images/doubleRight.svg'
import { useQueryParameter, useReplaceQueryParameter } from '../../core/queryParameters';

export const Buttons = ({totalPages}) => {

    const queryparam = +useQueryParameter("page");
    const page = queryparam ? queryparam : 1;

    const lastPageNumber = totalPages > 500 ? 500 : totalPages;
    

    const replaceQueryParameter = useReplaceQueryParameter();
    const setPage = (page) => {
        replaceQueryParameter({
            key: "page",
            value: page,
        });
    };
    const firstPage = () => {
        setPage(1);
    };
    const nextPage = () => {
        setPage(page + 1);
    };
    const prevPage = () => {
        setPage(page - 1);
    };
    const lastPage = () => {
        setPage(lastPageNumber);
    };

    return (
        <Wrapper>
            <Button disabled={page === 1} onClick={() => { firstPage(); window.scrollTo(0, 0) }}><Arrows src={doubleLeft} /><Span>First</Span></Button>
            <Button disabled={page === 1} onClick={() => { prevPage(); window.scrollTo(0, 0) }}><Arrows src={leftArrow} /><Span>Previous</Span></Button>
            <Page>Page {page} of {lastPageNumber}</Page>
            <Button disabled={page === lastPageNumber} onClick={() => { nextPage(); window.scrollTo(0, 0) }}><Span>Next</Span><Arrows src={rightArrow} /></Button>
            <Button disabled={page === lastPageNumber} onClick={() => { lastPage(); window.scrollTo(0, 0) }}><Span>Last</Span><Arrows src={doubleRight} /></Button>
            <Button scrollTo onClick={() => window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })}>
                <Arrows up="true" src={upArrow} /> <Span >Scroll to top</Span>
            </Button>
        </Wrapper >

    );
};
