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
    const setPage = (page) => {
        replaceQueryParameter({
            key: "page",
            value: page,
        });
    };

    const onInputChange = ({ target }) => {
        

        if (location.pathname.split("/")[1] === "/movie/:id".split("/")[1]) {
            navigate({
                pathname: "/movies",
                search: createSearchParams({ [searchQueryParamName]: target.value }).toString()
            });

        } else if (location.pathname.split("/")[1] === "/profile/:id".split("/")[1]) {
            navigate({
                pathname: "/people",
                search: createSearchParams({ [searchQueryParamName]: target.value }).toString()
            });

        } else {
            setPage(1); 
            replaceQueryParameter({
                key: searchQueryParamName,
                value: target.value.trim() !== "" ? target.value : "",
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

