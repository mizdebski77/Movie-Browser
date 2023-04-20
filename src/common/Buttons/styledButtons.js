import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { lighten } from 'polished';

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    margin-left: 105px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        margin: 0 auto;
    }

`;

export const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: ${({ theme }) => theme.color.fontPrimary};
    padding: 8px 16px;
    min-width: 80px;
    border-radius: 5px;
    font-size: 14px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
        background: ${({ theme }) => lighten(0.1, theme.color.fontPrimary)};
    }
    
    &:disabled {
        filter: opacity(0.7);
        background: ${({ theme }) => theme.color.fontPrimary};
        cursor: no-drop;
        transform: none;
    }

    ${({ scrollTo }) => scrollTo && css`
        color:${({ theme }) => theme.color.fontPrimary};
        background: ${({ theme }) => theme.color.secondColor};

        &:hover {
            background: ${({ theme }) => lighten(0.1, theme.color.secondColor)};
        }
    `};

    @media (max-width: ${({theme}) => theme.breakPoint.hideButtons}px){
        min-width:10px;
        padding: 4px 8px;
    }
`;

export const Span = styled.span`
    @media (max-width:${({ theme }) => theme.breakPoint.hideButtons}px){
       display: none;
    }
`;

export const Page = styled.h3`
    margin: 0 10px 0 10px;
    color: ${({ theme }) => theme.color.secondColor};
    font-weight: normal;

    @media (max-width:${({ theme }) => theme.breakPoint.hideButtons}px){
       margin: 0;
       font-size: 16px;
    }

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px){
       margin: 0;
       font-size: 12px;
    }
`;

export const Arrows = styled(SVG)`
    width: 20px;
    fill: black;

    ${({up}) => up && css`
        fill: ${({ theme }) => theme.color.fontPrimary};
    `};

    @media (max-width:${({ theme }) => theme.breakPoint.hideButtons}px){
       width:24px
    }
`;
