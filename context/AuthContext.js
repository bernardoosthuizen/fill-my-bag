import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../config/firebase";

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
    
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
             if(user) {
                 setUser({
                    uid: user.uid,
                    email: user.email,
                    name: user.displayName, 
                 })
             } else {
                 setUser(null)
             }
        })

        return () => unsubscribe()
    }, [])
    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}  