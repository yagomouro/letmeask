import styled from "styled-components";

export const UserInfoWrapper = styled.div`
    display: flex;
    align-items: center;

    gap: 0.8rem;

    span {
        color: #29292e;
        font-weight: 500;
        font-size: 1.4rem;
    }

    &.otherUser {
        span {
            color: #737380;
        }
    }
`;
export const ImageWrapper = styled.div`
    width: 3.2rem;
    height: 3.2rem;

    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
    }
`;
