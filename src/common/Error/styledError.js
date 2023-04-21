import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Wrapper = styled.div`
    margin: 25% 0 25% 0 ;
    color: white;
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

export const Image = styled(SVG)`
    margin: 0 auto ;
    width: 150px;
    height: 150px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        width: 100px;
        height: 100px;    
    }
`;