import styled, { css } from "styled-components";
import { boxShadow, whiteShadow } from "../../../../core/theme";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    max-width: 1300px;
    margin: 0 auto;
    min-height: 100vh;
    padding: 10px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.secondColor};
    margin: 40px 0;

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        margin: 20px 0 20px 10px;
        font-size: 24px;
    }
`;

export const Card = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 32px;
    border-radius: 10px;
    box-shadow: ${boxShadow};
    display: grid;
    grid-template-columns: auto 2fr;
    text-align: center;
    gap: 40px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        padding: 16px;
        gap: 20px;
    };

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        grid-template-columns: none ;
        padding: 16px;
        gap: 20px;
    };
`;

export const Image = styled.img`
    max-width: 320px;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${whiteShadow};

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        margin: 0 auto;
        max-width: 200px;
    };  

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        max-width: 240px;
    }; 
`;

export const InformationsWrapper = styled.div`
    display: grid;
    gap: 12px;
`;

export const Name = styled.h2`
    font-weight: normal;
    font-size: 36px;
    margin: 0;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        font-size: 28px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 24px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        font-size: 20px;
    }; 
`;

export const TextDetails = styled.h3`
    margin: 0;
    text-align: left;
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        font-size: 16px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 14px;
    }; 
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

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        font-size: 20px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 16px;
    }; 
`;

export const OverviewText = styled.h3`
    color: ${({ theme }) => theme.color.fontSecondary};
    font-weight: normal;
    text-align: left;
    font-weight: normal;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        font-size: 16px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 14px;
    }; 
`;



export const CastWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        grid-template-columns: repeat(3, 1fr);
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        grid-template-columns: repeat(2, 1fr);
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        grid-template-columns: none;
    }; 
`;

export const CastCard = styled(Link)`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 16px;
    border-radius: 10px;
    box-shadow: ${boxShadow};
    text-decoration: none;
    display: grid;
    transition: 0.5s;
    gap: 16px;

    &:hover{
        transform: scale(1.03);

        @media (max-width:${({theme}) => theme.breakPoint.mobileMax}px) {
        transform: scale(1);
    };
    }

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        display: flex;
        gap: 16px;
        padding: 12px;
    };
`;

export const CastImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 410px;
    box-shadow: ${whiteShadow};
    border-radius: 10px;

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        max-width: 132px;
        height: 180px;
        margin-bottom: 0;
    };
`;

export const CastTitle = styled.h1`
    color: ${({ theme }) => theme.color.fontPrimary};
    font-weight: normal;
    font-size: 20px;
    margin: 0;
    text-align: center;

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        font-size: 16px;
    };
`;

export const CastYear = styled.h2`
    font-weight: normal;
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.color.fontSecondary};

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        font-size: 12px;
    };
`;

export const CastGenresWrapper = styled.div`
    min-height: 80px;
    display: flex;
    flex-wrap: wrap;
    align-items:flex-start;
    gap: 10px;
    font-size: 12px;
`;

export const Genre = styled.div`
    background: ${({ theme }) => theme.color.fontPrimary};
    padding: 10px;
    border-radius: 10px;
    color: ${({ theme }) => theme.color.fontSecondary};

    @media (max-width: ${({theme}) => theme.breakPoint.smallPhone}px) {
        padding: 8px;
        font-size: 12px;
    }
`;