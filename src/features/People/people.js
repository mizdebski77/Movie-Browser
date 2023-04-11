import React from 'react';
import { Title, Wrapper } from './styledPeople';
import { PeopleCard } from './PeopleCard/peopleCard';
import { useSelector } from 'react-redux';
import { selectStatus } from './PeopleCard/FetchPeople/peopleSlice';
import { Buttons } from '../../common/Buttons/buttons';

export const People = () => {
    const status = useSelector(selectStatus);

    return (
        <Wrapper>
            <Title>Popular People</Title>
            <PeopleCard />
            {status === "success" && <Buttons />}
        </Wrapper>
    );
};
