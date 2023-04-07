import React from 'react';
import { Image, Input, Wrapper } from './styledSearch';
import search from '../../Images/search.svg'

export const Search = () => {
    return (
        <Wrapper>
            <Image src={search} />
            <Input placeholder='Search for movies'/>
        </Wrapper>

    );
};

