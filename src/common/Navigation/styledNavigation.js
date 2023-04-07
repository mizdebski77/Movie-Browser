import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.main`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const ElementsWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    margin: 0 80px 0 0 ;
`;

export const LogoWrapper = styled(Link)`
    color: ${({ theme }) => theme.color.fontPrimary};
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: center;
    text-decoration: none;
`;

export const LogoText = styled.div`
    font-size: 24px;
`;

export const LogoImage = styled.img`
    width: 40px;
    color: white;
`;