import React, { useEffect } from 'react';
import { CastWrapper, DataWrapper, DetailsWrapper, ImageWrapper, RaitingWrapper, SimilarFilmsWrapper, Star, Title, TitleImage, TitleWrapper, Wrapper } from './styledDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getDetailsByID, selectMovies, selectMoviesState, selectStatus } from '../FetchPopularMovies/moviesSlice';
import { Loader } from '../../../../common/Loader/loader';
import { Error } from '../../../../common/Error/error';
import star from '../../../../common/Images/star.svg'
export const Details = () => {
    const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

    const { id } = useParams();
    const movie = useSelector(state => getDetailsByID(state, id));
    const status = useSelector(selectStatus);
    const backDrop = movie ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : '';
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
                    <DataWrapper></DataWrapper>
                    <CastWrapper></CastWrapper>
                    <SimilarFilmsWrapper></SimilarFilmsWrapper>
                </Wrapper>
            }
        </>
    );
};