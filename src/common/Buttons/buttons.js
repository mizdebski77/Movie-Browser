import React from 'react';
import { Arrows, Button, Page, Wrapper } from './styledButtons';
import rightArrow from '../Images/rightArrow.svg';
import leftArrow from '../Images/leftArrow.svg'

export const Buttons = () => {
    return (
        <Wrapper>
            <Button><Arrows src={leftArrow} />First</Button>
            <Button><Arrows src={leftArrow} />Previous</Button>
            <Page>Page 1 of 500</Page>
            <Button>Next<Arrows src={rightArrow} /> </Button>
            <Button>Last<Arrows src={rightArrow} /> </Button>
        </Wrapper>
    );
};

