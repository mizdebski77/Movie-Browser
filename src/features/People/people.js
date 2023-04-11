import React from 'react';
import { Title, Wrapper } from './styledPeople';
import { PeopleCard } from './PeopleCard/peopleCard';

export const People = () => {
    return (
        <Wrapper>
            <Title>Popular People</Title>
            <PeopleCard />
        </Wrapper>
    );
};
