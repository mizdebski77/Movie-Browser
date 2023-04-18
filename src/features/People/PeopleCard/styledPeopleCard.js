import { Link } from "react-router-dom";
import styled from "styled-components";
import { boxShadow } from "../../../core/theme";

export const Wrapper = styled.main`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 28px;
    padding: 10px;
`;

export const PersonCard = styled(Link)`
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
`;

export const CardImage = styled.img`
    width: 100%;
    box-shadow: 0 0 10px white;
    border-radius: 10px;
`;

export const Name = styled.h2`
    color: ${({ theme }) => theme.color.fontPrimary};
    text-align: center;
    font-size: 20px;
    margin: 16px 0 0 0;
    font-weight: normal;
`;
