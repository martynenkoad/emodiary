import React from "react"
import { NoteContext } from "../context/NoteContext"

export const useNoteContext = () => {
    const context = React.useContext(NoteContext)

    if(!context) {
        throw Error('useNoteContext must be inside NoteContextProvider')
    }

    return context
}