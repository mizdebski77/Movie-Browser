import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople, selecPeopleByQuery, selectStatus } from './FetchPeople/peopleSlice';
import { useEffect } from 'react';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { CardImage, Name, PersonCard, Wrapper } from './styledPeopleCard';
import { selectPage } from '../../Movies/MovieCard/FetchPopularMovies/moviesSlice';
import { useLocation } from 'react-router-dom';

export const PeopleCard = () => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
    const dispatch = useDispatch();

    const location = useLocation();
    const query = (new URLSearchParams(location.search).get("search"));
    const page = useSelector(selectPage);
    const people = useSelector((state) => selecPeopleByQuery(state, query));
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchPeople(page));
    }, [dispatch, page]);

    console.log(people);

    return (
        <>
            {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
                <Wrapper>
                    {people.map((person) => (
                        <PersonCard to={`/profile/${person.id}`} key={person.id} onClick={() => window.scrollTo(0, 0)}>
                            <CardImage src={`${IMAGE_BASE_URL}${person.profile_path}`} />
                            <Name>{person.name}</Name>
                        </PersonCard>
                    ))};
                </Wrapper>
            }
        </>
    );
};

