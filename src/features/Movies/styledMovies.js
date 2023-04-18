import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100vh;
`;

export const Title = styled.h1`
    margin: 64px 0 64px 10px;
    color: ${({ theme }) => theme.color.secondColor};
`;