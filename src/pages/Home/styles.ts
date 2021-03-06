import styled from "styled-components";

export const AuthWrapper = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    .separator {
        font-size: 1.4rem;
        color: #a8a8b3;

        margin: 3.2rem 0;
        display: flex;
        align-items: center;

        &::before {
            content: "";
            flex: 1;
            height: 1px;
            background: #a8a8b3;
            margin-right: 1.6rem;
        }

        &::after {
            content: "";
            flex: 1;
            height: 1px;
            background: #a8a8b3;
            margin-left: 1.6rem;
        }
    }
`;

export const AsideWrapper = styled.aside`
    flex: 7;
    background-color: #835afd;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 12rem 8rem;

    img {
        max-width: 32rem;
    }

    strong {
        font: 700 3.6rem "Poppins", sans-serif;
        line-height: 4.2rem;
        margin-top: 1.6rem;
    }

    p {
        font-size: 2.4rem;
        line-height: 3.2rem;
        margin-top: 1.6rem;
        color: #f8f8f8;
    }
`;

export const MainWrapper = styled.main`
    flex: 8;

    padding: 0 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 32rem;
    align-items: stretch;
    text-align: center;

    > img {
        align-self: center;
    }

    h2 {
        font-size: 2.4rem;
        margin: 6.4rem 0 2.4rem;
        font-family: "Poppins", sans-serif;
    }

    p {
        font-size: 1.4rem;
        color: #737380;
        margin-top: 1.6rem;

        a {
            color: #e559f9;
        }
    }
`;

export const FormRoom = styled.form`
    input {
        height: 5rem;
        border-radius: 0.8rem;
        padding: 0 1.6rem;
        background: #fff;
        border: 1px solid #a8a8b3;
    }

    button {
        margin-top: 1.6rem;
    }

    button,
    input {
        width: 100%;
    }
`;
