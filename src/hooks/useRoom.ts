import { off, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { IQuestion } from "../types/IQuestion";
import { useAuth } from "./useAuth";

interface IQuestionFirebase extends IQuestion {
    likes: Record<
        string,
        {
            authorId: string;
        }
    >;
}

type FirebaseQuestions = Record<string, IQuestionFirebase>;

export const useRoom = (roomId?: string) => {
    const { user } = useAuth();
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [title, setTitle] = useState();

    useEffect(() => {
        const roomRef = ref(database, `rooms/${roomId}`);

        onValue(
            roomRef,
            (snapshot) => {
                const databaseRoom = snapshot.val();
                const firebaseQuestions: FirebaseQuestions =
                    databaseRoom.questions ?? {};

                const parsedQuestions = Object.entries(firebaseQuestions).map(
                    ([key, value]) => {
                        return {
                            id: key,
                            content: value.content,
                            author: value.author,
                            isAnswered: value.isAnswered,
                            isHighlighted: value.isHighlighted,
                            likeCount: Object.values(value.likes ?? {}).length,
                            likedId: Object.entries(value.likes ?? {}).find(
                                ([key, likes]) => likes.authorId === user?.id
                            )?.[0],
                        };
                    }
                );
                setQuestions(parsedQuestions);
                setTitle(databaseRoom.title);
            },
            {
                onlyOnce: false,
            }
        );

        return () => {
            off(roomRef, "value");
        };
    }, [roomId, user?.id]);

    return { questions, title };
};
