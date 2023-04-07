import styled from "styled-components";

export const Wrapper = styled.footer`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    
    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px){
        flex-direction: column ;
        gap: 16px;
    }
`;

export const Text = styled.h3`
    font-size: 20px;
    font-weight: normal;
    margin: 0;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        font-size: 14px;
    }

`;

