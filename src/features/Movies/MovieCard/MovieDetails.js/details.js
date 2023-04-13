import React, { useEffect } from 'react';
import {
    CastCard,
    CastCharacter,
    CastImage,
    CastName,
    CastWrapper,
    DetailsCard,
    DetailsImage,
    DetailsTitle,
    DetailsWrapper,
    Genre,
    GenreContainer,
    ImageWrapper,
    InformationsWrapper,
    Name,
    OverviewText,
    OverviewTitle,
    OverviewWrapper,
    RaitingWrapper,
    SimilarFilmsWrapper,
    Span,
    Star,
    TextDetails,
    Title,
    TitleWrapper,
    Wrapper
} from './styledDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getDetailsByID, selectStatus } from '../FetchPopularMovies/moviesSlice';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import star from '../../../../common/Images/star.svg'
import { fetchGenre, selectGenre } from '../FetchGenres/genreSlice';
import { fetchCredits, selectCast, selectCreditsState } from './FetchCredits/creditsSlice';
import { selectPeople } from '../../../People/PeopleCard/FetchPeople/peopleSlice';

export const Details = () => {
    const imageBackdropURL = 'https://image.tmdb.org/t/p/original';


    const { id } = useParams();
    const movie = useSelector(state => getDetailsByID(state, id));
    const status = useSelector(selectStatus);
    const genres = useSelector(selectGenre);
    const credits = useSelector(selectCast);
    const backDrop = movie ? `${imageBackdropURL}${movie.backdrop_path}` : '';
    const poster = movie ? `${imageBackdropURL}${movie.poster_path}` : '';
    const dispatch = useDispatch();

    const xd = useSelector(selectCreditsState)


    useEffect(() => {
        dispatch(fetchMovies());
        dispatch(fetchGenre());
        dispatch(fetchCredits(id));
    }, [dispatch, id]);

    console.log(xd);




    const getGenreName = (genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
    };




    return (
        <>
            {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
                <Wrapper>
                    <TitleWrapper backDrop={backDrop}>
                        <ImageWrapper backDrop={backDrop}>
                            <Title>{movie.title}</Title>
                            <RaitingWrapper><Star src={star} />{movie.vote_average}</RaitingWrapper>
                        </ImageWrapper>
                    </TitleWrapper>

                    <DetailsWrapper>
                        <DetailsTitle>Movie Details</DetailsTitle>
                        <DetailsCard>
                            <DetailsImage src={poster} />
                            <InformationsWrapper>
                                <Name>{movie.title}</Name>
                                <TextDetails> Relase: <Span> {" "}{movie.release_date} </Span> </TextDetails>
                                <TextDetails> Language: <Span change="true"> {" "}{movie.original_language} </Span> </TextDetails>
                                <GenreContainer>
                                    {movie.genre_ids.map((genre) => (
                                        <Genre key={genre}>{getGenreName(genre)}</Genre>
                                    ))}
                                </GenreContainer>

                                <TextDetails><Star change="true" src={star} />  <Span> {" "}{movie.vote_average} / 10  </Span> </TextDetails>

                                <OverviewWrapper>
                                    <OverviewTitle>Overview </OverviewTitle>
                                    <OverviewText>{movie.overview}</OverviewText>
                                </OverviewWrapper>
                            </InformationsWrapper>
                        </DetailsCard>

                        <DetailsTitle cast>Full Cast</DetailsTitle>

                        <CastWrapper>
                            {credits && credits.map((cast) => (
                                <CastCard to={`/profile/${cast.id}`} key={cast.id} onClick={() => window.scrollTo(0, 0)}>
                                    <CastImage src={`${imageBackdropURL}${cast.profile_path ?? poster}`} />
                                    <CastCharacter>  {cast.character}</CastCharacter>
                                    <CastName>{cast.name}</CastName>
                                </CastCard>
                            ))};
                        </CastWrapper>
                    </DetailsWrapper>

                </Wrapper>
            }
        </>
    );
};