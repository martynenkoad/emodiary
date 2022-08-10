import React from "react"
import { useSignUp } from "../hooks/useSignUp"

export default function SignUp() {

    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const { signup, error, isLoading } = useSignUp()

    const handleSubmit = async (e) => {
      e.preventDefault()

      await signup(firstName, lastName, login, password)
    }
 
    return (
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="column">
              <input
                className="form-input"
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              <input
                className="form-input"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </div>
            <div className="column">
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
            </div>
          </div>
          <button className="btn" disabled={isLoading}>Sign Up!</button>
          {error && <div className="error">{error}</div>}
        </form>
    )
}
