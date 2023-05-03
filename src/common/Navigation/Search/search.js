import React from 'react';
import { Image, Input, Wrapper } from './styledSearch';
import search from '../../Images/search.svg'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { searchQueryParamName, useQueryParameter, useReplaceQueryParameter } from '../../../core/queryParameters';

export const Search = () => {

    const location = useLocation();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const navigate = useNavigate();



    const onInputChange = ({ target }) => {

        if (location.pathname.startsWith("/movies/") && location.pathname.split("/").length === 3) {
            navigate({
                pathname: "/movies",
                search: createSearchParams({ [searchQueryParamName]: target.value }).toString()
            });

        } else {
            replaceQueryParameter({
                key: searchQueryParamName,
                value: target.value.trim() || undefined,
            });
        };
    };






    return (
        <Wrapper>
            <Image src={search} />
            <Input placeholder=
                {location.pathname.includes("people")
                    ? "Search for people"
                    : "Search for movies"}
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>

    );
};

