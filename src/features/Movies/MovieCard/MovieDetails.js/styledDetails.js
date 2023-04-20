import styled, { css } from "styled-components";
import SVG from "react-inlinesvg";
import { boxShadow, whiteShadow } from "../../../../core/theme";
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
    display: grid;
`;

export const TitleWrapper = styled.div`
    height: 770px;
    width: 100%;
    background: ${({ theme }) => theme.color.detailsBackground};
    position: relative;
    display: flex;
    justify-content: center;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        height: 660px;
    };

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        height: 550px;
    };

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        height: 240px;
    };
`;

export const ImageWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    height: 100%;
    position: absolute;
    background-image: ${({ backDrop }) => `url(${backDrop})`};
    background-position: center;
    background-size: cover;
    display:flex;
    flex-direction:column;
    justify-content:flex-end ;
    box-shadow: inset 0px 60px 120px -15px #000, 
                inset -100px 0px 120px -10px #000,
                inset 100px 0px 120px -10px #000,
                inset 0 -180px 180px -10px #000;   
                
    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        box-shadow: inset 0px 10px 80px -5px #000, 
              inset -50px 0px 50px -50px #000,
              inset 50px 0px 50px -50px #000,
              inset 0 -100px 100px -50px #000;  
    }
`;

export const Title = styled.h1`
    z-index: 1;
    color: white;
    font-size: 56px;
    margin: 40px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 24px;
        margin: 0 20px 10px;
    }

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        font-size: 20px;
    }
`;

export const RaitingWrapper = styled.h1`
    display: flex;
    margin: 0 40px 64px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    gap: 20px;
    align-items: center;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        margin: 0 20px 32px ;
        font-size: 20px;
        gap: 12px;
    }

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        font-size: 16px;
        gap: 8px;
    }
`;

export const Star = styled(SVG)`
    width: 40px;

    ${({ change }) => change && css`
        width: 24px;
    `}; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        width:20px;
    }

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        width: 16px;
    }
`;

export const DetailsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
`;

export const DetailsTitle = styled.h1`
    color: ${({ theme }) => theme.color.secondColor};
    margin: 40px 0;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        margin: 20px 0 20px 10px;
        font-size: 24px;
    }
`;

export const DetailsCard = styled.div`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 32px;
    border-radius: 10px;
    box-shadow: ${boxShadow};
    display: grid;
    grid-template-columns: auto 2fr;
    text-align: center;
    gap: 40px;

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        padding: 16px;
        gap: 20px;
    };

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        grid-template-columns: none ;
    };
`;

export const DetailsImage = styled.img`
    max-width: 320px;
    width: 100%;
    border-radius: 10px;
    box-shadow: ${whiteShadow};

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        margin: 0 auto;
        max-width: 200px;
    };  

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        max-width: 300px;
    };      
`;

export const InformationsWrapper = styled.div`
    display: grid;
    gap: 12px;
`;

export const Name = styled.h2`
    font-weight: normal;
    font-size: 36px;
    margin: 0;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        font-size: 28px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 24px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        font-size: 20px;
    }; 
`;

export const TextDetails = styled.h3`
    margin: 0;
    text-align: left;
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        font-size: 16px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 14px;
    }; 
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.color.fontSecondary};
    
    ${({ change }) => change && css`
        text-transform: uppercase;
    `};     
`;

export const GenreContainer = styled.div`
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

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        padding: 6px;
    }; 
`;

export const OverviewWrapper = styled.div`
    display: grid;
`;

export const OverviewTitle = styled.h2`
    font-weight: normal;
    margin-bottom: 0;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        font-size: 20px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 16px;
    }; 
`;

export const OverviewText = styled.h3`
    color: ${({ theme }) => theme.color.fontSecondary};
    font-weight: normal;
    text-align: left;
    font-weight: normal;
    font-size: 20px;
    margin-bottom: 0;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        font-size: 16px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 14px;
    }; 
`;

export const CastWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    margin: auto;
    max-width: 1200px;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        grid-template-columns: repeat(4, 1fr);
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        grid-template-columns: repeat(3, 1fr);
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.smallPhone}px) {
        grid-template-columns: repeat(2, 1fr);
    }; 
`;

export const CastCard = styled(Link)`
    background: ${({ theme }) => theme.color.secondColor};
    display: grid;
    border-radius: 10px;
    padding: 16px;
    gap: 12px;
    box-shadow: ${boxShadow};
    text-align: center;
    text-decoration: none;
    transition: 0.5s;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        padding: 12px;
    }; 

    &:hover{
        transform: scale(1.03);
    }
`;

export const CastImage = styled.img`
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: ${whiteShadow};
`;

export const CastCharacter = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.color.fontPrimary};
    font-size: 24px;
    font-weight: normal;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        font-size: 20px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 16px;
    }; 
`;

export const CastName = styled.h1`
    margin: 0;
    color: ${({ theme }) => theme.color.fontSecondary};
    font-size: 20px;
    font-weight: normal;

    @media (max-width:${({ theme }) => theme.breakPoint.firstBreakPoint}px) {
        font-size: 16px;
    }; 

    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 14px;
    }; 
`;




