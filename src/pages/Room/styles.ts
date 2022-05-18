import styled from "styled-components";

export const MainContent = styled.main`
    max-width: 80rem;
    margin: 0 auto;
    padding: 1rem;
`;

export const RoomTitle = styled.div`
    margin: 3.2rem 0 2.4rem;
    display: flex;
    align-items: center;

    h1 {
        font-family: "Poppins", sans-serif;
        font-size: 2.4rem;
        color: #29292e;
    }

    span {
        margin-left: 1.6rem;
        background: #e559f9;
        border-radius: 999.9rem;
        padding: 0.8rem 1.6rem;
        color: #fff;
        font-weight: 500;
        font-size: 1.4rem;
    }
`;

export const FormRoom = styled.form`
    textarea {
        width: 100%;
        border: 0;
        padding: 1.6rem;
        border-radius: 0.8rem;
        background: #fefefe;
        box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.4);
        resize: vertical;
        min-height: 13rem;
    }
`;

export const FormFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.6rem;

    span {
        font-size: 1.4rem;
        color: #737388;
        font-weight: 500;

        button {
            background: transparent;
            border: 0;
            color: #835afd;
            text-decoration: underline;
            font-size: 1.4rem;
            font-weight: 500;
            cursor: pointer;
        }
    }
`;

export const QuestionListWrapper = styled.div`
    margin-top: 3.2rem;
`;

export const LikeButton = styled.button`
    display: flex;
    align-items: flex-end;
    color: #737380;
    gap: 0.8rem;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.7);
    }

    &.liked {
        color: #835afd;
        svg path {
            stroke: #835afd;
        }
    }
`;

export const QuestionButtonsWrapper = styled.div`
    display: flex;
    gap: 1.6rem;
`;
