import React from "react"
import { useUserContext } from "./useUserContext"

export const useSignUp = () => {
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(null)
    const {dispatch} = useUserContext()

    const signup = async (firstName, lastName, login, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(':4000/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ firstName, lastName, login, password })
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

    return { signup, error, isLoading }
} 