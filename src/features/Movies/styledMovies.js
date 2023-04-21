import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1400px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    margin: 48px 0 48px 10px;
    color: ${({ theme }) => theme.color.secondColor};

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        margin: 20px 0 20px 10px;
        font-size: 24px;
    }
`;