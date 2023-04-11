import React from 'react';
import { Spinner, Title, Wrapper } from './styledLoader';
import spinner from "../../../../common/Images/spinner.svg"

export const Loader = () => {
    return (
        <Wrapper>
            <Spinner src={spinner} />
            <Title>
                Loading ...
            </Title>
        </Wrapper>
    );
};

