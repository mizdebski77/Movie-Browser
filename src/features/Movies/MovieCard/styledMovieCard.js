import { Link } from "react-router-dom";
import styled from "styled-components";
import { boxShadow, whiteShadow } from "../../../core/theme";
import SVG from "react-inlinesvg";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    padding: 10px;
    margin-bottom: 32px;
    
    @media (max-width:${({theme}) => theme.breakPoint.firstBreakPoint}px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    };

    @media (max-width:${({theme}) => theme.breakPoint.mobileMax}px) {
        grid-template-columns: repeat(2, 1fr);
    };

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        grid-template-columns: none;
        gap: 12px;
    };
`;

export const MovieCardWrapper = styled(Link)`
    text-decoration: none;
    background: ${({ theme }) => theme.color.secondColor};
    display: grid;
    padding: 16px;
    box-shadow: ${boxShadow};
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;
    
    &:hover {
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

export const Informations = styled.div`
    display: grid;
    gap: 16px;
    align-items: center;

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        gap: 12px;
        width: 100%;
    };
`;

export const CardImage = styled.img`
    width: 100%;
    max-height: 443px;
    box-shadow: ${whiteShadow};
    border-radius: 10px;
    margin-bottom: 20px;

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        max-width: 132px;
        height: 180px;
        margin-bottom: 0;
    };
`;

export const MovieTitle = styled.h2`
    color: ${({ theme }) => theme.color.fontPrimary};
    text-align: center;
    font-size: 20px;
    margin: 0;
    font-weight: normal;

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        font-size: 16px;
    };
`;

export const MovieYear = styled.div`
    margin: 0;
    color:${({ theme }) => theme.color.fontSecondary};

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        font-size: 12px;
    };
`;

export const GenreWrapper = styled.div`
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

export const Raiting = styled.h3`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    margin: 0;
    gap: 16px;
    color: ${({ theme }) => theme.color.fontSecondary};
    font-weight: normal;

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        font-size: 14px;
        gap: 10px;
    };
`;

export const Star = styled(SVG)`
    width: 20px;

    @media (max-width:${({theme}) => theme.breakPoint.smallPhone}px) {
        width: 14px;
    };
`;