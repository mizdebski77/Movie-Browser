import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Wrapper = styled.section`
    width: 400px;
    background: ${({theme}) => theme.color.mainColor};
    display: grid;
    grid-template-columns: auto 1fr;
    border-radius: 20px;
`;

export const Input = styled.input`
    padding: 12px 12px 12px 0;
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