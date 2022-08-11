import React from "react"
import { useUserContext } from "../hooks/useUserContext"
import { useNoteContext } from "../hooks/useNoteContext"

// date functions
//import formatDistanceToNow from "date-fns/formatDistanceToNow"

export default function NotesAside(props) {
    const note  = props.note
    const { dispatch } = useNoteContext()
    const { user } = useUserContext()

    if(!user) {
        return
    }
 
    const handleDelete = async () => {
        const response = await fetch('/api/note/' + note._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if(response.ok) {
            console.log(json)
            dispatch({ type: 'DELETE_NOTE', payload: json })
        }
	// window.location.reload(false)
    } 

    

    return(
        <div className="notes-aside">
          <div className="single-note-title">
            <p onClick={() => props.getNote(note._id)} >{note.title}</p>
          </div>
          <span onClick={handleDelete} className="header-btn del">del</span>
        </div>
    )
}
