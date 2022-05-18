import styled from "styled-components";

export const QuestionWrapper = styled.div`
    background: #fefefe;
    border-radius: 0.8rem;
    box-shadow: 0 0.2rem 1.2rem rgba(0, 0, 0, 0.4);
    padding: 2.4rem;
    border: 1px solid transparent;
    margin-top: 0.8rem;

    footer {
        margin-top: 2.4rem;
        display: flex;
        justify-content: space-between;

        button {
            background: transparent;
            border: 0;
            cursor: pointer;
        }

        span {
            font-weight: initial;
        }
    }

    &.highlighted {
        background: #f4f0ff;
        border: 1px solid #835afd;

        footer span {
            color: #29292e;
        }
    }

    &.answered {
        background: #d8dcdd;
    }
`;
