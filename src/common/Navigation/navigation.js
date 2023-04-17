import React from 'react';
import { ElementsWrapper, Links, LinksContainer, LinksWrapper, LogoImage, LogoText, LogoWrapper, Wrapper } from './styledNavigation';
import logoImage from '../Images/camera.svg'
import { Search } from './Search/search';
import { useDispatch } from 'react-redux';
import { setPage } from '../../features/Movies/MovieCard/FetchPopularMovies/moviesSlice';
export const Navigation = () => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <ElementsWrapper>
                <LinksContainer>
                    <LogoWrapper onClick={() => dispatch(setPage(1))} to="/movies">
                        <LogoText>Movies Browser</LogoText>
                        <LogoImage src={logoImage} alt='Logo' />
                    </LogoWrapper>
                    <LinksWrapper>
                        <Links onClick={() => dispatch(setPage(1))} exact to="/movies">Movies</Links>
                        <Links onClick={() => dispatch(setPage(1))} to="/people">People</Links>
                    </LinksWrapper>
                </LinksContainer>
                <Search />
            </ElementsWrapper >
        </Wrapper >
    );
};

