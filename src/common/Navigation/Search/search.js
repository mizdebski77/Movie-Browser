import React from 'react';
import { Image, Input, Wrapper } from './styledSearch';
import search from '../../Images/search.svg'
import { useLocation } from 'react-router-dom';

export const Search = () => {
    const location = useLocation();
    return (
        <Wrapper>
            <Image src={search} />
            <Input placeholder={location.pathname.includes("people") ? "Search for people" : "Search for movies"} />
        </Wrapper>

    );
};

