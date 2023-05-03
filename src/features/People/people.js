import React from 'react';
import { Title, Wrapper } from './styledPeople';
import { PeopleCard } from './PeopleCard/peopleCard';
import { useSelector } from 'react-redux';
import { selectQuery, selectStatus, selectTotalPages } from './PeopleCard/FetchPeople/peopleSlice';
import { Buttons } from '../../common/Buttons/buttons';

export const People = () => {
    const status = useSelector(selectStatus);
    const query = useSelector(selectQuery);
    const totalPages = useSelector(selectTotalPages);

    return (

        <Wrapper>
        {totalPages > 0 ? (
            <Title>
                {!query ? "Popular People" : `Search results for "${query}" ${status === "success" ? `(${totalPages})` : ""}`}
            </Title>
        ) : (
            <Title>{!query ? "Popular People" : `Sorry, there are no results for  "${query}"`}</Title>
        )}
            <PeopleCard />
            {status === "success" && <Buttons totalPages={totalPages} />}
        </Wrapper>
    );
};
