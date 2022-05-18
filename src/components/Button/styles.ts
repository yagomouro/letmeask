import styled from "styled-components";

export const Btn = styled.button`
    height: 5rem;
    border-radius: 0.8rem;
    font-weight: 500;
    background: #835afd;
    color: #fff;
    padding: 0 3.2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    &.createRoom {
        background: #ea4335;
        margin-top: 6.4rem;
    }

    &:not(.disabled):hover {
        filter: brightness(0.9);
    }

    &.disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &.outlined {
        background: #fff;
        border: 0.1rem solid #835afd;
        color: #835afd;
    }
`;
