import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople, selectPeople, selectStatus, setPage, setQuery } from './FetchPeople/peopleSlice';
import { useEffect } from 'react';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';
import { CardImage, Name, PersonCard, Wrapper } from './styledPeopleCard';
import { CardsIMAGE_BASE_URL } from '../../../core/apiData';
import noPhoto from '../../../common/Images/noPhoto.svg';
import { searchQueryParamName, useQueryParameter } from '../../../core/queryParameters';

export const PeopleCard = () => {
    const dispatch = useDispatch();
    const page = +useQueryParameter("page");
    const query = useQueryParameter(searchQueryParamName);
    const people = useSelector(selectPeople);
    const status = useSelector(selectStatus);

    useEffect(() => {
        if (!page) {
            dispatch(setPage(1))
        } else {
            dispatch(setPage(page));
        }

        if (query !== null) {
            dispatch(setQuery(query));
        } else {
            dispatch(setQuery(null));
        }

        dispatch(fetchPeople(page, query));
    }, [dispatch, page, query]);

    console.log(people);


    return (
        <>
            {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
                <Wrapper>
                    {people.map((person) => (
                        <PersonCard to={`/profile/${person.id}`} key={person.id} onClick={() => window.scrollTo(0, 0)}>
                            <CardImage src={person.profile_path ? `${CardsIMAGE_BASE_URL}${person.profile_path}` : noPhoto} />
                            <Name>{person.name}</Name>
                        </PersonCard>
                    ))};
                </Wrapper>
            }
        </>
    );
};

