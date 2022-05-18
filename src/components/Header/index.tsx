

import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import { Button } from '../Button'
import { RoomCode } from '../RoomCode'
import { AdminButtonWrapper, ContentWrapper, HeaderRoom } from './styles'

interface HeaderProps {
    params?: string,
    isAdmin?: boolean,
    handleEndRoom?: () => void
}

export const Header = ({ params, isAdmin, handleEndRoom }: HeaderProps) => {
    return (
        <HeaderRoom>
            <ContentWrapper className="content">
                <Link to={"/"}>
                    <img src={logoImg} alt="Letmeask" />
                </Link>

                <AdminButtonWrapper>
                    <RoomCode code={params} />
                    {isAdmin && <Button onClick={handleEndRoom} isOutlined >Encerrar sala</Button>}
                </AdminButtonWrapper>
            </ContentWrapper>
        </HeaderRoom>
    )
}