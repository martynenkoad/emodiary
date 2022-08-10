import React from "react"
import { useUserContext } from "./useUserContext"

export const useLogIn = () => {
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(null)
    const {dispatch} = useUserContext()

    const logIn = async (login, password) => {
        setIsLoading(true)
        setError(null)
 
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ login, password })
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { logIn, error, isLoading }
}
