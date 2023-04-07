import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px;
    position: sticky;
    top: 0;
    z-index: 10;
`;

export const ElementsWrapper = styled.section`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 100%;
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

export const LinksWrapper = styled.section`
    width: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    gap: 20px;
    align-items: center;
`;

const activeLink = "active";

export const Links = styled(NavLink)`
    color: ${({ theme }) => theme.color.fontSecondary};
    text-decoration: none;
    font-size: 20px;

    &.${activeLink} {
        color: ${({ theme }) => theme.color.fontPrimary};
        border-bottom: 1px solid ${({ theme }) => theme.color.fontPrimary};
        border-radius: 100px;
    }
`;