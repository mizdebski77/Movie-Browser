import styled from "styled-components";
import SVG from "react-inlinesvg";


export const Wrapper = styled.div`
    display: grid;
`;

export const TitleWrapper = styled.div`
    height: 770px;
    width: 100%;
    background: ${({ theme }) => theme.color.detailsBackground};
    position: relative;
    display: flex;
    justify-content: center;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    position: absolute;
    background-image: ${({ backDrop }) => `url(${backDrop})`};
    background-position: center;
    background-size: cover;
    display:flex;
    flex-direction:column;
    justify-content:flex-end ;
    box-shadow: inset 0px 60px 120px -15px #000, 
                inset -100px 0px 120px -10px #000,
                inset 100px 0px 120px -10px #000,
                inset 0 -180px 180px -10px #000;
`;

export const Title = styled.h1`
    z-index: 1;
    color: white;
    font-size: 56px;
    margin: 40px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Star = styled(SVG)`
    width: 40px;
`;

export const RaitingWrapper = styled.h1`
    display: flex;
    margin: 0 40px 40px 40px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    gap: 20px;
    align-items: center;
`;

export const DataWrapper = styled.div`

`;

export const CastWrapper = styled.div``;

export const SimilarFilmsWrapper = styled.div``;

