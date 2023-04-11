import React from 'react';
import { ElementsWrapper, Links, LinksContainer, LinksWrapper, LogoImage, LogoText, LogoWrapper, Wrapper } from './styledNavigation';
import logoImage from '../Images/camera.svg'
import { Search } from './Search/search';
export const Navigation = () => {
    return (
        <Wrapper>
            <ElementsWrapper>
                <LinksContainer>
                    <LogoWrapper to="/movies">
                        <LogoText>Movies Browser</LogoText>
                        <LogoImage src={logoImage} alt='Logo' />
                    </LogoWrapper>
                    <LinksWrapper>
                        <Links exact to="/movies">Movies</Links>
                        <Links to="/people">People</Links>
                    </LinksWrapper>
                </LinksContainer>
                <Search />
            </ElementsWrapper>
        </Wrapper>
    );
};

