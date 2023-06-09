import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100vh;
`;

export const Title = styled.h1`
    margin: 48px 0 48px 10px;
    color: ${({ theme }) => theme.color.secondColor};

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        margin: 20px 0 20px 10px;
        font-size: 20px;
    }
`;

export const Container = styled.div`
    display: grid;
    gap: 20%;
`;

export const Image = styled.img`
    width: 400px;
    margin: 0 auto;

    @media (max-width:${({theme}) => theme.breakPoint.mobileMax}px) {
        width: 200px;
    }
`;


