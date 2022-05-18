import styled from "styled-components";

export const HeaderRoom = styled.header`
    padding: 2.4rem;
    border-bottom: 0.1rem solid #e2e2e2;
`;

export const ContentWrapper = styled.div`
    max-width: 112rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        max-height: 4.5rem;
    }
`;

export const AdminButtonWrapper = styled.div`
    display: flex;
    gap: 1.6rem;
    justify-content: center;
    align-items: center;

    button {
        height: 4rem;
    }
`;
