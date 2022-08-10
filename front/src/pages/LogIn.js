import React from "react"
import LoginForm from "../components/LoginForm"
import SignUptext from "../components/SignUpText"
import { useUserContext } from "../hooks/useUserContext"

export default function LogIn() {
    const {user} = useUserContext()
    
    return (
        <div className="home">
            {!user && <div>
                  <LoginForm />
                  <SignUptext />
                </div>}
            
        </div>
    )
} 