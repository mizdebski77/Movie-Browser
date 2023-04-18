import styled, { css } from "styled-components";
import { boxShadow, whiteShadow } from "../../../../core/theme";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    max-width: 1300px;
    margin: 0 auto;
    min-height: 100vh;
    
    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 12px;
    }
`;

export const Card = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 40px;
    border-radius: 10px;
    box-shadow: ${boxShadow};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    text-align: center;
    gap: 40px;
    margin: 40px auto;
    
    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        padding: 16px;
        grid-template-columns: none;
        gap: 12px;
    }
`;

export const Image = styled.img`
    max-width: 320px;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${whiteShadow};
    
    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        margin: 0 auto;
        width: 80%;
    }
`;

export const InformationsWrapper = styled.div`
    display: grid;
    gap: 20px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        gap: 12px;
    }
`;

export const Name = styled.h2`
    font-weight: normal;
    font-size: 36px;
    margin: 0;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    }
`;

export const TextDetails = styled.h3`
    margin:  0;
    text-align: left;
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size:12px;
    }
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.color.fontSecondary};
    ${({ change }) => change && css`
        text-transform: uppercase;
    `};     
`;


export const OverviewWrapper = styled.div`
    display: grid;
`;

export const OverviewTitle = styled.h2`
    font-weight: normal;
    margin-bottom: 0;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.secondColor};

    ${({ cast }) => cast && css`
        margin: 40px 0;
    `};
`;

export const OverviewText = styled.h3`
    color: ${({ theme }) => theme.color.fontSecondary};
    font-weight: normal;
    text-align: left;
    font-weight: normal;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 12px;
    }
`;

export const CastWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: none;
    }
`;

export const CastCard = styled(Link)`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 16px;
    border-radius: 10px;
    box-shadow: ${boxShadow};
    text-decoration: none;
    display: grid;
    gap: 16px;
    transition: 0.5s;

    &:hover{
        transform: scale(1.03);
    }

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        display: flex;
    }

`;

export const CastImage = styled.img`
    max-width: 300px;
    width: 100%;
    box-shadow: ${whiteShadow};
    margin: 0 auto;
    border-radius: 10px;
    min-height: 421px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 40%;
        min-height: 100px;
    }

`;

export const CastTitle = styled.h1`
    color: ${({ theme }) => theme.color.fontPrimary};
    font-weight: normal;
    font-size: 24px;
    margin: 0;
    text-align: center;
`;

export const CastYear = styled.h2`
    font-weight: normal;
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.color.fontSecondary};
`;

export const CastGenresWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 12px;
    align-items: center;
`;

export const Genre = styled.div`
    background: ${({ theme }) => theme.color.fontPrimary};
    padding: 10px;
    border-radius: 10px;
    color: ${({ theme }) => theme.color.fontSecondary};
`;