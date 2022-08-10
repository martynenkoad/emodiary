import React from "react"
import { Link } from "react-router-dom"

export default function SignUptext() {
    return (
        <div className="sign-up-text">
            <p>Don't have an account yet? {':('} Don't worry!</p>
            <Link to='/signup' className="sign-up-link">
                Follow me to sign up!
            </Link>
        </div>
    )
} 