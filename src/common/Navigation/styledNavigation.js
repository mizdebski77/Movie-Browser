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
    justify-content: space-between;
    margin: 0 40px;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        flex-direction: column;
        gap: 20px;
        margin: 0;

    }
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    
    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        width: 100%;
    }
`;

export const LogoWrapper = styled(Link)`
    color: ${({ theme }) => theme.color.fontPrimary};
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    align-items: center;
    text-decoration: none;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        gap: 10px;
    }
`;

export const LogoText = styled.div`
    font-size: 24px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 12px;
    }
`;

export const LogoImage = styled.img`
    width: 40px;
    color: white;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        width: 24px;
    }
`;

export const LinksWrapper = styled.section`
    width: 200px;
    display: grid;
    grid-template-columns: 40% 40%;
    text-align: center;
    gap: 20px;
    align-items: center;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        gap: 10px;
        justify-content: end;
    }
`;

const activeLink = "active";

export const Links = styled(NavLink)`
    color: ${({ theme }) => theme.color.fontSecondary};
    text-decoration: none;
    font-size: 20px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 14px;
    }

    &.${activeLink} {
        color: ${({ theme }) => theme.color.fontPrimary};
        border-bottom: 1px solid ${({ theme }) => theme.color.fontPrimary};
        border-radius: 100px;
    }
`;