import React, { useEffect } from 'react';
import { Card, Image, InformationsWrapper, Name, Span, OverviewWrapper, OverviewText, OverviewTitle, TextDetails, Wrapper, CastWrapper, CastCard, CastImage, CastTitle, CastGenresWrapper, Genre, CastYear, Title } from './styledProfile';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import { fetchProfile, selectProfile, selectProfileStatus } from './FetchPeopleDetails/profileSlice';
import { fetchPersonCredits } from './FetchCredits/creditsSlice';
import { selectCast } from './FetchCredits/creditsSlice';
import { fetchGenre, selectGenre } from '../../../Movies/MovieCard/FetchGenres/genreSlice';
import { IMAGE_BASE_URL } from '../../../../core/apiData';
import { Informations } from '../../../Movies/MovieCard/styledMovieCard';
import { CardsIMAGE_BASE_URL } from '../../../../core/apiData';
import noPhoto from '../../../../common/Images/noPhoto.svg';
import smalNoPhoto from '../../../../common/Images/noPhoto small.svg'

export const Profile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const status = useSelector(selectProfileStatus);
    const profile = useSelector(selectProfile);
    const poster = profile.profile_path ? `${IMAGE_BASE_URL}${profile.profile_path}` : noPhoto ;
    const cast = useSelector(selectCast)
    const genres = useSelector(selectGenre);

    useEffect(() => {
        dispatch(fetchProfile(id));
        dispatch(fetchPersonCredits(id));
        dispatch(fetchGenre());
    }, [dispatch, id]);

    const getGenreName = (genreID) => {
        const genre = genres.find((genre) => genre.id === genreID);
        return genre ? genre.name : "";
    };



    return (
        <>
            {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
                <Wrapper>
                    <Title>Overview</Title>
                    <Card>
                        <Image src={poster} />
                        <InformationsWrapper>
                            <Name>{profile.name}</Name>
                            <TextDetails>Date of birth: <Span>{profile.birthday}</Span></TextDetails>
                            <TextDetails>Place of birth: <Span>{profile.place_of_birth}</Span></TextDetails>
                            <TextDetails>Profession:<Span>{profile.known_for_department}</Span></TextDetails>


                            <OverviewWrapper>
                                <OverviewTitle>Biography </OverviewTitle>
                                <OverviewText>{profile.biography}</OverviewText>
                            </OverviewWrapper>
                        </InformationsWrapper>
                    </Card>
                    <Title cast>Movies - cast</Title>

                    <CastWrapper>
                        {cast && cast.map((movie) => (
                            <CastCard onClick={() => window.scrollTo(0, 0)} key={movie.id} to={`/movie/${movie.id}`}>
                                <CastImage src={movie.poster_path ? `${CardsIMAGE_BASE_URL}${movie.poster_path}` : smalNoPhoto } />
                                <Informations>
                                    <CastTitle>{movie.original_title}</CastTitle>
                                    <CastYear>
                                        {isNaN(new Date(movie.release_date).getFullYear()) ? "" : new Date(movie.release_date).getFullYear()}
                                    </CastYear>
                                    <CastGenresWrapper>
                                        {movie.genre_ids.map((castGenre) => (
                                            <Genre key={castGenre}>{getGenreName(castGenre)}</Genre>
                                        ))}
                                    </CastGenresWrapper>
                                </Informations>

                            </CastCard>
                        ))};

                    </CastWrapper>
                </Wrapper>
            }
        </>
    );
};

