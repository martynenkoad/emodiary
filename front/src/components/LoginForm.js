import React from "react"
import { Link } from "react-router-dom"
import { useLogIn } from "../hooks/useLogIn"

export default function LoginForm() {

    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { logIn, error, isLoading } = useLogIn()

    async function handleSubmit(e) {
        e.preventDefault()

        await logIn(login, password)
    }
 
    return (
        <form className="login-form" onSubmit={handleSubmit}>
          <input 
          className="form-input"
            type="text"
            placeholder="Login"
            onChange={(e) => setLogin(e.target.value)}
            value={login}
          /> 
          <input 
            className="form-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          
            <button disabled={isLoading} className="btn">Log In {'<3'}</button>
        
          {error && <div className="error">{error}</div>}
        </form>
    )
}