import { FormEvent, useState } from "react";
import { useParams, Params } from "react-router-dom";
import { useRoom } from "../../hooks/useRoom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { useAuth } from "../../hooks/useAuth";

import { database } from "../../services/firebase";
import { ref, set, push, remove } from "firebase/database";

import {
  FormFooter,
  FormRoom,
  LikeButton,
  MainContent,
  QuestionListWrapper,
  RoomTitle,
} from "./styles";

import { UserInfo } from "../../components/UserInfo";
import { Question } from "../../components/Question";

interface RoomParams extends Params {
  id?: string;
}

export const Room = () => {
  const { user } = useAuth();
  const { id } = useParams() as RoomParams;
  const [newQuestion, setNewQuestion] = useState("");

  const roomId = id;

  const { questions, title } = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === "") {
      alert("Questão não pode estar vazia!");
      return;
    }

    if (!user) {
      throw new Error("You must be logged in");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    const roomRef = ref(database, `rooms/${roomId}/questions`);
    const newRoomRef = push(roomRef);

    await set(newRoomRef, question);

    setNewQuestion("");
  }

  async function handleLikeQuestion(questionId: string, likeId?: string) {
    if (likeId) {
      await remove(
        ref(database, `rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
      );
    } else {
      await set(
        push(ref(database, `rooms/${roomId}/questions/${questionId}/likes/`)),
        {
          authorId: user?.id,
        }
      );
    }
  }

  return (
    <div>
      <Header params={roomId} />
      <MainContent>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </RoomTitle>

        <FormRoom>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <FormFooter onSubmit={handleSendQuestion}>
            {user ? (
              <UserInfo image={user.avatar} name={user.name} />
            ) : (
              <span>
                Para enviar uma pergunta, <button>faça seu login</button>.
              </span>
            )}
            <Button
              onClick={handleSendQuestion}
              className={!user ? "disabled" : ""}
              type="submit"
            >
              Enviar pergunta
            </Button>
          </FormFooter>
        </FormRoom>

        <QuestionListWrapper>
          {questions.map((question) => {
            return (
              <Question {...question} key={question.id}>
                {!question.isAnswered && (
                  <>
                    <LikeButton
                      type="button"
                      aria-label="Marcar como gostei"
                      className={question.likedId ? "liked" : ""}
                      onClick={() =>
                        handleLikeQuestion(question.id, question.likedId)
                      }
                    >
                      {question.likeCount > 0 && (
                        <span>{question.likeCount}</span>
                      )}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                          stroke="#737380"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </LikeButton>
                  </>
                )}
              </Question>
            );
          })}
        </QuestionListWrapper>
      </MainContent>
    </div>
  );
};
