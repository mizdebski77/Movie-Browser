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


export const Profile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const status = useSelector(selectProfileStatus);
    const profile = useSelector(selectProfile);
    const poster = `${IMAGE_BASE_URL}${profile.profile_path}`;
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
                            <CastCard onClick={() => window.scrollTo(0, 0)} key={movie.id} to={`/movies/${movie.id}`}>
                                <CastImage src={`${IMAGE_BASE_URL}${movie.poster_path ?? poster}`} />
                                <Informations>
                                    <CastTitle>{movie.original_title}</CastTitle>
                                    <CastYear>{new Date(movie.release_date).getFullYear()}</CastYear>
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

