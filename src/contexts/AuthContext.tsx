import { createContext, ReactNode, useEffect, useState } from "react";

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase";

import { IUser } from "../types/IUser";



type AuthContextType = {
    user?: IUser,
    signInWithGoogle: () => Promise<void>
}

interface AuthContextProviderProps {
    children?: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthContextProvider = (props: AuthContextProviderProps) => {
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                const { displayName, photoURL, uid } = user
                if (!displayName || !photoURL) {
                    throw new Error('Missing information from Google Account')
                }

                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                })
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider()

        const result = await signInWithPopup(auth, provider)

        if (result.user) {
            const { displayName, photoURL, uid } = result.user
            if (!displayName || !photoURL) {
                throw new Error('Missing information from Google Account')
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            })
        }
    }
    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            {props.children}
        </AuthContext.Provider>
    );
}