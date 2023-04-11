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
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: normal;
    text-align: center;
    color: black;
`;

export const Image = styled(SVG)`
    margin: 0 auto ;
`;