import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Wrapper = styled.section`
    width: 400px;
    background: ${({theme}) => theme.color.mainColor};
    display: grid;
    grid-template-columns: auto 1fr;
    border-radius: 20px;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        width: 100%;
    }
`;

export const Input = styled.input`
    border-radius: 20px;
    color: ${({theme}) => theme.color.inputColor};
    border: none;
    outline: none;
    width: 100%;
    background: ${({theme}) => theme.color.mainColor};
`;

export const Image = styled(SVG)`
    margin: 12px;
`;