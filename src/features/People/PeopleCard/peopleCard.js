import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople, selectPeople, selectStatus } from './FetchPeople/peopleSlice';
import { useEffect } from 'react';

export const PeopleCard = () => {
    const dispatch = useDispatch();
    const people = useSelector(selectPeople);

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch]);

    console.log(people);


    return (
        <div>

        </div>
    );
};

