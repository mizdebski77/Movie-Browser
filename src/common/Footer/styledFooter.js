import styled from "styled-components";

export const Wrapper = styled.footer`
    background: ${({ theme }) => theme.color.secondColor};
    padding: 20px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px ;
`;

export const Text = styled.h3`
    font-size: 20px;
    font-weight: normal;
    margin: 0;
`;

