'use client'
import { useState, createContext, useContext, useEffect} from 'react'
import { auth, provider } from '@/firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null,
        isAdmin: false
    })

    const registerUser = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)    
    }

    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = async () => {
        await signOut(auth)
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, async (user)=>{
            console.log(user)

            if(user){
                const adminList = await fetch(`http://localhost:3000/api/Admin`,
                {cache: "no-store"}
                ).then(r=>r.json())

                const authorization = adminList.find(doc=>doc.email===user.email)
                
                if(authorization){
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid,
                        isAdmin: true
                    })
                }else{
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid,
                        isAdmin: false
                    })

                }

            }else{
                setUser({
                    logged: false,
                    email: null,
                    uid: null,
                    isAdmin: false
                })
            }
        })
    }, [])

    return(
        <AuthContext.Provider
        value={{
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}