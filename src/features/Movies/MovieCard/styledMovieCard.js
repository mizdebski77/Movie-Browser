import { Link } from "react-router-dom";
import styled from "styled-components";
import { boxShadow } from "../../../core/theme";
import SVG from "react-inlinesvg";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
    padding: 10px;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        grid-template-columns: none;
    }
`;

export const MovieCardWrapper = styled(Link)`
    text-decoration: none;
    width: 100%;
    background: ${({ theme }) => theme.color.secondColor};
    display: grid;
    padding: 16px;
    box-shadow: ${boxShadow};
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.03);
    }

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        display: flex;
    }
`;

export const Informations = styled.div`
    padding: 0 0 0 20px;
        display: grid;
`;

export const CardImage = styled.img`
    width: 100%;
    box-shadow: 0 0 10px white;
    border-radius: 10px;
    
    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 40%;
    }

`;

export const MovieTitle = styled.h2`
    color: ${({ theme }) => theme.color.fontPrimary};
    text-align: center;
    font-size: 20px;
    margin: 16px 0 0 0;
    font-weight: normal;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 16px;
        margin: 0;
        text-align: center;
    }
`;

export const MovieYear = styled.div`
    margin: 20px 0 10px 0;
    color:${({ theme }) => theme.color.fontSecondary};

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 12px;
        text-align: center;
    }
`;

export const GenreWrapper = styled.div`
    margin: 16px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 12px;
    align-items: center;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 10px;
    }
`;

export const Genre = styled.div`
    background: ${({ theme }) => theme.color.fontPrimary};
    padding: 10px;
    border-radius: 10px;
    color: ${({ theme }) => theme.color.fontSecondary};
`;

export const Raiting = styled.h3`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    margin: 20px 0 0 0;
    color: ${({ theme }) => theme.color.fontSecondary};
    font-weight: normal;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 12px;
        justify-content: center;
    }
`;

export const Star = styled(SVG)`
    margin-right: 16px;
    width: 20px;
`;