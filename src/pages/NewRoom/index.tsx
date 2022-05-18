import illustrationImg from "../../assets/images/illustration.svg"
import logoImg from '../../assets/images/logo.svg'

import { Button } from "../../components/Button"
import { Link, useNavigate } from 'react-router-dom'


import { AsideWrapper, AuthWrapper, FormRoom, MainContent, MainWrapper } from "../Home/styles"
import { FormEvent, useState } from "react"
import { database } from "../../services/firebase"
import { ref, set, push } from "firebase/database"

import { useAuth } from "../../hooks/useAuth"

export const NewRoom = () => {

    const navigate = useNavigate();

    const { user } = useAuth();

    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault()

        if (newRoom.trim() === '') {
            alert('Digite um nome para a sala')
            return
        }

        const roomRef = ref(database, "rooms")
        const newRoomRef = push(roomRef)

        await set(newRoomRef, {
            title: newRoom,
            authorId: user?.id
        })

        navigate(`/rooms/${newRoomRef.key}`)

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
                    <h2>Criar uma nova sala</h2>
                    <FormRoom onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </FormRoom>
                    <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                </MainContent>
            </MainWrapper>
        </AuthWrapper>
    )
}