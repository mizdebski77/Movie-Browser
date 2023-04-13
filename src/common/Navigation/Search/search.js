import React from 'react';
import { Image, Input, Wrapper } from './styledSearch';
import search from '../../Images/search.svg'
import { useHistory, useLocation } from 'react-router-dom';

export const Search = () => {

    const location = useLocation();
    const history = useHistory();

    const query = (new URLSearchParams(location.search)).get("search");

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete("search");
        } else {
            searchParams.set("search", target.value);
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    }

    return (
        <Wrapper>
            <Image src={search} />
            <Input value={query || ""} onChange={onInputChange} placeholder='Search for movies' />
        </Wrapper>

    );
};

