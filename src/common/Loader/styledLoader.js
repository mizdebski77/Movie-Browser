import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Wrapper = styled.section`
    margin: 10% 0 25% 0 ;
    display: grid;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 29vh;
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: normal;
    text-align: center;
    color: black;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 24px;
    }
`;

export const Spinner = styled(SVG)`
    margin: 0 auto ;
    stroke: ${({ theme }) => theme.color.secondColor};
    animation: spinner 1.5s linear infinite;
    width: 160px;
    height: 160px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        width: 100px;
        height: 100px;    
    }

    @keyframes spinner {
        0% {
        transform: rotate(0deg);
    }
        100% {
        transform: rotate(360deg);
    }
}`;