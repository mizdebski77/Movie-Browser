import styled, { css } from "styled-components";
import { boxShadow, whiteShadow } from "../../../../core/theme";

export const Wrapper = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;
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
`;

export const Image = styled.img`
    max-width: 320px;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${whiteShadow};
`;  

export const InformationsWrapper = styled.div`
    display: grid;
    gap: 20px;
`;

export const Name = styled.h2`
    font-weight: normal;
    font-size: 36px;
    margin: 0;
`;

export const TextDetails = styled.h3`
    margin:  0;
    text-align: left;
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;
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
`;

export const OverviewText = styled.h3`
    color: ${({theme}) => theme.color.fontSecondary};
    font-weight: normal;
    text-align: left;
    font-weight: normal;
`;
