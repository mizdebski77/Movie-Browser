import React from 'react';
import { Container, Image, Title, Wrapper } from './styledPeople';
import { PeopleCard } from './PeopleCard/peopleCard';
import { useSelector } from 'react-redux';
import { selectQuery, selectStatus, selectTotalPages, selectTotalResuults } from './PeopleCard/FetchPeople/peopleSlice';
import { Buttons } from '../../common/Buttons/buttons';
import noResults from '../../common/Images/no-results.png';

export const People = () => {
    const status = useSelector(selectStatus);
    const query = useSelector(selectQuery);
    const totalPages = useSelector(selectTotalPages);
    const totalResults = useSelector(selectTotalResuults)

    return (

        <Wrapper>
            {totalResults > 0 ? (
                <Title>
                    {!query ? "Popular People" : `Search results for "${query}" ${status === "success" ? `(${totalResults})` : ""}`}
                </Title>
            ) : (
                <Container>
                    <Title>{status === "loading" ? `Search results for "${query}"` : `Sorry, there are no results for  "${query}"`}</Title>
                    {status === "success" && <Image src={noResults} />}
                </Container>
            )};
            <PeopleCard />
            {status === "success" && totalResults > 0 && < Buttons totalPages={totalPages} />}
        </Wrapper>
    );
};
