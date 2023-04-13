import React, { useEffect } from 'react';
import { Card, Image, InformationsWrapper, Name, Span, OverviewWrapper, OverviewText, OverviewTitle, TextDetails, Wrapper } from './styledProfile';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import { fetchProfile, selectProfile, selectProfileStatus } from './FetchPeopleDetails/profileSlice';
import { fetchPersonCredits } from './FetchCredits/creditsSlice';


export const Profile = () => {
    const imageBackdropURL = 'https://image.tmdb.org/t/p/original';

    const { id } = useParams();
    const dispatch = useDispatch();
    const status = useSelector(selectProfileStatus);
    const profile = useSelector(selectProfile);
    const poster = `${imageBackdropURL}${profile.profile_path}`;

    useEffect(() => {
        dispatch(fetchProfile(id));
        dispatch(fetchPersonCredits(id));
    }, [dispatch, id])


    return (
        <>
            {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
                <Wrapper>
                    <Card>
                        <Image src={poster} />
                        <InformationsWrapper>
                            <Name>{profile.name}</Name>
                            <TextDetails>Date of birth: <Span>{profile.birthday}</Span></TextDetails>
                            <TextDetails>Place of birth: <Span>{profile.place_of_birth}</Span></TextDetails>
                            <TextDetails>Profession:<Span>{profile.known_for_department}</Span></TextDetails>


                            <OverviewWrapper>
                                <OverviewTitle>Overview </OverviewTitle>
                                <OverviewText>{profile.biography}</OverviewText>
                            </OverviewWrapper>
                        </InformationsWrapper>
                    </Card>
                </Wrapper>
            }
        </>
    );
};

