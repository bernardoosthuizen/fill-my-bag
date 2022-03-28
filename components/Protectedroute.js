import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"

export const ProtectedRoute =({children}) => {

    const {user} = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(!user) {
            router.push('/login')
        }
    }, [router, user])

    return(
        <>
        {user ? children : null}
        </>
    )
} 