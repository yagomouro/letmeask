import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

import illustrationImg from "../../assets/images/illustration.svg"
import logoImg from '../../assets/images/logo.svg'
import googleIconImage from '../../assets/images/google-icon.svg'

import { Button } from "../../components/Button"

import { AsideWrapper, AuthWrapper, FormRoom, MainContent, MainWrapper } from "./styles"
import { useAuth } from "../../hooks/useAuth"
import { database } from "../../services/firebase"
import { get, ref, child } from "firebase/database"



export const Home = () => {
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth();
    const [roomCode, setRoomCode] = useState('')

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle()
        }

        navigate('/rooms/new')

    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault()

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await get(child(ref(database), `rooms/${roomCode}`));
        if (!roomRef.exists()) {
            alert('Room does not exists.')
            return;
        }

        if (roomRef.val().endedAt) {
            alert('Room already closed')
            setRoomCode('')
            return
        }

        navigate(`/rooms/${roomCode}`)
    }

    return (
        <AuthWrapper id="page-auth">
            <AsideWrapper>
                <img src={illustrationImg} alt="Ilustração simbolizando troca perguntas e respostas" />
                <strong> Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </AsideWrapper>
            <MainWrapper>
                <MainContent>
                    <img src={logoImg} alt="Letmeask" />
                    <Button onClick={handleCreateRoom} className="createRoom">
                        <img src={googleIconImage} alt="Logo do Google" />
                        Crie sua sala com o google
                    </Button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <FormRoom onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </FormRoom>
                </MainContent>
            </MainWrapper>
        </AuthWrapper>
    )
}