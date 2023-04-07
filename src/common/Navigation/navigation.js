import React from 'react';
import { ElementsWrapper, Links, LinksWrapper, LogoImage, LogoText, LogoWrapper, Wrapper } from './styledNavigation';
import logoImage from '../Images/camera.svg'
import { Search } from './Search/search';
export const Navigation = () => {
    return (
        <Wrapper>
            <ElementsWrapper>
                <LogoWrapper to="/">
                    <LogoText>Movies Browser</LogoText>
                    <LogoImage src={logoImage} alt='Logo' />
                </LogoWrapper>
                <LinksWrapper>
                    <Links exact to="/">Movies</Links>
                    <Links to="/people">People</Links>
                </LinksWrapper>
                <Search />
            </ElementsWrapper>
        </Wrapper>
    );
};

