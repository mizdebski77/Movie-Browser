import React from 'react';
import { ElementsWrapper, LogoImage, LogoText, LogoWrapper, Wrapper } from './styledNavigation';
import logoImage from '../Images/camera.svg'
export const Navigation = () => {
    return (
        <Wrapper>
            <ElementsWrapper>
                <LogoWrapper>
                    <LogoText>Movies Browser</LogoText>
                    <LogoImage src={logoImage} alt='Logo' />
                </LogoWrapper>
            </ElementsWrapper>
        </Wrapper>
    );
};

