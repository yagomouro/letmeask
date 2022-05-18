import { ImageWrapper, UserInfoWrapper } from "./styles"

interface UserInfoProps {
    image: string,
    name: string,
    otherUser?: boolean
}

export const UserInfo = (props: UserInfoProps) => {
    return (
        <UserInfoWrapper className={props.otherUser ? 'otherUser' : ''} >
            <ImageWrapper>
                <img src={props.image} alt={props.name} />
            </ImageWrapper>
            <span>{props.name}</span>

        </UserInfoWrapper>
    )
}