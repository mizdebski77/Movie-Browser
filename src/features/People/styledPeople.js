import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1400px;
    margin: 0 auto;
    min-height: 100vh;
`;

export const Title = styled.h1`
    padding: 20px 0 0 10px;
    margin-bottom: 64px;
    color: ${({theme}) => theme.color.secondColor};
    
    @media (max-width:${({theme}) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
        margin-bottom: 10px;
    }
`;