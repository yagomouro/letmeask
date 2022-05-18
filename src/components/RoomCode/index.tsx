import copyImg from '../../assets/images/copy.svg'

import { ButtonWrapper } from './styles'

type RoomCodeProps = {
    code?: string
}

export const RoomCode = (props: RoomCodeProps) => {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code ? props.code : '')
    }

    return (
        <ButtonWrapper onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>
                Sala # {props.code}
            </span>
        </ButtonWrapper>
    )
}