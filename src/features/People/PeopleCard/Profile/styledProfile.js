import styled, { css } from "styled-components";
import { boxShadow, whiteShadow } from "../../../../core/theme";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
    max-width: 1300px;
    margin: 0 auto;
    min-height: 100vh;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.secondColor};
    margin: 40px 0;
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
`;

export const Image = styled.img`
    max-width: 320px;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${whiteShadow};
`;

export const InformationsWrapper = styled.div`
    display: grid;
    gap: 12px;
`;

export const Name = styled.h2`
    font-weight: normal;
    font-size: 36px;
    margin: 0;
`;

export const TextDetails = styled.h3`
    margin: 0;
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
    color: ${({ theme }) => theme.color.fontSecondary};
    font-weight: normal;
    text-align: left;
    font-weight: normal;
`;

export const CastWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
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
`;

export const CastImage = styled.img`
    max-width: 300px;
    width: 100%;
    box-shadow: ${whiteShadow};
    margin: 0 auto;
    border-radius: 10px;
    min-height: 421px;
`;

export const CastTitle = styled.h1`
    color: ${({ theme }) => theme.color.fontPrimary};
    font-weight: normal;
    font-size: 20px;
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