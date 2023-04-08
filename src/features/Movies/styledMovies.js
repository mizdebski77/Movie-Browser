import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4 1fr);
`;

export const Title = styled.h1`
    padding: 20px 0 0 10px;
    margin-bottom: 64px;
    color: ${({theme}) => theme.color.secondColor};
`;