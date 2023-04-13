import React, { useEffect } from 'react';
import { Wrapper } from './styledProfile';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople, getProfileByID, selectPeople, selectStatus } from '../FetchPeople/peopleSlice';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';


export const Profile = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const status = useSelector(selectStatus)

    const person = useSelector(state => getProfileByID(state, id));

    useEffect(() => {
        dispatch(fetchPeople());
    }, [dispatch])
    

    return (
        <>
            {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
                <Wrapper>
                    {person.name}
                </Wrapper>
            }
        </>
    );
};

