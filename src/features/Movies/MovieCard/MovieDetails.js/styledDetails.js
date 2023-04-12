import styled from "styled-components";
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';


export const Wrapper = styled.div`
    max-width: 1400px;
    display: grid;
    margin: 0 auto;
    min-height: 200vh;
`;

export const TitleWrapper = styled.div`
    background-image: ${({ backDrop }) => `url(${backDrop})`};
    background-size:cover;
    background-position:center;
`;

export const DataWrapper = styled.div`

`;  

export const CastWrapper = styled.div`

`;

export const SimilarFilmsWrapper = styled.div`

`;

