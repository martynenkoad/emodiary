import React from "react"
import { Link } from "react-router-dom"
import { useUserContext } from "../hooks/useUserContext"
import { useLogOut } from "../hooks/useLogOut"

export default function Nav() {

    const { user } = useUserContext()
    const { logout } = useLogOut()

    const handleClick = () => {
        logout()
    }

    return (
        <div className="navbar">
            <Link to="/" className="link head">
              <h1>Emo Diary</h1>
            </Link>

            {user && (
                <div>
                    <div className="logout">
                        <button className="logout-btn" onClick={handleClick}>Log Out</button>
                    </div>
                </div>
                )}
             
            <ul>
                
                {!user &&
                <Link to='/login' className="link">
                    Log in
                </Link>
                }
                {user && 
                <Link to='/diary' className="link">
                    Emo Notes
                </Link>
                }
                <Link to='/about' className="link">
                    About
                </Link>
                <Link to='/support' className="link">
                    Support
                </Link>
                
            </ul>
        </div>
    )
}