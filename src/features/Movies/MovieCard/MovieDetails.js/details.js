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
    Span,
    Star,
    TextDetails,
    Title,
    TitleWrapper,
    Wrapper
} from './styledDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import star from '../../../../common/Images/star.svg'
import { fetchGenre } from '../FetchGenres/genreSlice';
import { fetchCredits, selectCast } from './FetchCredits/creditsSlice';
import { IMAGE_BASE_URL } from '../../../../core/apiData';
import noPhoto from '../../../../common/Images/noPhoto.svg';
import smallnoPhoto from '../../../../common/Images/noPhoto small.svg';

import { fetchMovieDetails, selectDetailsState, selectMovieDetails } from './FetchMovieDetails/movieDetailsSlice';
import { CardsIMAGE_BASE_URL } from '../../../../core/apiData';

export const Details = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const status = useSelector(selectDetailsState);

    const movie = useSelector(selectMovieDetails);
    const credits = useSelector(selectCast);
    const backDrop = `${IMAGE_BASE_URL}${movie.backdrop_path}`;
    const poster = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` :  noPhoto;


    useEffect(() => {
        dispatch(fetchMovieDetails(id));
        dispatch(fetchGenre());
        dispatch(fetchCredits(id));
    }, [dispatch, id]);


    return (
        <>
            {status === "loading" ? <Loader /> : status === "error" ? <Error /> :
                <Wrapper>

                    <TitleWrapper>
                        <ImageWrapper backDrop={backDrop}>
                            <Title>{movie.title}</Title>
                            <RaitingWrapper><Star src={star} />{movie.vote_average.toFixed(1)}</RaitingWrapper>
                        </ImageWrapper>
                    </TitleWrapper>

                    <DetailsWrapper>
                        <DetailsTitle>Movie Details</DetailsTitle>
                        <DetailsCard>
                            <DetailsImage src={poster} />
                            <InformationsWrapper>
                                <Name>{movie.title && movie.title}</Name>
                                <TextDetails> Relase: <Span> {" "}{movie.release_date} </Span> </TextDetails>
                                <TextDetails> Language: <Span change="true"> {" "}{movie.original_language} </Span> </TextDetails>
                                <GenreContainer>
                                    {movie.genres.map((genre) => (
                                        <Genre key={genre.id}>{genre.name}</Genre>
                                    ))}

                                </GenreContainer>

                                <TextDetails><Star change="true" src={star} />  <Span> {" "}{movie.vote_average.toFixed(1)} / 10  </Span> </TextDetails>

                                <OverviewWrapper>
                                    <OverviewTitle>Overview </OverviewTitle>
                                    <OverviewText>{movie.overview}</OverviewText>
                                </OverviewWrapper>
                            </InformationsWrapper>
                        </DetailsCard>

                        <DetailsTitle>Full Cast</DetailsTitle>

                        <CastWrapper>
                            {credits && credits.map((cast) => (
                                <CastCard to={`/profile/${cast.id}`} key={cast.id} onClick={() => window.scrollTo(0, 0)}>
                                    <CastImage src={cast.profile_path ? `${CardsIMAGE_BASE_URL}${cast.profile_path }` : smallnoPhoto    } />
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