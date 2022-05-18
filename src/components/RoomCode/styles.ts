import styled from "styled-components";

export const ButtonWrapper = styled.button`
    height: 4rem;
    border-radius: 0.8rem;
    overflow: hidden;

    background: #fff;
    border: 0.1rem solid #835afd;
    cursor: pointer;

    display: flex;

    transition: filter 0.2s;
    &:not(.disabled):hover {
        filter: brightness(0.9);
    }

    div {
        height: 4.2rem;
        padding: 0 1.2rem;
        background: #835afd;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span {
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 1.6rem 0 1.2rem;
        width: 23rem;
        font-size: 1.4rem;
        font-weight: 500;
    }
`;
