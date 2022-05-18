import { useParams, Params, useNavigate } from "react-router-dom";
import { useRoom } from "../../hooks/useRoom";

import { Header } from "../../components/Header";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from "../../assets/images/check.svg";
import answerImg from "../../assets/images/answer.svg";

import {
  MainContent,
  QuestionListWrapper,
  RoomTitle,
  QuestionButtonsWrapper,
} from "../Room/styles";

import { Question } from "../../components/Question";
import { ref, remove, update } from "firebase/database";
import { database } from "../../services/firebase";

interface RoomParams extends Params {
  id?: string;
}

export const AdminRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams() as RoomParams;
  const roomId = id;

  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    const roomRef = ref(database, `rooms/${roomId}`);
    const updates = {
      endedAt: new Date(),
    };
    update(roomRef, updates);

    navigate("/");
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir essa pergunta?")) {
      await remove(ref(database, `rooms/${roomId}/questions/${questionId}`));
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    const questionRef = ref(
      database,
      `rooms/${roomId}/questions/${questionId}`
    );
    const updates = {
      isAnswered: true,
    };
    update(questionRef, updates);
  }

  async function handleHighlightQuestion(questionId: string) {
    const questionRef = ref(
      database,
      `rooms/${roomId}/questions/${questionId}`
    );
    const updates = {
      isHighlighted: true,
    };
    update(questionRef, updates);
  }

  return (
    <div>
      <Header handleEndRoom={handleEndRoom} isAdmin params={roomId} />
      <MainContent>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </RoomTitle>

        <QuestionListWrapper>
          {questions.map((question) => {
            return (
              <Question {...question} key={question.id}>
                <QuestionButtonsWrapper>
                  {!question.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          handleCheckQuestionAsAnswered(question.id);
                        }}
                      >
                        <img
                          src={checkImg}
                          alt="Marcar pergunta como respondida"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          handleHighlightQuestion(question.id);
                        }}
                      >
                        <img src={answerImg} alt="Dar destaque à pergunta" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      handleDeleteQuestion(question.id);
                    }}
                  >
                    <img src={deleteImg} alt="Remover pergunta" />
                  </button>
                </QuestionButtonsWrapper>
              </Question>
            );
          })}
        </QuestionListWrapper>
      </MainContent>
    </div>
  );
};
