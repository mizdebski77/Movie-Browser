import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople, selectPeople, selectStatus } from './FetchPeople/peopleSlice';
import { useEffect } from 'react';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { CardImage, Name, PersonCard, Wrapper } from './styledPeopleCard';
import { selectPage } from '../../Movies/MovieCard/FetchPopularMovies/moviesSlice';
import { IMAGE_BASE_URL } from '../../../core/apiData';
import noPhoto from '../../../common/Images/noPhoto.svg';

export const PeopleCard = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const people = useSelector(selectPeople);
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchPeople(page));
    }, [dispatch, page]);



    return (
        <>
            {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
                <Wrapper>
                    {people.map((person) => (
                        <PersonCard to={`/profile/${person.id}`} key={person.id} onClick={() => window.scrollTo(0, 0)}>
                            <CardImage src={person.profile_path ? `${IMAGE_BASE_URL}${person.profile_path}` : noPhoto} />
                            <Name>{person.name}</Name>
                        </PersonCard>
                    ))};
                </Wrapper>
            }
        </>
    );
};

