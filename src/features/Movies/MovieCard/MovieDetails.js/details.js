import React, { useEffect } from 'react';
import { CastWrapper, DetailsCard, DetailsImage, DetailsTitle, DetailsWrapper, Genre, GenreContainer, ImageWrapper, InformationsWrapper, Name, OverviewText, OverviewTitle, OverviewWrapper, RaitingWrapper, SimilarFilmsWrapper, Span, Star, TextDetails, Title, TitleWrapper, Wrapper } from './styledDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getDetailsByID, selectStatus } from '../FetchPopularMovies/moviesSlice';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import star from '../../../../common/Images/star.svg'
export const Details = () => {
    const imageBackdropURL = 'https://image.tmdb.org/t/p/original';


    const { id } = useParams();
    const movie = useSelector(state => getDetailsByID(state, id));
    const status = useSelector(selectStatus);
    const backDrop = movie ? `${imageBackdropURL}${movie.backdrop_path}` : '';
    const image = movie ? `${imageBackdropURL}${movie.poster_path}` : '';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

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
                            <DetailsImage src={image} />
                            <InformationsWrapper>
                                <Name>{movie.title}</Name>
                                <TextDetails> Relase: <Span> {" "}{movie.release_date} </Span> </TextDetails>
                                <TextDetails> Language: <Span change="true"> {" "}{movie.original_language} </Span> </TextDetails>
                                <GenreContainer>
                                    {movie.genre_ids.map((genre) => (
                                        <Genre key={genre}>{genre}</Genre>
                                    ))}
                                </GenreContainer>
                                <TextDetails><Star change = "true" src={star} />  <Span> {" "}{movie.vote_average} / 10  </Span> </TextDetails>

                                <OverviewWrapper>
                                    <OverviewTitle>Overview </OverviewTitle>
                                    <OverviewText>{movie.overview}</OverviewText>
                                </OverviewWrapper>
                            </InformationsWrapper>
                        </DetailsCard>
                    </DetailsWrapper>
                    <CastWrapper></CastWrapper>
                    <SimilarFilmsWrapper></SimilarFilmsWrapper>
                </Wrapper>
            }
        </>
    );
};