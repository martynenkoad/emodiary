/*
1. create the context
2. create reducer function (accepts state & action):
    - switch by the type of an action
    - 3 cases: 'LOGIN', 'LOGOUT', default
3. create UserContextProvider arrow func which accepts children ;) :
    - destruct useReducer, don't forget to pass there func & user obj which is null
    - use effect where you: create user by parsing 'user' from localStorage,
                            check if user alredy exists
    - return children obj inside the provider (don't forget about the value)
*/
 
// PAYLOAD = DATA
import React from "react"
 
export const UserContext = React.createContext()

export const userReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return {
                user: action.payload
            }
        case 'LOGOUT': 
            return {
                user: null
            }
        default: 
            return state
    }
}

export const UserContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(userReducer, {
        user: null
    })

    React.useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if(user) {
            dispatch({type:'LOGIN', payload: user})
        }
    }, [])

    console.log('UserContext state: ', state)

    return (
        <UserContext.Provider value={{...state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

