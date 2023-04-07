import React from 'react';
import { Text, Wrapper } from './styledFooter';
import { LogoImage, LogoText, LogoWrapper } from '../Navigation/styledNavigation';
import logoImage from '../Images/camera.svg'
export const Footer = () => {
    return (
        <Wrapper>
            <Text> Copyright © 2020 Movie Browser</Text>

            <LogoWrapper to="/">
                <LogoText>Movies Browser</LogoText>
                <LogoImage src={logoImage} alt='Logo' />
            </LogoWrapper>
        </Wrapper>
    );
};

