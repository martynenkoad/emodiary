import React from "react"


export const NoteContext = React.createContext()

export const noteReducer = (state, action) => {
    switch(action.type) {
        case "SET_NOTES":
            return {
                notes: action.payload
            }
        case "CREATE_NOTE":
            return {
                notes: [action.payload, ...state.notes]
            }
        case "DELETE_NOTE":
            return {
                notes: state.notes.filter((nt) => nt._id !== action.payload._id)
            }
        case "UPDATE_NOTE":
            return {
                notes: state.notes.filter((nt) => nt._id === action.payload._id ? action.payload : nt)
            }
        default: 
            return state
    }
}

export const NoteContextProvider = ({ children }) => {

    const [state, dispatch] = React.useReducer(noteReducer, {
        notes: null
    })

    return (
        <NoteContext.Provider value={{...state, dispatch}}>
            {children}
        </NoteContext.Provider>
    ) 
}