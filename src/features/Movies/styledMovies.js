import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1400px;
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4 1fr);
`;

export const Title = styled.h1`
    padding: 20px;
    color: ${({theme}) => theme.color.secondColor};
`;